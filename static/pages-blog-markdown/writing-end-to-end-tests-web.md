---
title: Step by Step - Writing end  to end tests for your web project
published: true
description: How to implement end-to-end tests using Nightwatch and NodeJS
tags: javascript, react, testing, e2e
author: Kyle Johnson
avatar: /static/images/blog/kyle.png
date: 10-dec-2018
---

Based on my previous post [Hacking our e2e tests to make them more useful](https://dev.to/kylessg/hacking-our-e2e-tests-to-make-them-more-useful-2gaj), there seemed to be little resources available for writing e2e tests. This is something I've become a strong advocate of since helping write [Bullet Train](https://bullet-train.io).

<img src="https://media.giphy.com/media/1AIR5b2wYTtNUVuSlw/giphy.gif"/>

This guide starts with a simple project and step by step adds e2e testing, each step links to a git diff so you can see exactly what I did. 

If you find this useful or would maybe prefer me to do a video covering this let me know.

# The project
 
End to end tests are super useful for regression testing time-consuming workflows, this example will go over perhaps the prime use-case for this, user registration and confirming a user's email address. 

The project is a simple react web application with a node backend, with it you can log in, register and receive a confirmation email address email using [SendGrid](https://sendgrid.com). Our test will go through all of this workflow so we don't have to keep manually testing it in the future. 

The scope of this tutorial isn’t to go over how the application is built, however as a brief overview:

- There is a [Node API](https://github.com/kyle-ssg/e2e-tutorial/blob/master/server/api/user.js) that has endpoints to log in, register and confirm email. 
- Then on the frontend side we have [a few pages](https://github.com/kyle-ssg/e2e-tutorial/tree/master/web/pages) written in React that host our login/register/confirm email address fields and functionality.


# 1. Project Setup
*The Project: [https://github.com/kyle-ssg/e2e-tutorial/](https://github.com/kyle-ssg/e2e-tutorial/tree/master)*

## 1.1. Installing nightwatch, selenium and chromedriver

```
npm i nightwatch selenium-server chromedriver --save
```

We are going to need to install 3 things to get started:
 1. Nightwatch - a nice API for interacting with web drivers and selenium.
 2. selenium-server - needed in order to run our web driver.
 3. chromedriver - communicates to the selenium server via WebDriver’s wire protocol. 


Installing selenium-server and chrome driver as npm modules mean that you don't need to worry about global dependencies to run the tests. You can run this on any machine with different operating systems, and more importantly as part of CI pipelines without having to worry about if and where these binaries come preinstalled.

## 1.2. Writing a nightwatch.conf.js file

Nightwatch comes with a lot of [configuration options](http://nightwatchjs.org/gettingstarted#settings-file) which can be a bit overwhelming.

Based on my experience here's the [minimum config you'll need](https://github.com/kyle-ssg/e2e-tutorial/blob/master/nightwatch.conf.js). The two key difference here to their default config is:
 1. We allow our chromedriver and selenium-server node modules to define where the binaries are located. 
 2. We set end_session_on_fail to false, allowing us to interact with the browser if errors occur. [More on how this can be useful here](https://dev.to/kylessg/hacking-our-e2e-tests-to-make-them-more-useful-2gaj)

```
const chromedriver = require('chromedriver');
const seleniumServer = require('selenium-server');
const os = require('os');

const browserSize = 'window-size=1024,768'; // define how big to make the browser screen

module.exports = {

    'selenium': {
        'start_process': true, // tells nightwatch to start/stop the selenium process
        'server_path': seleniumServer.path,
        'cli_args': {
            'webdriver.chrome.driver': chromedriver.path, // chromedriver from our npm module
        },
    },

    'test_settings': {
        'end_session_on_fail': false, // don't close the browser straight away on fail in case we want to check the state
        'default': {
            'desiredCapabilities': {
                'browserName': 'chrome', // Run the e2e test in chrome
                'chromeOptions': {
                    // In linux we pass a few more arguments
                    'args': os.platform() === 'linux' ? ['headless', 'no-sandbox', browserSize] : [browserSize],
                },
            },
            'globals': {
                'waitForConditionTimeout': 5000, // global default time to wait for element to exist.
            },
        },
    },
};
```

Rather than go into a lengthy explanation, see the comments above on exactly what each property is used for.


## 1.3. adding a script in package.json to run tests 

In our package.json we just need to write an npm script to [run nightwatch](https://github.com/kyle-ssg/e2e-tutorial/blob/master/package.json#L16).

```
    "test:e2e": "nightwatch ./e2e/index.js"
    
```

## 1.4. Writing our test entry file

The entry file exports an object containing our tests and a before and after hook:

```
module.exports = Object.assign(
    {
        before: (browser, done) => { // Runs before tests start
            // runs before all of the tests run
            done();  // tell nightwatch we're done after we have done all of our bootstrapping
        },
        after: (browser, done) => { // Runs after the tests have finished
            // runs after all of the tests run
            browser.end(); // kill the browser
            done(); // tell nightwatch we're done
        },
    },
    // the main tests
    require('./register.test')(),
    require('./login.test')(),
);
```

## 1.5. Our skeleton tests

Before we go into writing our e2e tests, the following is some example syntax on how our tests are structured:

```
module.exports = () => ({
    'Registration - test page loads': function (browser) {
        browser.url('https://google.com')
            .waitForElementVisible('body') // page load
    },
});
```

We give each assertion a title, then we execute functions using the browser object. This may be
 - Waiting for an element to be visible
 - Clicking a button
 - Setting the value of an input
 - Switching to an iframe

These functions are called one after another and wait for the previous to complete, they can be chained so that you can write whole workflows whilst keeping tests small e.g:

```
browser.url('http://localhost:8080')
    .waitForElementVisible("#my-input")
    .setValue("#my-input", "test")
    .click("#my-button")
    .waitForElementVisible("#confirmation-button")
    .click("#confirmation-button");
    .waitForElementVisible(...)
```


At this point, we are ready to start integrating Nightwatch with our code. We can currently run **npm run test:e2e*** which launches Chrome, navigates to Google and validates that the body tag is visible. 


# 2. Writing our first test
*[Code for this section](https://github.com/kyle-ssg/e2e-tutorial/compare/step_1_adding_our_first_test)*

## 2.1 Running our application locally with Nightwatch

So now that we have Nightwatch configured and we can run tests on external pages, we now want to do the same but on localhost as if we ran the application locally. The only tricky thing about this is that we need to know our server is ready before we progress with our tests. With a bit of trickery, we can do exactly that with Node's [child_process.fork()](https://nodejs.org/api/child_process.html#child_process_child_process_fork_modulepath_args_options) which spawns a child process that can communicate via IPC.

```

const fork = require('child_process').fork;

const server = fork('./server'); // start our server

```

Once we start the server with ***process.fork()*** we listen for it to tell our parent process that it's done with ***[process.send({ done: true });](https://github.com/kyle-ssg/e2e-tutorial/blob/master/server/middleware/webpack-middleware.js#L19)***. Revisiting the before hook Nightwatch provides we wait for this acknowledgement message before starting the tests. Similarly, when the tests finish we want to kill the server.


```
 before: (browser, done) => {
            // runs before all of the tests run, call done() when you're finished
            server.on('message', () => { // boot up the server which sends process.send({ done: true }); when ready
                done();
            });
        },
 after: (browser, done) => {
            // runs before all of the tests run, call done() when you're finished
            browser.end(); // kill the browser
            done(); // tell nightwatch we're done
            server.kill('SIGINT'); // kill the server
        },        
```


## 2.2 Targeting DOM elements sensibly

While we could target our elements via their class name's or id's, I personally feel it's better to target via data-test properties. This way, you have a better idea of whether you're going to affect your tests. To add a bit of syntactic sugar I created the following util:

```
byTestID: id => `[data-test="${id}"]`,
```

With this setup, we add data-test="your_id" to the key elements and write our test.

```
const { byTestID } = require('./util');

module.exports = (email, password) => ({
    'Registration - test page loads': function (browser) {
        browser.url('http://localhost:8080')
            .waitForElementVisible(byTestID('login-page')) // page load
            .click(byTestID('toggle-login')) // click toggle login
            .waitForElementVisible(byTestID('registration-email')) // wait for registration form
            .setValue(byTestID('registration-email'), email) // set fields
            .setValue(byTestID('registration-password'), password)
            .click(byTestID('registration-submit')) // submit form
            .waitForElementVisible(byTestID('check-email-page')); // wait for confirm email page
    },
});

```


## 3. Finishing our confirm email tests with mailinator
*[Code for this section](https://github.com/kyle-ssg/e2e-tutorial/compare/step_1_adding_our_first_test...step_2_testing_confirm_email)*

Most of the tests from here on are generally quite simple to write. The only tricky part was writing a few utility functions that deal with mailinator. This sort of thing you want to pull out from the main tests as you may want reuse to use/maintain them from one place.


```
 gotoMailinator(browser, email) {
        const target = email.replace('@mailinator.com', ''); // get the mailinator username
        // goto the inbox and wait for the content to be ready
        return browser.url(`https://www.mailinator.com/v3/index.jsp?zone=public&query=${target}#/#inboxpane`)
            .waitForElementVisible('#inboxpane');
    },
    clickFirstMailinatorMessage(browser) {
        // click the latest message in the inbox pane
        browser.waitForElementVisible('#inboxpane table tr td:nth-child(3n)')
            .click('#inboxpane table tr td:nth-child(3n)');
    },
    getMailinatorMessage(browser) {
        return browser.waitForElementVisible('#msg_body') // wait for the content to be ready
            .frame('msg_body') // switch to the message content's iframe
            .pause(1000); // the most reliable way I've found to ensure the content has loaded
    },
```

Using this and writing some very similar tests to our first we end up with the above code and our end-to-end workflow of user registration, confirm email address and login.

<img src="https://media.giphy.com/media/28evywxMTHbvLdLakP/giphy.gif"/>

Expanding on this we would start writing tests that check that validation all checks out for invalid data and add test for any new major workflows.

Feel free to checkout the example on GitHub, adding a .env file with SENDGRID_API_KEY="YOUR_KEY" should give you everything you need to run the tests!

Happy hacking!

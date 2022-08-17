---
title: Using our continuous integration tool to continuously integrate our continuous integration tool
published: true
description: A good example of how to use Bullet Train to manage and release features remotely
author: Kyle Johnson
avatar: /public/images/blog/kyle.png
image: https://storage.googleapis.com/ssg-website-images/bullet-train/bullet-train.png
date: 10-nov-2018
tags: tools
---

During the development of our feature flagging tool <a href="https://bullet-train.io"/>Bullet Train</a>, we got to the point where we were actually using <a href="https://bullet-train.io"/>Bullet Train</a> to develop <a href="https://bullet-train.io"/>Bullet Train</a> so that we could continuously integrate while we continuously integrate.

We developed <a href="https://bullet-train.io"/>Bullet Train</a> with the belief that continuous integration is something that all development teams should aspire to. Feature flags and remote config can be a huge help to the achieving the goal of CI, especially into production. So, following this belief and to avoid being hypocritical we used its benefits to CI to develop the tool itself.

<img src="https://i.imgflip.com/2c5koa.jpg"/>

<a href="https://bullet-train.io"/>Bullet Train</a> is an open source project that lets you separate releasing and configuring features from code. You can manage feature flags and remote config across several languages on web, mobile and server-side applications.

## Using CI and Bullet Train is not all or nothing decision

Developers often consider taking the leap to continuous integration as an all or nothing decision, but it doesn't have to be that way. CI can be used at any point in your project using feature flags to roll out into production on a feature by feature basis.

<img src="http://www.pokerupdate.com/assets/Managed/NewsArticles/poker-all-in-slider.jpeg"/>

A great example to demonstrate this is how we started to use <a href="https://bullet-train.io"/>Bullet Train</a> on itself. We pushed out an initial Beta release in June 2018. Immediately following the release we started on a forgot password feature.

At this point the project was stable, we had End to End tests using [Nightwatch](http://nightwatchjs.org/) that ran with every commit we pushed, so we were in a great place to start using continuous integration. These are the exact recorded steps we took to create a project and integrate the new forgot password feature with <a href="https://bullet-train.io"/>Bullet Train</a>.

## Step 1: Signed up
We created an account on <a href="https://bullet-train.io"/>https://bullet-train.io</a>.
<img src="https://image.ibb.co/nf5C7y/signup.png"/>

## Step 2: Created a project
Step 1 automatically created an organisation called Bullet Train and added me as a member. The next step was to create a project.

<img src="https://media.giphy.com/media/1SzJiKed03cSWwiTCj/giphy.gif"/>

## Step 3: Created a feature flag for "forgot password"
Bullet Train automatically creates a development and production environment for newly created projects. We created a feature flag called ```forgot_password```.

<img src="https://media.giphy.com/media/1ffNjU8hha2pkCDAkG/giphy.gif"/>

## Step 4: Integration

At this point we had a forgot password feature which was disabled on both our development and production environments. The next step was to use the JavaScript SDK to show/hide our forgot password feature.

As soon as I created the feature I was provided with a couple of code snippets to install and integrate into our code.

<img src="https://preview.ibb.co/mqer2y/code_snippets.png"/>

Of course, how you integrate it is up to you. In our case, we had a React application and a Flux store which broadcasted when feature flags changed. Finally, our homepage would show the forgot password link depending on what Bullet Train returned. You can see the commit for this process <a href="https://github.com/SolidStateGroup/bullet-train-frontend/commit/8192b905e2ef177817bcabb91f5693a5b785fc4d#diff-9cc8a89e380f5af71da71c573661881dR98">here</a>

Using feature flags meant that I could release this feature into production as is without holding up other development.

## Step 5: Enabling the feature

With my new forgot password feature in production all I had to do was enable it so it could be deployed to the world. As soon as I enabled the forgot password feature in the dashboard I could see it on the site.

<img src="https://media.giphy.com/media/3d1s0A0xjg8IdA7GDt/giphy.gif"/>

## How does this help us?

People who are not used to continuous integration might be wondering: why didn't I just release the feature the way I normally would? Some of the reasons for feature flags being such a good approach:

- It allowed me to move to enable continuous integreation for production. Every commit that is pushed to master now automatically builds to production.
- It introduces the ability to test code in production with gradual/targeted rollouts to specific users.
- It empowers non-technical team members to manage feature releases.
- It enables testing of features early, against an up-to-date codebase. CI means we're constantly testing features on a very close representation to what is running in production.
- It allows you to introduce beta programs to get early user feedback.
- It reduces the need to rollback code with the ability to turn off features remotely in the event of an emergency.

Happy Developing!

<a href="https://bullet-train.io">
<img src="https://raw.githubusercontent.com/SolidStateGroup/bullet-train-frontend/master/hero.png"/>
</a>

---
title: Overcoming bottlenecks between design, frontend and backend developers
description: A few things you can do to help work better together in your development team
date: 30-may-2019
author: Kyle Johnson
published: true
avatar: /static/images/blog/kyle.png
image: https://res.cloudinary.com/practicaldev/image/fetch/s--Nz0ggTil--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i.ibb.co/QnSn2xD/traffic.jpg
---

During my job as a frontend developer for Solid State Group, I've seen several scenarios which block work for specific areas of the development team. Be it design, markup/style implementation, technical frontend or backend, at one point or another they reach a point where they are relying on someone to complete some work before they can get on with their task.

Over the past few years, I've been quite interested (rather selfishly) in finding as many ways as possible to get to a place all these people can work happily in parallel as much as possible without being ground down to a halt.

## Some scenarios

To set the scene, here are some examples of the sorts of things I'm referring to:

- A frontend developer wants to start building out a feature but the API isn't ready yet.
- A backend developer wants to start building out a feature but is not sure what frontend needs in terms of data.
- A backend developer is making some changes (e.g. removing some fields from a DTO) but is not sure if changes will break frontend.
- A technical frontend developer (who does not generally touch markup/CSS) is developing a feature but not sure what markup /styles are available to use.
- A design based frontend developer (who does purely markup/CSS) is ready to replicate designs but the technical frontend implementation or data isn’t ready.
- A designer adjusting markup but is unsure of how to get to the page required.
- A developer is validating a particular scenario issue or feature but has to go through tedious app state(onboarding etc) to get to the place they want.
- A developer new to a project needs onboarding from another developer to understand the codebase.

Here are some solutions...

## Developing with pact-js

<img src="https://raw.githubusercontent.com/pact-foundation/pact-logo/master/media/logo-black.png"/>

<br/>
My recent experience with Pact is probably worth a post of its own, it has changed how we approach development on larger projects for the better and has saved an immense amount of time.

Pact, by itself, is a contract testing tool. A consumer of data (in this case the frontend) defines what it wants from a data provider and publishes this to a broker before doing any work. Developers of the provider (in this case the API) reference this and use it to develop against.

Both frontend and backend developers can work against this single source of truth once it is defined, using it as a basis to discuss changes if they arise. Expanding on Pact a bit, we've built on top of it to automatically generate a local mock server on the frontend.

As a result, often we've found that we can develop a large chunk of an application only then to flip the switch from localhost to a development API to start integration testing. During this time both the frontend and backend developers aren't waiting for each other to complete bits of work before knowing where they stand.

**Before Pact**
 - We'd either have to wait for backend or frontend to be built first then wait for each other as we eventually deemed things weren't suitable.
 - Optionally we could use something like Apiary. This albeit a great tool will not help you track changes and test that the current API is doing what the frontend needs.

**After Pact!**
- Pact files are used as the single source of truth, tests can be written to ensure changes to the API payload won't affect the frontend.
- A frontend developer can use the Pact JSON as a mock server, this is really useful for developing when you can't reach the API or when endpoints don't exist/haven't been changed yet. This is much better than working against a static JSON variable because when the API is ready you can simply switch the endpoint from localhost.
 
## Component based development and a style guide page
<img src="https://i.imgur.com/klecdce.png"/>

Recently in our web and mobile projects, we've kept a page that contains every single component the application presents. In particular, I've found this works really well with React and React Native.

Non-technical developers on the design side can implement the designs without getting bogged down in application logic, while technical developers have a reference to what markup to use when implementing new features.

Not only this, but it often means that any bugs or tweaks to do with appearance can be worked on once in a single place rather than tracking down a certain screen or workflow.

**Before style guide pages**
 - Technical developers would have to remember what CSS classes and components correspond to certain designs.
 - Non-technical developers would get bogged down trying to find where to implement markup.
 - To implement a change, developers would have to navigate the appropriate page, often including tedious workflow such as user registration/onboarding.

**After style guide pages!**
- Technical developers can easily find and reuse components already developed by designers.
- Improves overall codebase by making developers develop simple, reusable components.
- Non-technical developers have a simple page that isn't bloated by code to implement the markup for their designs.
  
## Add teardown endpoints

Being able to efficiently test workflows and clear down the data saves a lot of time and prevents the need from relying on backend developers to clear down databases.

**Before teardown endpoints**
 - Development environments would get filled with garbage test data.
 - Testers or developers may need to rely on data being cleared down before they can continue testing.

**After teardown endpoints!**
 - Workflows can be tested over and over and cleared down without any repercussions.

##  Develop your application so that you can simulate complicated scenarios

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--Zt0VBETr--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://preview.ibb.co/kkXXD9/download.png"/>

Having covered this in a bit more detail in [my post here](https://dev.to/kylessg/using-feature-flags-for-client-demos-and-simulating-complex-scenarios-1gih), this idea is more about developers not being throttled by the complexity of a large app. 

I must have spent days on old projects constantly registering as a new user to test out onboarding or messing around with integrations with hardware just to get to the part I'm working on. 

The solution is to build your app in a way that it can be manipulated into certain states via a constants file, or better yet a [remotely configured feature flags](https://bullet-train.io)

**Before simulation flags**
 - Diagnosing and fixing bugs/features took a lot longer to replicate.
 - Checking what happens in certain scenarios requires a lot of manual effort.

**After simulation flags**
 - Demonstration/replicability of scenarios takes a lot less time.
 - Bugs and features in obscure parts of your application become a lot easier to develop on.

## Standardising project structure and setup

I won't go into how much developers should rely on boilerplate magic after all every project is different. In our case, we build 10s of projects per year, so having a standardised setup for development has been crucial.

Previously, I'd seen developers sit together for half a day or more getting people set up and aware of the oddities of a particular project. Having a base layout project makes developers new on a project feel like they've worked on it before.

If you are interested, here's a [lite example](https://dev.to/kylessg/a-sensible-approach-to-cross-platform-development-with-react-and-react-native-57pk) of what our frontend project is based on.

**Before Base layouts**
 - We'd have to invest a lot more time into initial project setup and infrastructure. 
 - Working on new projects was sometimes very painful to get going.
 - New developers needed more support from the existing team for every project.

**After Base layouts!**
- Developers can start developing on a project a lot quicker and they are familiar with where to begin based on previous projects. 
- Previous gotchas on projects are already covered based on previous iterations.
- Developers can more easily be switched in and out of projects without there being too much reliance on a select few.


Hopefully, people have found some of these tips useful! Let me know what practices you use to help work better together.
---
title: It’s cross platform and massively reduces app dev costs, but WTF is React Native?
published: true
description: We helped a startup cut down from 3 development agencies to 1 whilst mirroring features across Web, iOS and Android, releasing all 3 simultaneously. All because of a little thing called React Native.
author: Sara Jones
avatar: /static/images/blog/sara.jpg
image: https://storage.googleapis.com/ssg-website-images/react-native-blog.png
date: 02-aug-2017
---

We helped a startup cut down from 3 development agencies to 1 whilst mirroring features across Web, iOS and Android, releasing all 3 simultaneously. All because of a little thing called React Native.

At [Solid State](http://www.solidstategroup.com) we’re early adopters of [React Native](https://facebook.github.io/react-native/) and have seen it grow massively since its initial public release in 2015. In this post I’ve highlighted *how *we used it and *what we learnt -  *so you can save time and money when building your own apps (or we can on your behalf).

React Native is a framework that lets you build iOS and Android apps in Javascript using a shared codebase. Apps in React Native aren’t "hybrid" or “HTML5”, they are fully native. Developers can make use of any native functionality that exists on Android and iOS without having to be an expert in their retrospective languages. For example we wrote one that allows us to communicate with Ford car HUDs!

At this point it’s good to point out that using React Native does not mean you’ll automatically have an amazing architecture and that everything will suddenly start working. It should be seen more as one of the valuable moving parts in your project that helps you plan and achieve re-use across all platforms.

## How we came to use it

In early 2015 Solid State Group started development of [Dugout FC](https://www.dugoutfc.com/)’s fantasy football web app, the project came with some pretty demanding technical features for its initial release (live player scoring model and a real time drafting system to name a couple). Moreover the application had to be cross platform without sacrificing some of its unavoidable complexities.

Around ¾ of the way through developing the web application two additional agencies were hired to get started on the native phone applications. Initial progress to get a login page working on the mobile platforms was fairly quick however it became a struggle to keep up the velocity. As development slowed, we realised that for both apps to feature parity with the web application was going to be a huge challenge.

A few months passed and the buzz around React Native started to pick up. We decided to try and separate the hype from truth and try it out. We created one of the app’s most complex pages to give us an idea whether it could actually be used in production. We turned around this page in 2 days, including environment setup. The clients were shocked and certainly had a big decision to make! Around 6 months later we had a fully functional application on all platforms and are continuing to release new features across all three platforms.

## Jumping from web to mobile

The first step is identifying all of shared functionality that you want web and mobile to be able to use. For Dugout FC this was a significant portion of the app’s actions (filtering, sorting, getting data from the API etc) and accounted for over 80% of our web application code base. This step is important to get right as you build on these time savings every time a developer works on the application.

Once we had all of our common components in one accessible place the challenge seemed far less daunting. We developed UI components, plugged the interactive parts in, and to our pleasant surprise we had our first page up and running.

The process seemed surprisingly natural to us as we were all developing a language we were comfortable with, and could carry over the experience of working with React on the web. Having a team that can develop to the same level on mobile and web is a huge performance gain for the project.

## What we’ve learned

Having worked closely on the project (and a lot of similar projects since then), here are some of the common challenges we witnessed and how they have been solved by incorporating React Native into our front-end architecture:

**1: Develop within a single team in JavaScript**

Relaying requirements across several development teams is difficult**, **This is especially true if teams are at different stages in the project, or happen to be entirely different companies based in different locations. During the early development of Dugout FC I often had to describe complicated features that needed to be completed on mobile, doing this between multiple teams and reaching the same outcome was very challenging and often involved a quite a bit of to and fro.

One of the biggest benefits with this chosen architecture is the ability to be able to work on requirements as a single team, be confident that they are executed in the same way on web and mobile, and have the ability to change quickly when problems arise.

**2: Develop features simultaneously for web and mobile**

Features often need to be released in unison and rely on all platforms to be released in co-ordination. Rather than reinventing the wheel 3 times per feature, the apps can be released on a single codebase by a single team. This approach allows us to be more flexible and deploy new features at a faster rate.

**3: Bugs such as "When I click this save button the app crashes, but only on iPhone"**

When given even a simple problem a developer can probably solve it in a number of ways, traditional cross platform projects can end up inheriting a lot of platform specific code and workarounds overtime. Device specific bugs will crop up and may become more frequent as a project grows.

We were able to eliminate a lot of the unexpected differences across platforms by moving roughly 80-90% of the business logic to a common ‘layer’. We almost never have to worry about transactional actions showing different results on web or mobile. However, in cases where there are legitimate platform specific issues we can narrow down the cause of it a lot easier.

## When to use React Native

Whilst it can be tempting to use the latest flashy framework, it’s important to objectively look at the project’s requirements and choose an architecture fit for purpose. Having said that we’d strongly recommend React and React Native if:

- You want to share functionality between web and mobile and intend on shipping new features across all of these platforms in the future.
- You want to develop an app on both iOS and Android. Even if you’re going mobile only, the time savings you get by sharing code is still significant.
- You are starting a fairly complex project and suspect that you may need a mobile app in future. React is a solid choice for web regardless of if you go into react native, when it comes to making a mobile app you’ll be especially glad you did.
- You want to be able to effectively test consistency across mobile and web. Unit tests can be written in one place to test shared code.
- You already work with React for web. The transition from React to React Native is incredibly straight forward given the outcome.
- You wish to keep on the bleeding edge of tech. The React Native is one of the most actively developed repositories in the open source community and is constantly improving with active development from companies such as Walmart and Airbnb.

We love trying out new frameworks and keeping at the bleeding edge of tech, in cases such as these frameworks have transformed what we can offer.  React Native has proved to be an integral tool in our development process, we are able to release high quality cross platform applications whilst saving our clients money in the process. WIN.
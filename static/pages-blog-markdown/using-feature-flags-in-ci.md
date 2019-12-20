---
title: Bullet Train: Using feature flags and remote config in CI
published: true
description: Why we developed and open sourced Bullet Train, the remote feature management tool.
tags: ci, java, javascript, showdev
author: Kyle Johnson
avatar: /static/images/blog/kyle.png
date: 12-jun-2018
---

Asking a lot of my developer friends, it seems like CI and CD are two practices that people either already employ or wish they did. Developers universally love to get their new features released, it's a satisfying part of the job. In an ideal world, we could release features constantly, but as projects grow in complexity and users, that hasty push to master becomes far too risky.

This post explains what I found when using feature flags and why Solid State Group ended up open-sourcing https://bullet-train.io.


## Reducing release cycles and stress
<p align="center">
<img alt="Reduce stress with Bullet Train" height="400" src="https://cdn2.stylecraze.com/wp-content/uploads/2015/07/2798-How-To-Make-A-Stress-Ball-At-Home-ss.jpg"/>
</p>

Having worked on projects with release cycles in the months, I found great relief employing this approach. Previously, I found the following:

- UAT involved extensive testing of several interlinked unreleased features.
- Hotfixes that couldn't wait have to be merged, these would have been applied to the production code and may conflict/produce side effects on the stagnated code. 
- With so much going on, it's difficult to keep track of what exactly is going into a release.
- Seemingly minor features have taken way too long to release, sitting there for weeks without producing value.
- The implications of releases were often quite high, releasing lots at once carries the risk of the application blowing up, requiring a rollback in severe cases.

Simply put, big releases are expensive and complicated. Releasing often reduces baggage and ironically risk.

## What are "feature flags" 
What surprised me was that although the people I spoke to were very positive towards these practices, only around half of them had heard of feature flags. That means features can be in production, but not switched on until required.

A Feature Flag is a technique to turn some functionality of your application off, via configuration, without deploying new code. 
If you’re employing CI/CD and releasing often they’re pretty important.

## Why "feature flags" matter
For me, the ability to control features outside of my codebase and even enable them for internal users in production suits this practice perfectly.
There are a few feature flag services out there boasting several benefits:
- Separate code releases from deploying features
- Introduces the ability to test code in production with gradual/targeted rollouts
- Empowers non-technical team members to manage feature releases
- Allows testing features early and against non-stagnated code.
- Allows you to introduce beta programs to get early user feedback.
- Reduces the need to rollback code with the ability to turn off features remotely.

## Where feature flags fall short
It's great being able to turn features on and off without doing a build, but with some features, it's not as simple as that.  This is where **remote config** comes in. 
Often there's a need to configure feature properties, for example updating some text to promote an in-app currency sale. For mobile apps, I'd previously used Firebase's remote config, which often meant the difference between waiting for a 2 days or more collaborating iOS and Android builds.


## Introducing Bullet Train

Since we'd seen great benefits in using both feature flags and remote config we decided to build our own internal product. This would mean we could take our existing websites/mobile apps and use a more consistent/formal approach to the work we'd done.

We couldn't find any system that combines the two approaches we'd been using. Products that came close like LaunchDarkly were way out of our price range and didn't really offer what we wanted.

The platform is 100% Open Source and has JavaScript, React Native, NodeJS and Java SDKs, so you can self-host all of it if you want. We're also hosting an API and admin front end for people for people to try out. We even used it to develop Bullet Train!
Feel free to give some feedback on the site at bullettrain@solidstategroup.com.

Happy Developing!

<a href="https://bullet-train.io">
<img alt="Bullet Train - Ship features with confidence" src="https://raw.githubusercontent.com/SolidStateGroup/bullet-train-frontend/master/hero.png"/>
</a>





---
title: Innovations in React Native - CodePush
published: true
description: The final part of our healthcare tech deep-dive covers direct-to-consumer startups to examine the underlying megatrends to adopt for your business.
author: Sara Jones
avatar: /static/images/blog/sara.jpg
image: https://storage.googleapis.com/ssg-website-images/React%20Native%20innovations%20codepush/build%20pebbles%20header.jpg
date: 25-02-2018
---

### Innovations in React Native

In each blog of this series, we’ll explore an innovation in React Native, the framework for building cross platform mobile apps. For the basics, check out "[WTF is React Native](https://www.solidstategroup.com/2017/02/08/2017/Its-cross-platform-and-massively-reduces-app-dev-costs-but-WTF-is-React-Native/)", as well as our [mobile applications blog](https://www.solidstategroup.com/tags/Mobile-Applications/) for use cases and our own creations.

This time, we’re looking at [Microsoft’s CodePush](https://github.com/Microsoft/react-native-code-push). And we love it.

It’s a module for React Native which allows you to update your app without having to submit the entire app to the appstore/playstore. This means that you can change content or even features on your app and push them live with users within seconds, handily avoiding the days-long app submission process.

### Why Is This News?

CodePush isn’t actually that new, but the earlier, more primitive, alternatives were almost useless because if there was a mistake in your code and you pushed it live via CodePush, your whole app would crash on launch. That’s a big problem because when apps crash at launch there is no way to rollback the update. You have to completely delete the app and re-install it. No prizes for guessing why that’s a less than optimal UX.

But now, CodePush will detect that a bad build has caused your app to crash, and then when a user next resumes the app, CodePush will immediately automatically roll back the update to the last working version.

And we will know the app’s crashed because CodePush also provides a dashboard for us. It lets us know the amount of rollbacks and other metrics, so we can identify what’s gone wrong and fix it.

Some devs tried to find other ways to push updates without submission to app stores, and a popular one is to create an CMS. We dislike that option because it’s just too extreme. One of our apps has bespoke animation on it, and if we built a CMS for that we’d have completely over-engineered it. CodePush means we can make easy changes without building a CMS.

### When Should I Use CodePush?

We don’t recommend CodePush for every use case and this depends mainly on the stability, not the complexity, of your app.

If you’ve got a complicated app with regular major updates, then CodePush may add an extra moving part that isn’t worth the complexity. 

If your app’s stable, and you’re not adding major core native functionality then CodePush is the tool for you.

We like to incorporate it into our development process for simple apps when we’ve got fast iteration or edit requests. For example, client sign-off, quick feedback cycles, changing client requirements, things like that etc. 

### Who’s Using CodePush?

Loads of people! Here are some [apps from around the world which use CodePush](https://microsoft.github.io/code-push/community/friends.html). 

*For more digital transformation, startup news, and technology innovation, sign up below to our monthly Issues and get our next research straight to your inbox.*
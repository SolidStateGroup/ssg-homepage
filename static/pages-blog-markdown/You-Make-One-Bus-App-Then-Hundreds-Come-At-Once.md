---
title: You Make One Bus App... Then Hundreds Come At Once
published: true
description: It’s pretty straightforward to automate the building and deployment of web applications. For mobile apps, it’s a whole different ballgame. Here's how we implemented Fastlane to speed things up without forcing interns to complete repetitive tasks hundreds of times.
author: Sara Jones
avatar: /static/images/blog/sara.jpg
image: https://storage.googleapis.com/ssg-website-images/You%20Make%20One%20Bus%20App...%20Then%20Hundreds%20Come%20At%20Once/london-bus.jpg
date: 09-nov-2017
---
London buses aren’t known for their speed, but when we were asked to produce a series of micro-apps to show upcoming bus data for an individual route, we needed to hit the accelerator.

Building the app for a single bus route was fairly straightforward – but replicating and deploying it for hundreds of other routes, across both iOS and Android, took some smart thinking.

>when it comes to deploying a finished app on Android and iOS, the process is tediously manual

It’s pretty straightforward to automate the building and deployment of web applications. The benefits are well understood and there are loads of tools around to help you achieve single click builds. For mobile apps, it’s a different ballgame. Building the apps themselves requires a lot more tooling, and then deploying them means submitting them to the app-store review gods and praying for their blessing.

We’re all for using third-party tools to streamline development (and we’ve even built a few of our own), because we use CI (continuous integration), so we’re instantly frustrated by the tediously manual process for deploying a finished app on Android and iOS. It’s like having to hand-sew the teabag before you put it in your mug.

It’s a process which isn’t much of a problem when you’re delivering one big app, but when you need to perform the task hundreds of times... not even the lowliest intern deserves that kind of punishment.

>The solution was a third-party tool called, appropriately enough, Fastlane.

When we started using [Fastlane](https://fastlane.tools/ "fastlane"), it wasn’t as fully developed as it is today: it only supported iOS deployment and it didn’t have as many neat plug-ins as it has now. Even so, it made the iOS side of things far easier.

We wrote a script to take care of copying across resources like app icons, setting up the environment for production and changing values within the project (such as the bus route number). Then we made our first use of Fastlane from within the script, signing (sigh), building an IPA (gym) and then uploading it to iTunes Connect (deliver) along with metadata and artwork. And it worked! We were able to call this script from another script with different options/parameters to generate all of the bus apps for every bus in London.

Android, however, posed a serious problem. Fastlane is not able to create a new app on the Android Play Developer Console; it can only update one. So we decided to make use of Selenium, which we normally use for automated browser testing. A publish script was written in Javascript (using the Javascript based Selenium-webdriver project) which opened a Chrome browser and performed all of the necessary clicks and actions to submit a new app. It took longer to code than expected due to finding out that relying on a particular page layout was a bad idea because they can completely change a few days later! After some rewriting, the script became reasonably stable. It even handled Google’s daily limit of 10 APK uploads by waiting 24 hours before creating the next 10.

We also like to release builds regularly to Testflight for our clients to play with, as part of our CI approach, so we keep things agile and efficient. This time we made use of all aspects of Fastlane without the use of a bash shell script. We found a plug-in to automate generation of the app icon, so we were able to deploy builds to Android as long as the app had been created manually in advance. And we set it up so it would report success or failure to one of our Slack channels.

In the end, we managed to boil down deployment of a test build to a single terminal command: "fastlane beta".

Because the deployment process was so seamless, we found ourselves slipping naturally into a CI (continuous deployment) pattern and building more frequently, much to the delight of our clients.

Apple has now started to encourage developers to steer away from bulk uploading micro-apps like these, so the need to submit hundreds of apps is no longer a problem. Fastlane for us now is a useful way to update standalone apps and add them to Testflight as part of CI, rather than as a bulk upload hack. It gets you out of the bus lane and into the Fastlane…
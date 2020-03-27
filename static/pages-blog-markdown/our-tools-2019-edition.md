---
title: Our Tools - 2019 Edition
published: true
description: Here's what we are using to build Bullet Train, our Feature Flag platform. With some careful VPS purchases, most of this stuff can be run completely free of charge!
tags: webdev, showdev, react, javascript
author: Ben Rometsch
avatar: /static/images/blog/ben.png
image: https://storage.googleapis.com/ssg-website-images/tools-2019/tools-2019.jpg
date: 19-june-2019
---

Here's what we are using to build [Bullet Train, our Feature Flag platform](https://bullet-train.io). With some careful VPS purchases, most of this stuff can be run completely free of charge! 

## GitLab All The Things

GitLab is pretty awesome, and it gets more awesome with every release. The big thing it has going for it is that it integrates a bunch of different tools, and makes them work together to help drive productivity. This also means that a single GitLab instance can manage a large part of the development process.

We self host GitLab. It is a fairly big application so we're running on a 3GB VM on Google's Cloud Platform, but you could easily use a cheaper VPS provider if you wanted to. The open source version of GitLab is called their "Community Edition", but don't be fooled, it's fully featured and is only missing a couple of items from their paid product. It installs pretty easily via their [Omnibus packages](https://about.gitlab.com/install/#ubuntu), and updating is pretty much just ```apt-get update; apt-get upgrade```. 

You can also use their hosted product, which has a great free tier

### Source Code

Well, yeah obviously. All our code is pushed to GitLab. Being open source and self hosted there are no limits to the number of developers or private projects you can host.

### CI/CD

GitLab has a first class CI/CD platform built in. You can get push-to-deploy working quickly and easily.There's only a couple of things you need to do to get up and running.

1. Add a ```.gitlab-ci.yml``` file to the root path of your project. This file contains the commands you need to build your product. 
2. Register a GitLab Runner, basically a service that runs somewhere that can receive jobs from GitLab, run them, and send the results back to GitLab. You can even run the runner on the same machine as the GitLab Instance. 

## Agile Project Management

We still think [Trello](https://trello.com/) is the best of the bunch. Its fast, simple and gets out of the way. Having said that, they have recently been making some changes to their free tier, and so the one other option that might be worth checking out is, again, back in Gitlab. 

You can use the Gitlab issue tracker to manage requirements, and view them in a Kanban board, similar to Trello. A big advantage of doing this is, again, the tight integration between the Gitlab components. For example, if you push a commit with the message ```Fixes #252```, issue number 252 will be refenced by that commit. When you merge that commit into master branch, Gitlab will even mark the issue as resolved! There's a bunch of other integrations that use this pattern. 

## Dev/Staging Builds

We're using the amazing [Dokku](http://dokku.viewdocs.io/dokku/) to run dev and feature branches. Dokku is an amazing bit of software that basically turns your VPS into a mini-Heroku platform. Its pretty simple to create and destroy feature branches, as well as build and deploy development builds. We use [this Docker image](https://github.com/IlyaSemenov/gitlab-ci-git-push) to integrate Gitlab CI with Dokku. 

## Production Hosting

This really depends on the application you are working on. For [Bullet Train, our Feature Flag platform](https://bullet-train.io), we actually split out the hosting:

- Our Web front-end is written in Node/JS and deployed to [Standard AppEngine](https://cloud.google.com/appengine/docs/standard/). It's mega-cheap (as in practically free) and rock solid. 
- Our API is written in [Django/DRF](https://www.django-rest-framework.org/) and uses a Postgres database as its data store. We host this on AWS and Elastic Beanstalk. This gives us decent automated scaling options and a simple deployment process. 

## Feature Flags

Well, we definitely use our Feature Flags to help build our Feature Flags! To ensure a smooth CI/CD process, and to reduce the amount of code that is committed but not deployed, we use our [Bullet Train Feature Flags](https://bullet-train.io) platform within Bullet Train itself. Meta. We have a decent free tier too, so we don't have to pay ourselves to run our feature flags. 

## Support, Email Etc

All free! We're using FreshDesk for our customer issue tracker, [FreshStatus](https://www.freshworks.com/statuspage/) for our status page and [Uptimely](https://uptimely.app/) for our uptime monitoring/outage alerts. 

For email, we're using the pretty awesome [Migadu](https://www.migadu.com) for inbound email, and SendGrid for our outbound email. 

For marketing, [MailerLite](https://www.mailerlite.com/) to manage drip campaigns, and the free tier of [Intercom](https://www.intercom.com/) to do our in-app chat.
---
title: Technical Innovation For Non-Developers - Serverless Architecture
published: true
description: Serverless computing - what is it, what's new, and how can a layman understand it, then use it?
author: Sara Jones
tags: corporates v startups, cloud infrastructure, systems integration
avatar: /static/images/blog/sara.jpg
image: https://storage.googleapis.com/ssg-website-images/innovations%20in%20technology%20-%20serverless%20architecture/cloud%20infrastructure%20header.jpg
date: 7-mar-2018
---

Each month we’re highlighting an innovation in technology so that non-devs can keep up to date with the ever-quickening rate of change - and understand how they can actually take advantage of these new tools to profit their business.

This isn’t a technical deep dive with multicoloured code snippets. This is to let you know that new stuff is happening and help you work out if you need to spend your lunch break researching it further.

For anyone working in innovation, startups, or digital transformation, this series is for you.

This month: it’s cloud infrastructure, and we actually have TWO innovations to show you. One visualises cloud infrastructure workflows, and the other facilitates serverless architecture.

I’ll explain why those two things are the absolute craic for digital transformation.

First, meet the AWS Serverless Applications Repository.

### What does it do?

It’s a marketplace for open-sourced contributions to applications for serverless architecture using AWS Lambda.

Eh what.

**Serverless architecture**: you should all know what cloud computing is, which is using a network of remote servers hosted on the Internet to store, manage, and process data, rather than a local server or a personal computer. 

Serverless is still cloud computing, BUT the cloud dynamically manages the allocation of machine resources, which in plain English means **you pay only for the cloud resources that you use**, not for pre-purchased units.

So instead of running a cloud server for months on end so it’s there ready for when you need to execute a process which takes milliseconds to perform, you just pay for the milliseconds that you actually used. You don’t pay for the down time.

Imagine a box of Celebrations. Previously, if you wanted a mini Mars bar you had to buy the whole box. Even if you only ate the Mars bars, you had to buy the whole box. And you always left the Bounties.

Now, there is a massive magic box of Celebrations which everyone in the world can access and you can nab a Mars bar whenever you want and only pay for the Mars bar and that’s ok because some other madman eats the Bounties.

Amazon’s version of this magic Celebrations box is called [AWS Lambda](https://aws.amazon.com/lambda/), that’s Amazon’s Serverless Platform. That’s what lets you run code serverlessly. But that isn’t the "new" bit we’re focusing on. That’s….

**The Repository**: It’s basically a "github for back-end functions and data processing". Contributors are uploading code for common use cases such as mobile back-ends and IoT, and then anyone can access the source code and deploy it themselves.

### Why Is It News

Amazon opened up the [AWS Serverless Application Repository](https://aws.amazon.com/serverless/serverlessrepo/) on 21st February 2018, fewer than two weeks ago, so this is hot off the press. There are already a ton of deployments, including machine learning to predict red wine quality, a hotdog detector [a la Silicon Valley](https://www.youtube.com/watch?v=ACmydtFDTGs), and an IoT Twitter bridge.

Serverless computing itself is not brand new, we’ve used it ourselves in several projects, but it was quite manual, and ill-integrated into AWS. The Repository will change this like oil on a squeaky wheel.

(Another WD40 for serverless architecture, there is now an editor for Lambda, thanks to Amazon’s acquisition of [Cloud9](https://c9.io/announcement). This allows you to edit functions in a browser, and not in a development environment. So blissfully easy!)

### When Should I Use It?

AWS Lambda, Amazon’s serverless platform, should be used for operations which are relatively minor, e.g. mobile app back-ends, things which use the cloud server infrequently, and/or with short processing times. The Repository will therefore also only deal with code for minor processes.

For example, a use case is a warehouse’s tracking system which notifies you when a product’s been shipped.

Using Lambda and the Repository in this way will save you a ton of money, that’s why we love it. We spend our excess dosh on experimental beer, you could do the same, or hire a bouncy castle, or contribute to your pension, imagine the possibilities.

### Now, on to AWS Step Functions.

Be not afraid. I will use simple words because I am a simple person. And then link to the detailed deep-dives by the actual experts.

Essentially [Step Functions](https://aws.amazon.com/step-functions/) is an organiser. It organises Lambda functions for serverless applications.

### Why Is This Useful?

Step Functions has three big benefits. 

- It visualises your application into a series of steps in a workflow. This helps you see the wood for the trees.You can also change/add steps without writing more code. A brilliant tool is [this one developed by one of the engineers at AWS](https://sbd.danilop.net/). Use it to visualise your workflows.

  This saves time and money.

- Step Functions triggers and tracks each step, and retries when there are errors, and logs the steps and errors so it makes diagnosing and debugging much easier.

  This saves time and money.

- A normal serverless function can only execute for ten minutes because Amazon limits it to 10 minutes to encourage users to only use the platform for minor operations and processes. Step Functions extends that time to a year. As in, it gives you a year-long time period triggered by one step in which it can trigger the next step.

  This enables you to achieve scale. While savi- you get the idea.

### Who Else Uses It?

Let me highlight Coca Cola’s use of Step Functions. 

They use it in Vending Pass. Consumers pay for their drinks with Vending Pass or debit card. The problem is that the mobile wallet display can get out of sync under certain conditions so the app may present the wrong credit balance to the consumer.

With Step Function, the app puts in a 90 second delay to let the back-end catchup and update the mobile wallet, and then display the correct balance to the consumer when this is done.

It’s a cheap but neat solution.

### More info for the curious:

- [Advanced serverless apps with step functions](https://www.slideshare.net/AmazonWebServices/advanced-serverless-apps-with-step-functions-88065949)
- [A look at serverless app creation](https://www.slideshare.net/AmazonWebServices/serverless-state-of-the-union-88065997)
- [Serverless architecture patterns](https://www.slideshare.net/AmazonWebServices/serverless-state-of-the-union-88065997)
- [Building global serverless backends](https://www.slideshare.net/AmazonWebServices/building-global-serverless-backends)

*We’ll be back next month with more innovations in cloud infrastructure, systems integrations, API development, and front-end whizzbangs too. To get them straight to your inbox, sign up to our monthly Issue down below.*
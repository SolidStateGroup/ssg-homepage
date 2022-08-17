---
title: Serverless Architecture - Explained Via Burgers
published: true
description: What is Serverless Architecture, and when should entrepreneurs and innovators use it? Here's our jargon-free explanation.
author: Sara Jones
avatar: /public/images/blog/sara.jpg
image: https://storage.googleapis.com/ssg-website-images/Serverless%20architecture%20burgers%20blog/serverless%20architecture%20header.jpg
date: 24-apr-2018
tags: webdev
---

This is an introduction to serverless architecture for entrepreneurs, innovators, consultants, anyone working on building a product which uses those magic light screens in our hands or on our desks.

Serverless can be difficult to understand, it’s awash with words such as PaaS, IaaS, FaaS, or containerisation. You shouldn’t have to have five wikipedia tabs open to understand whether one of the most important developments in cloud computing is a viable option for your next app.

Ergo, we’ve written an explanation on the workings and commercial opportunities for serverless architecture, jargon free, through the medium of burgers.

We're also exploring new serverless opportunities ourselves, [so get in touch](https://www.solidstategroup.com/contact/) if you want to try out serverless on your own project.

#### Serverless is about to get very very interesting for you. 

#### Why?

It saves you money on hosting. It saves you time on development. It shortens time to market. It aids continuous delivery. It gives you flexibility. (It’s even good for the environment so you’ll be making Sir David Attenborough happy.)

Best of all, it enables automatic scaling that works like a dream.

#### So what is it?

Serverless architecture actually does not mean architecture which does not use a server.

There is very much a server involved. The -less bit means that you yourself do not actually have a server. It is *you* who are serverless, not the app.

A little bit of history:

- God made the world.
- God killed the dinosaurs.
- Someone invented servers.

Servers were big machines which stored data, ran programs, and served "clients", aka computers and smartphones. E.g., you click on a button on a website, the browser, which is the client, contacts the server, the server tells it what to do next with what information when.

Back in the day, these machines lived in cold rooms in warehouses. They were expensive to buy and run, and time-consuming to set-up and run. 

#### Servers Are Burgers In Victorian Times

In the burger analogy, this was the computer equivalent of 1850s housewives having to tour several shops to buy the individual burger ingredients, make do with what’s available locally, then carry coal to the oven, heat it up, construct the burger, cook it in the oven, then choose which of her eighty children got to eat that day.

So, expensive, time-consuming, cold, and full of unpleasant compromises.

#### How The Cloud Changed Everything

And then we invented the cloud. The cloud is nothing more than servers hosted on the internet. This means that the same one server can service lots of different systems all at once as people pool this resource and drink from the same pond thanks to the connectivity of the internet. But, the physical machine still exists, somewhere, on a server farm.

In burger world we called Cloud an All You Can Eat Buffet. No more did the proud housewife have to make her own burgers, she could outsource this to a restaurant kitchen which specialised in burgers and made hundreds a day, achieving economies of scale, and leaving Mrs Housewife free to do things like vote. 

A non-burger example of the cloud is Dropbox as compared with your computer storage. Dropbox is hosted in the cloud, you can access it via the internet from any device anywhere. It is not tied to a particular computer.

Whereas if you save a doc directly to your computer, you can only access it via that specific computer. That's how non-cloud servers work too.

#### Problems With The All You Can Eat Buffets

The thing with All You Can Eat Buffets is you pay a set fee regardless of what you actually use. Sometimes the company will make money because your grandma eats like a bird, sometimes they’ll lose money because your dad completes The Twenty Burger Challenge. You’ve outsourced your burger-making, you can choose to have one burger or a hundred, but it’s one-price-fits-all.

But what if you went to an All You Can Eat Buffet, except, you actually only paid for the amount of food you actually ate.

AKA, a restaurant. McDonalds.

Revolutionary right?!

Or imagine using Dropbox and paying only for the few seconds you use it for, not the yearly subscription.

That’s how serverless works for enterprise. It’s still the cloud, it’s still a restaurant making burgers for you, but you pay as you go. Oh and you can now order 10 million burgers in 10 seconds too. That's how good at scaling Serverless can be.

> So in summary, if we named our burger-making services like we name serverless architecture, McDonald’s would be called a kitchenless restaurant. It has a kitchen, but *you* don’t. Therefore, you don’t need to manage the kitchen, you just use what comes out of it.

However, in order to achieve this PAYG facility, you’re not just outsourcing your servers, you’re actually also sort of outsourcing your backend developers and DevOps teams who manage and code on those servers. You’re outsourcing the chefs.

By extension this changes how you build products, manage them, and optimise them.

We may have the power to outsource kitchens and chefs and still get bespoke burgers while only paying for what we eat, which works wonderfully for cases such as IoT or mobile, but it does have several important drawbacks which mean that serverless is not for every product every time.

#### These are some of the drawbacks:

1. Cost Savings

   You probably mainly buy your burgers from McDonalds in two ways: randomly, or in bulk. You go to a fast food restaurant when you don’t expect it but need food quick. Or, you’ve got twenty kids at a birthday party to feed once a year. In those two cases, it does not make sense to cook from scratch your own burgers. In Use Case 1, you’ve not got time. In Use Case 2, you don’t have the tools or skills for bulk cooking.

   Serverless works well in a similar way: when you need to serve low levels of traffic quickly, or when you need to serve a sporadic massive spike in traffic way beyond what you normally get. Serverless is fantastic in these two cases.

   Serverless is not yet recommended for consistently high levels of traffic.

   For example, if you regularly eat twenty burgers a day, then the All You Can Eat Buffet is best for you because it’s cheaper and easier.

2. Integration challenges.

   Serverless needs a lot of integration testing for complicated reasons to do with granularity.

   To a person using the self-serving machine in McDonald’s, all they need to see is "pick chicken nuggets". But your backend needs to translate that into “take chicken out of freezer, dump in flour, fry for twenty minutes”. The machine has to break down every order into very granular instructions to get the machines to actually make the nuggets, so there’s a big margin for error.

#### In A Nutshell, Serverless Has Big Benefits

1. Serverless saves you big money on hosting costs because they bill you only for what you use.
2. Serverless works really well for big spikes in traffic, no warm-up required.
3. Serverless reduces your need for DevOps or backend development resources.
4. Serverless aids continuous deployment and reduces time to market.
5. Serverless improves your security because you've outsourced it to experienced professionals.
6. It tastes really good with chilli sauce and smoked cheese.

I hope this has helped you understand serverless as a concept, and whether to explore it for your project. 

I’ve used burgers here to keep things simple. But if you want to read more, you’re going to need to learn the new words. Here’s a quick list of the serverless basics to get you started.

- **FaaS - Function As A Service**. FaaS is the platform you would use to build your application on a serverless architecture. You build and run your application using functions, which is why it’s "FaaS". Examples include AWS Lambda, Google Cloud Functions and Microsoft Azure Functions.
- **BaaS - Backend As A Service**. BaaS is the bridge between the frontend of an application (i.e what the users sees) and the backend on the cloud. It saves you having to build your own features from scratch, you can just plug in to existing ones such as push notifications or social network integration. It’s often compared to FaaS, PaaS etc.
- **PaaS - Platform As A Service.** This would probably be your alternative to FaaS for those consistently high levels of traffic. PaaS lets customers develop, run, and manage apps without building and maintaining the infrastructure.
- **No Ops **- Serverless has been called "No Ops" because you outsource so much of your DevOps. However, the name is very misleading as you still need some operations and tooling, so don’t listen to anyone who uses it. 
- **Kubernetes** - Kubernetes is a platform for using containers to build your app. Containers are commonly used in cloud computing in similar use cases to serverless to give similar benefits. It’s sometimes shorthanded to K8s. [A competitor is Docker, and we explain containers more here](https://www.solidstategroup.com/2016/07/13/2016/what-is-docker/).
- **Auto-scaling** - Auto-scaling is used in cloud computing to describe the automation of scaling the server resources you use. It automates lowering server use during low traffic and raising server use during high traffic. PaaS fans use it to support their contention that containers and cloud are better for high traffic, while FaaS fans decry it as too slow for spikes in traffic.

*Interested in more practical insights into technical innovation, straight from the devs' mouths? Sign up to our monthly Issue down below.*

[*More innovations in cloud infrastructure can be found on our blog here*](https://www.solidstategroup.com/2018/03/07/2018/Technical-Innovation-For-Non-Developers---Serverless-Architecture/).

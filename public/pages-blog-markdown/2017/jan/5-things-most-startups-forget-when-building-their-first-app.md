---
title: 5 things most startups forget when building their first app
published: true
description: At Solid State we've been building apps for startups and corporates for years. With a big focus on rapid development I've seen all the mistakes, and made a few myself.  This is my quick guide to bypass some of the horror.
author: Ben Rometsch
avatar: /public/images/blog/ben.png
image: https://storage.googleapis.com/ssg-website-images/pexels-photo-237911.jpeg
date: 19-jan-2017
tags: corporates v startups
---

At [Solid State](https://solidstategroup.com/) we've been building apps for startups and corporates for years. With a big focus on rapid development I've seen all the mistakes, and made a few myself.  This is my quick guide to bypass some of the horror.

## 1: It's okay to CHEAT

If you can buy a service instead of building it, do that. Always do that. If you can cheat a way out of not building something, do that as well. If you can cheat a way around getting users, or getting yourself heard, or getting some press, do that too.

A good example of a nice shortcut we made was when we were building [Dugout FC](https://www.dugoutfc.com). We wanted players to be able to upload a profile picture, but we knew that this was a really painful problem. Image resizing, cropping, people uploading different file formats, aspect ratios, supporting older browsers. Just all really painful, for what is a pretty simple feature from the user's point of view.

We thought there must be a better way of cheating with this feature, and straight away found [UploadCare](https://uploadcare.com/). For 25 bucks a month, we can avoid ALL of that development effort. Drop in some JS tags and we were done. That saved us dozens of hours of development and debugging effort, allowing us to spend more time and money on more important features.

**There is a big list of cheats at the end of this article.**



## 2: It's NEVER about the tech

DO NOT START WITH THE TECH. Start with the business, always. Customer development. Market size. Competition. Whats the PR and marketing landscape?

GET AWAY FROM THE COMPUTER. Go outside. Talk to people. Ask hard questions. Read [The Mom Test](https://www.amazon.co.uk/Mom-Test-customers-business-everyone/dp/1492180742?tag=httprobfitcom-21). Never assume. Be inquisitive.

DO NOT CODE. Play devil's advocate. And then play it again. Imagine the worst case scenario. Have an answer to the question "how will you get users". Then stop and think about it again and come up with a better answer.

DO NOT INIT A GIT REPOSITORY. Build a landing page. NOT WITH THAT AMAZING NEW STATIC SITE GENERATOR. DO IT WITH SQUARESPACE; I SAID DO NOT CODE AND I MEANT IT.



## 3: Build with what you know

If you want to learn Pheonix, Elixir and BEAM, fine. If you want to build a startup product quickly, use what you know. That framework and language you've known for years? The one you really have no interest in using? Use that (as long as it's not Perl; don't use Perl).

Make sure that you have some sort of half-baked (or even fully baked, but if half baked is quicker and works, why even bother with fully baked) continuous delivery setup working from the start. Use Heroku or Flynn or Dokku or AppEngine or something like that.

Don't worry about hosting costs; statistically speaking your idea will probably fail anyway. Worry about that, not about the extra 10 bucks a month you spent hosting it. Being able to deploy often will help with your product development. Get it set up from the start to make sure you have maximised the benefit.

Do not SSH into anything, ever. If you have the need of an SSH client whilst building your MVP, you're doing it wrong.



## 4: Analytics Analytics Analytics

Probably the most important thing to come out of an MVP is data related to product-market fit. If you aren't capturing that data, or you haven't defined what you need to capture in order to make that call, you're largely wasting your time. Watch [this video](https://www.youtube.com/watch?v=n_yHZ_vKjno) and digest it all. Think about what your key metric or metrics are.

We *really* like [Segment](https://segment.com/) for tracking data. It allows you to enable and disable different analytics platforms easily and without the need for any app deployments. Other good platforms that have a generous free tier are [MixPanel](https://mixpanel.com/) and [Amplitude](https://amplitude.com/).

Think about user attribution. Use [Branch](https://branch.io/).

*Don't go mad*. It's tempting to start tracking every single piece of data possible. That can be a rabbit hole you really don't want to go down, and will just make the job of analysing your data all the more complicated. Focus on capturing data that will enable you to evaluate your key metrics, and leave it at that.



## 5: Scaling doesn't matter

Really, it doesn't. Estimate how much traffic you will get if things start going really well. Then divide that number by 10. That's probably more accurate. If you have a scaling problem, you're on the right track. Scaling problems are things you should hope for, not develop for.

These days it's so cheap and easy to get incredible performance improvements with some low hanging fruit and a memcache instance.

Performance, on the other hand, *does matter*. There are some things that you shouldn't ignore, and making sure your MVP is fast, responsive and provides a high fidelity experience out of the gate is important. It's not hard to do; just follow best practise and keep things simple.



**MY BIG CHEAT LIST**

There's a bunch of stuff you can cheat with.

- [Twitter Digits](https://get.digits.com/) - Authorise mobile users with SMS.
- [UploadCare](https://uploadcare.com/) - As discussed above.
- [Segment](https://segment.com/) - Explained in more detail below.
- [Flynn](https://flynn.io/) - Don't worry about deployment or hosting - just use Flynn. It's just incredibly good.
- [Back4App](https://www.back4app.com/) - For push notifications.

We've also open sourced a couple of libraries that work really nicely with React Native and Firebase:

- [Simplified Firebase authentication for React Native projects](https://github.com/SolidStateGroup/react-native-firebase-auth)
- [Simple Firebase auth](https://github.com/SolidStateGroup/simple-firebase-auth)



Ben Rometsch is the founder of Solid State Group

At SSG we remember the Roundabout before it was Silicon. When we moved into our Old Street office, there were only a handful of tech startups in the neighbourhood – and 14 years later, we’re still going strong.

We’ve seen hype cycles go full circle and dotcom bubbles burst. We’ve seen the latest tech become legacy tech. And we remain at the heart of it all, working with startups and corporations alike, swiftly creating and transforming systems that are built to last.

We don’t get carried away by the latest tech trends, but our engineers know a good idea when they see one. (They’ve come up with a few of their own too.) That’s why we’ve earned the long-term trust of brands like BA, Unilever, VISA and Disney. And it’s also why so many startups trust our judgement when planning their future.

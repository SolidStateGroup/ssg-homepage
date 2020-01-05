---
title: Introducing: Our new homepage
published: true
description: How we split our homepage from the Bullet Train application 
tags: bullet-train, new-feature
author: Kyle Johnson
avatar: /static/images/blog/kyle.png
date: 17-dec-2019
---

<img alt="Introducing Bullet Train's new homepage" src="/static/images/blog/new-feature/new-homepage.svg"/>

As we often boast, Bullet Train is completely open-source, which is why combining our homepage with our application was perhaps the wrong decision. A very helpful user of Bullet Train raised [this issue](https://github.com/BulletTrainHQ/bullet-train-frontend/issues/6) and rightly so, for many of our customers that self-host the application it was quite strange that they were greeted with a marketing page.

Not only this, but there's also a rather selfish aspect to this on our part (Sorry!). By splitting our marketing page from our application we get the chance to fully zone in on SEO and leverage the performance benefits we can get by having fully static / server-rendered pages without the weight of our single-page app.

## Tech stack

For the past year, I've been loving [next.js](https://nextjs.org/), and I've found it fits this use case perfectly. My goal was to squeeze every bit of performance, SEO and accessibility I can out of the pages, and monitor them using lighthouse.

Before going further, here's a brief list of the libraries the site uses and their purpose, you can also check it out on [GitHub](https://github.com/BulletTrainHQ/bullet-train-homepage)

- bootstrap, only the grid and a couple of components are used.
- cookie / cookie-js for isomorphic cookie support.
- eslint and prettier for checkstyles.
- lodash and moment for utils.
- next-sass for sass support.
- next-source-maps for sourcemap support.
- next/bundle-analyzer, great graphing that highlights what libraries bloating your app per page. 
- NextJS for SSR and static site generation.
- react-markdown for helping with this blog.

## What is Lighthouse and how did it help?

One of the main goals for this homepage was not just SEO, but also achieving great accessibility and performance. Lighthouse is an audit tool by google that generates a report on how your page is doing within all these areas.

<img alt="Bullet Train Lighthouse score" src="/static/images/blog/new-feature/lighthouse.png"/>

Following the results of these tests and their recommendations has helped with this a lot, and has lead to a great performance as well as improving our Moz statistics week by week.

If you have any questions with anything discussed in this post, let me know in a comment!

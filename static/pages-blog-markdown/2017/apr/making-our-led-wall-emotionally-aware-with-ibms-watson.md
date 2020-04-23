---
title: Making our LED Wall emotionally aware with IBM’s Watson
published: true
description: It’s friday afternoon and things are starting to wind down as the weekend approaches. We decided to add a cool new integration to our MASSIVE LED wall.
author: Kyle Johnson
avatar: /static/images/blog/kyle.png
image: https://storage.googleapis.com/ssg-website-images/watson/watson-cover-new.jpg
date: 07-apr-2017
tags: hackathon
---

It’s friday afternoon and things are starting to wind down as the weekend approaches. We decided to add a cool new integration to our [MASSIVE LED wall](https://solidstategroup.com/2017/03/03/2017/we-built-a-giant-pixel-wall-for-fun-but-what-we-learnt-went-a-lot-further/). Jumping on the AI and NLP bandwagon we decided to make our LED wall emotionally aware with [IBM’s Watson API](https://www.ibm.com/watson/developercloud/tone-analyzer.html).

One of function of our [rio API](https://github.com/SolidStateGroup/rio) functions take text (from twitter, web/mobile forms etc) and displays it on the wall.

![image alt text](https://storage.googleapis.com/ssg-website-images/watson/1.gif)

Albeit cool we decided to go one step further, we now analyse the text and determine if it reflects anger,disgust,fear,joy or sadness.

![image alt text](https://storage.googleapis.com/ssg-website-images/watson/2.gif)

![image alt text](https://storage.googleapis.com/ssg-website-images/watson/3.gif)

### How does this magic work?

At a high level here’s what actually happens:

1. A request comes through to display text on the wall (from a twitter stream or an an API request)

2. Our text input processor takes the message and posts it to Watson’s API

3. Watson sends a response giving a range of emotions with a score for each, we take the highest score and configure the message to send based on the emotion.

4. We draw the text to a HTML canvas in a series of animated frames and then send the color data to our raspberry pi firmware to control the LEDs.

The code to make this  all happen has been added to github, so you can try it out for yourself - specifically the Watson integration can be seen here: [https://github.com/SolidStateGroup/rio/pull/4/files](https://github.com/SolidStateGroup/rio/pull/4/files).


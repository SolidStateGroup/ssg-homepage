---
title: Building a pixel wall in virtual reality with React VR and RIO! Our first impressions
published: true
description: We got such a great reception from our project RIO and were so excited to see it posted by the likes of Adafruit, Motherboard and Raspberry Pi we decided to simulate our 3d wall in the office in virtual reality.
author: Kyle Johnson
tags: corporates v startups, mobile applications, systems integration
avatar: /static/images/blog/kyle.png
image: https://storage.googleapis.com/ssg-website-images/react-vr/react-vr-cover.png
date: 04-may-2017
---

![react-vr](https://storage.googleapis.com/ssg-website-images/react-vr/react-vr.gif)

We got such a great reception from our project [RIO](https://github.com/SolidStateGroup/rio) and were so excited to see it posted by the likes of [Adafruit](https://blog.adafruit.com/2017/03/17/play-games-post-videos-and-share-gifs-on-this-giant-led-wall-piday-raspberrypi-raspberry_pi/), [Motherboard](https://motherboard.vice.com/en_us/article/hey-wanna-play-mario-kart-on-a-giant-lite-brite-wall) and [Raspberry Pi](https://www.raspberrypi.org/blog/giant-led-wall/) we decided to simulate our 3d wall in the office in virtual reality. This post sums up our first impressions of React VR and have open sourced all the code for you lovely people so you can get started!

During SXSW 2017 we were introduced to Facebook’s incubator project, [React VR](https://github.com/facebook/react-vr). We decided to dive straight in and create a 3D virtual pixel wall and check it out on the oculus rift we have in the office.

Being a **very early** adopter of a new technology is a lot of fun, but can be tough. There aren’t lot of resources, there can be bugs or performance issues but it’s very satisfying when you get a solid outcome and can sometimes add a vital tool to your development process. If the project gains popularity off you quickly become one of the more experienced development teams in the community - we found exactly this in 2015 with React Native.

## Jumping into VR - Getting started

React VR is a library that lets you build web VR applications using JavaScript. You can create animated 3d scenes and view/debug them in your browser and with your Oculus/Gear VR headset.

For web developers, transitioning to React VR from standard web development may not be as straight forward as creating your first mobile application with React Native. This because the concept of developing in 3d is a lot different to web and mobile development, having said that it gave us a great head start in getting something working.

Getting started was very simple, just a few commands and we were greeted with a Hello World application. We could plug in our VR headset and look around a 3d room, pretty cool!

![react-vr](https://storage.googleapis.com/ssg-website-images/react-vr/image_1.jpg)

## First iteration - Creating a 3d shape from an image in realtime

The next steps were to get realtime data from RIO and show it in 3D, this was quite simple as we’d previously allowed very simple integration for any technology using JavaScript. Our first demonstrable idea followed shortly, we created a 3d material every time we got something new to show and applied it to a spherical object.

![react-vr](https://storage.googleapis.com/ssg-website-images/react-vr/image_2.gif)

## Second iteration - Creating dynamic particles effects from an image in realtime

This was an OK start however all we were really doing was wrapping a 2d image around a sphere, we decided to move onto something a bit more interesting.

Our next demonstration takes any image or video and displays every pixel as a particle in VR, stronger colours are animated to appear closer to you.

![react-vr](https://storage.googleapis.com/ssg-website-images/react-vr/image_3.gif)

## Third iteration - Leveraging the power of RIO

RIO offers a lot of features out the box, once the particle effects were added we can now add more interesting features such as sending tweets, Slack messages, gifs, youtube videos and even play games - this can all be seen in Virtual Reality!

![react-vr](https://storage.googleapis.com/ssg-website-images/react-vr/image_4.gif)

## First Impressions

React VR shows a lot of promise, it’s great to be able to leverage the power of React in VR. The community itself is still quite small, there are very few examples online of people using this technology and it will be interesting to see how much momentum it gets in comparison React and React Native’s huge success.

Looking around there are next to no examples of using React-VR, but don’t worry we have you covered - checkout the [vr branch on rio](https://github.com/SolidStateGroup/rio).


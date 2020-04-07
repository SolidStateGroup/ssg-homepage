---
title: We built a giant pixel wall for fun, but what we learnt went a lot further.
published: true
description: Every tech company has side projects and Solid State is no different. It keeps devs motivated and flexes the bits of the brain sometimes not quite reached by day to day coding.
author: Niall Quinn
avatar: /static/images/blog/niall.jpg
image: https://storage.googleapis.com/ssg-website-images/rio/rio-cover.jpg
date: 03-mar-2017
---

Every tech company has side projects and Solid State is no different. It keeps devs motivated and flexes the bits of the brain sometimes not quite reached by day to day coding. Sometimes these side projects become products, sometimes we crack open a beer and ask "what the hell were we thinking", but always we learn something - about the process, and perhaps ourselves.

We’ve been deep in client software dev projects for months and decided the next internal project needed to be a physical thing - BUILD THE WALL we cried aloud. Well, in truth, we shouted this over Slack, until the pixel wall became a thing. As this thing took shape over the weeks I realised that despite all the cool tech, the late night coding and problem solving, it was never just about the wall. Here I’ve documented what we did, what we learnt and how I feel about the project.

## Inspiration

We were inspired by Google Creative Labs [anypixel.js](https://googlecreativelab.github.io/anypixel/). project (an open-source software and hardware library for creating big, interactive displays).

We looked around at the kit available and what we ended up with was RIO: Rendered-Input-Output. Powered by a custom mobile app, RIO invites players to experience a selection of lo-fi videogames through an interactive wall of LED’s. It also lets users post gif’s, videos and typography on the fly - this has to be fun after all.

![image alt text](https://storage.googleapis.com/ssg-website-images/rio/rio-vid.gif)

## Keeping things simple and lightweight

We enjoy experimenting with and merging together various technologies, but didn’t see the point in over engineering things. Initially we experimented with implementing Google’s library but soon realised it was an over engineered approach for our requirements. We felt that we could create a library ourselves that's a lot easier to build on top of and understand for curious developers who wanted to build something cool.

## The software

We needed a way to send data to our pixels, so we set about developing a simple api for  ‘drawing’ to our pixels.

We used Slack as an interface for passing gifs or videos from the internet and converting them to match the number of pixels on our display. We also made a web app that uses the HTML5 Canvas element as a way to draw and send data directly to the pixel wall.

![image alt text](https://storage.googleapis.com/ssg-website-images/rio/rio-webapp-example.gif)

We could then interpret all this data and output it to the LED’s themselves.

<div class="row images">
    <div class="col-md-6">
        <img src="https://storage.googleapis.com/ssg-website-images/rio/mario-terminal.gif" class="img-responsive">
    </div>
    <div class="col-md-6">
        <img src="https://storage.googleapis.com/ssg-website-images/rio/mario-giphy.gif" class="img-responsive">
    </div>
</div>
    <p class="text-center image-caption">Writing coloured pixels to the terminal as a preview to what will be displayed on our LED’s</p>


## Hardware

In [Google’s installation](https://www.youtube.com/watch?v=58pxJ8z1Vow), their documentation showed that they were using custom PCB’S and several custom microcontrollers to drive their pixels. We decided to simplify the hardware side of things on our end so got our API working with a typical Arduino setup and some WS2812B’s (industry standard chainable LEDs).


<div class="row">
<div class="col-md-6">
    <img src="https://storage.googleapis.com/ssg-website-images/rio/image_5.jpg" class="img-responsive">
</div>
<div class="col-md-6">
    <img src="https://storage.googleapis.com/ssg-website-images/rio/IMG_2002-new.jpg" class="img-responsive">
</div>
</div>
 <p class="text-center image-caption">Actual plans - on paper of all things</p>

<div class="row">
<div class="col-md-4">
    <img src="https://storage.googleapis.com/ssg-website-images/rio/image_7.jpg" class="img-responsive">
</div>
<div class="col-md-4">
    <img src="https://storage.googleapis.com/ssg-website-images/rio/image_8.jpg" class="img-responsive">
</div>
<div class="col-md-4">
    <img src="https://storage.googleapis.com/ssg-website-images/rio/IMG_1016-square.jpg" class="img-responsive">
</div>
</div>
 <p class="text-center image-caption">Look at our excitement - IT’S ALIVE</p>


## We’re gonna need a bigger wall

We soon got bored of our crude 6 x 5 led prototype and upgraded to a 15 x 10 matrix complete with some buttons so we could of course, play LED pong.

![image alt text](https://storage.googleapis.com/ssg-website-images/rio/prototype-led-pong.gif)

## Scaling up

Once we’d finished with our initial prototypes we had to start thinking about scaling up. With more pixels however comes more problems,  LED’s gobble up RAM and draw a lot of power so we switched from an Arduino to a Raspberry Pi, and got ourselves a pretty hefty power supply. We mounted our led’s (2040 of them, to be exact)  on a two metre wide piece of acrylic, ensuring our pixels were all equidistant distance from each other.


<div class="row">
<div class="col-md-4">
    <img src="https://storage.googleapis.com/ssg-website-images/rio/IMG_1550.jpg" class="img-responsive">
</div>
<div class="col-md-4">
    <img src="https://storage.googleapis.com/ssg-website-images/rio/IMG_1833.jpg" class="img-responsive">
</div>
<div class="col-md-4">
    <img src="https://storage.googleapis.com/ssg-website-images/rio/IMG_2029.jpg" class="img-responsive">
</div>
</div>
<p class="text-center image-caption">This is our kind of wall</p>


## Control? This needs a Mobile App

When it came to interaction with the wall we wanted to keep it flexible.

We’d prototyped with arcade buttons and even had it "loading" new games using an RFID reader. One thing we’re good at its building mobile apps, so it seemed sensible making one to control the output of the display.

The app consisted of a SNES inspired controller for playing retro video games, a messaging function to send text to the wall, a live drawing application and a virtual preview of what was being displayed on the wall. We modified open source HTML5 Canvas versions of arcade classics to work with our API. Most of them happened to use React which was really convenient (we love React, see our other [post](https://solidstategroup.com/2017/02/08/2017/Its-cross-platform-and-massively-reduces-app-dev-costs-but-WTF-is-React-Native/)).

We added some other games such as Snake, Breakout and Super Mario Bros for good measure.

![image alt text](https://storage.googleapis.com/ssg-website-images/rio/rio-mobile-example.gif)

## What did we learn?

DO WHAT YOU LOVE: Beyond all the technical merits of this, what mattered to me most was that we reminded ourselves what excited us about dev in the first place. We learnt that fuelled by a beer or two 3 devs would happily stay up late to hack something fun together.

KNOW WHAT YOU DON’T KNOW: We also reminded ourselves that there is lots we don't know - particularly when it comes to hardware. It takes time to build material things.

BE KIND, REWIND: In past projects I’ve worked on that have a physical component to them I’ve spent hours fiddling with electronics only to be confronted with failure. This project was no different, particularly once we started to scale up. Just like building a piece of software, it’s necessary to build in time to scrap and iterate concepts and designs.

So, in conclusion …

We don’t think it's necessary to over engineer. What we ended up with was a lightweight alternative for building your own connected displays. We’ve included a [link to a repository](https://github.com/SolidStateGroup/rio)[ ](https://github.com/SolidStateGroup/rio)with all our bits and pieces which hopefully others can learn from . All you need to do is buy your own hardware, and maybe a few beers ;) Have fun.

You can see all the photos of the physical build [here](https://photos.google.com/share/AF1QipNE6GI4yR7Xrj-BhyxLmDCA498l7PvgQ-71pDI70WiOFIKoqHnMmzYIydt_a2q4AA?key=RnRaRVdpVHpDQTIxMHl5SzBVemd6ZjU1WWRIejZ3).
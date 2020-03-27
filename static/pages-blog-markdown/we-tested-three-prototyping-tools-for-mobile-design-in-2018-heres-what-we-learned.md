---
title: We Tested Three Prototyping Tools For Mobile Design in 2018 - Here's What We Learned
published: true
description: With increasing frequency, clients are seeing the value of animation in their products, and as a consequence, we’ve found ourselves looking for the best tools to showcase concepts before diving into development.
author: Niall Quinn
tags: mobile applications, user interface design
avatar: /static/images/blog/niall.jpg
image: https://storage.googleapis.com/ssg-website-images/prototyping-tools-2018/header-dark.jpg
date: 26-nov-2018
---

With increasing frequency, clients are seeing the value of animation in their products, and as a consequence, we've found ourselves looking for the best tools to showcase concepts before diving into development. 

The benefits of building interaction design and animation into prototypes is huge. Being able to demonstrate concepts at a very high fidelity allows our clients to see their vision coming to life and we can deliver something tangible, quickly. Our project teams also love being involved in the design process, as they are able to red flag anything that might be a little ambitious or could cause heartache during development.  We don't like to 'spring animation on developers' and take them by surprise, so being able to fully demonstrate the design requirement is a huge help.

With so many tools out there available we decided to look at three in particular that we could potentially use in our workflow; old timer [Principle](http://principleformac.com/), somewhat newcomer [Invision Studio](https://www.invisionapp.com/studio) and new kid on the block [FramerX](https://framer.com/). 

Lets prototype! 

![Principle protoype](https://storage.googleapis.com/ssg-website-images/3%20tools%20we've%20used%20to%20deliver%20high%20fidelity%20prototypes%20in%202018/lo-fi.jpg)

Before we jump into digital tools we like to establish basic workflows on paper first. This helps us to confirm some simplified IA for the pages, how they work together and the content that lives on said pages.

We then lay out our UI in a screen design tool, in this case [Sketch](https://www.sketchapp.com/), before importing our files into our prototyping tool of choice. 

![Sketch UI](https://storage.googleapis.com/ssg-website-images/prototyping-tools-2018/sketch-ui.png)

# Prototyping Tool-off

We spent a few of hours in each tool with the aim of delivering the same high fidelity motion prototype. We used the onboarding flow for a recent internal project 'You Laugh You Lose' as the test case for this process. 

## Principle 

![Principle Prototype](https://storage.googleapis.com/ssg-website-images/prototyping-tools-2018/ylyl-principle-bg.gif)

We've used [Principle](http://principleformac.com/) for a while at [Solid State Group](https://www.solidstategroup.com/), primarily for designing micro interactions and navigation patterns for web and mobile apps. 

**Pros**
*   Sketch import works really well
*   Principle supports the embedding of video, when static background images just simply don't demonstrate the final visual
*   Principle has a built-in awareness of scroll position.  A lot of our recent projects had interactions based around the current position in the workflow narrative or scroll, so it was incredibly valuable having this available out of the box
*   In addition to this, the Drivers feature allows you to effectively Tween between points in an animation
*   We were able to achieve the desired visuals most rapidly using Principle

**Cons**
*   We were disappointed with the lack of a built-in share feature and subsequently exported the output and shared on our own comms channels
*   Allows you to mirror to your phone, but not that useful if wanting to present to people who are not in the room
*   Lack of feedback mechanisms made iterating on ideas a longer process
*   Ability to create complex designs is limited, so import from Sketch is required and this means editing and prototyping in two seperate tools
*   Principle can get very confusing when animating between artboards. Layer names have to be identical and if you're not organised things can get very messy very quickly


## Invision Studio
<img src="https://storage.googleapis.com/ssg-website-images/prototyping-tools-2018/ylyl-studio.gif" class="smaller-img" alt="Invision Studio Prototype"/>

Although still in "Early Access", we got our hands on [Invision Studio](https://www.invisionapp.com/studio) earlier on in the year and were keen to see what all the fuss was about. As long time users of other Invision products such as the [Craft](https://www.invisionapp.com/craft) plugin for Sketch and Photoshop, and their web platform, I really wanted to like Studio. Unfortunately the amount of bugs I encountered and sub-standard performance of the prototype window (when using more than a few layers) left me wondering if I'd risk using it for client deliverables in its current state.

**Pros**



*   Easy to [learn](https://www.invisionapp.com/studio/learn) and start prototyping with
*   Percentage based units for responsive design and shared component libraries across artboards
*   Nice timeline with options for varying playback speeds, making it simpler to customise easing curves
*   The out of the box animations look really nice, so you can get things looking pretty relatively quickly 
*   Vector based drawing tools which is good for changing assets as you prototype, rather than having to re-import them  
*   Ability to sync your clickable prototype to Invision's web platform for sharing / commenting etc 
*   'Auto Link Layers' feature. Helps you keep your layers and assets organised between artboards 

**Cons**



*   The framerate on the preview window doesn't give you the impression of a high quality output. It seems the larger and more complex your prototypes become, the worse the outputs are.
*   Doesn't let you export your animation as a gif or video. For this you'll have to use separate screen recording software (We used [Monosnap](https://monosnap.com/welcome))
*   Unlike Principle I couldn't add video or sound to my prototypes. This might not be relevant for all prototyping requirements but it is worth noting as another thing that might hold it back from its competitors
*   I couldn't add interactions to nested elements inside shared components  (This seems to be corroborated as a bug in the community forum).  So if you wanted to have a default animation on all buttons in multiple artboards, then you're out of luck


## FramerX

![Framer X Prototype](https://storage.googleapis.com/ssg-website-images/prototyping-tools-2018/ylyl-framerx.gif)

'The Future Of Design is Here' exclaims the new framer website, with an update to its previous product that now allows you to design with [React.js](https://reactjs.org/). As React is our main frontend framework at Solid State Group, the concept was very interesting.  Cue the anti-climax, the components you build in FramerX are not necessarily supposed to be used in production (so the benefit of building prototypes in React are questionable).


<blockquote>
                    <p class="mb-0">"The idea behind Framer X is **not to generate code for you**, but instead to use the code you (or someone else) wrote. Your Framer X components can be a single source of truth. Your whole team can contribute both design and code without having to recreate anything. On top of that, you have access to thousands of components powered by a vibrant community."</p>
                    <footer class="blockquote-footer">FramerX documentation & website</footer>
                </blockquote>

During our internal discussion, we got the same question from the majority… "Would we essentially be developing ...twice?"

Regardless, this is still an interesting concept, as building a library of common interactions / animations from your existing React projects could definitely shortcut the creation of "fully-featured" prototypes in future client engagements.  However when we're using these interaction design tools, we're usually demonstrating a bespoke solution for a specific problem or component, rather than demonstrating well understood interactions that are common to most apps.

Here's what I learned from putting together a different version of our prototype in FramerX.

**Pros**



*   Varying levels of complexity to how you can approach a prototype. Use the 'out of the box' transitions and animations, download components available from the component store or code your own component with your React knowledge. Something for everyone! 
*   Given the strong connection with React.js, your design team can be confident that the concepts they are designing are feasible, when selling them to clients
*   Amazing 'preview' functionality which allows you to send a url to anyone to test your clickable prototype, with impeccable performance
*   As a standalone design tool it feels great, the vector drawing tools are advanced and layout tools provide responsive functionality 
*   The store offers downloadable components to integrate into your prototype, such as [Lottie](https://store.framer.com/package/airbnb/lottie) (React Native library that renders After Effects animations in real time). In our prototype, we were able to use the Lottie component to add some pre-built animations from [Lottie Files](https://www.lottiefiles.com/) to spice up our prototype 
*   This is a web dev environment, with IDE as well as comprehensive drawing tools, allowing for the users to prototype with none, a little, or a lot of development experience (npm modules work in this thing)

**Cons**



*   Building design deliverables in React.js is not going to possible for most design teams so this tool has a very specific use case.  This will provide a steeper learning curve and potentially be more time consuming if you're wanting to do advanced interactions. An acute knowledge of React is not needed in Principle or Studio


## Conclusion

There are so many dedicated products and features being released every week for digital prototyping tools, from [Sketch's built in prototyping](https://sketchapp.com/docs/prototyping/) to Adobe XDs recent updates to allow you to design and prototype using [voice commands and speech playback](https://helpx.adobe.com/xd/help/voice-prototypes-in-adobe-xd.html#main-pars_header). But it is often hard justifying the need to bring any new tool into your workflow.

Principle and Invision both can produce nice looking animations and transitions but there is still a lot of guesswork for developers when it comes to the implementing these in production. FramerX attempts to make the disconnect between design and development a bit smaller with its more advanced features for designing with code. But most designers don't want to have to write code to produce designs and prototypes. The idea of writing components in design software that we can reuse in production is great, but if what the tool outputs is unusable, we don't want to end up developing twice. 

In the end it's about what you feel comfortable with and what fits in to you existing workflow.

Happy prototyping!

_You can try out the You Laugh You Lose MVP[ here](https://you-laugh-you-lose-poc.dokku1.solidstategroup.com/record) on a mobile device._


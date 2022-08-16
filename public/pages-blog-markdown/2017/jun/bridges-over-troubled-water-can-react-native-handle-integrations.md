---
title: Bridges Over Troubled Water - can React Native handle integrations?
published: true
description: How do we create a seamless native user experience on a hotel app, while integrating three different third parties at the same time?
author: Sara Jones
avatar: /public/images/blog/sara.jpg
image: https://storage.googleapis.com/ssg-website-images/imperial/Imperial-hotels-facebook-cover-photo.jpg
date: 29-jun-2017
tags: react
---

Imperial Hotels came to us with an app development request, and we could see that this project was going to be like a Kim Kardashian instagram selfie, i.e. a seemingly simple concept casually executed, but in reality the result of tons of inputs from many different technologies, iterations, edits and third parties. We needed to project elegance and simplicity, while building complexity and flexibility.

A few years ago, we’d have cracked on with Objective C and Java, diligently communicating between teams of android and apple developers to ensure that the two entirely separate apps mirrored each other’s UX, design and features. Nowadays, we turn to our one team, shout React Native! Get Set Code! And sit back and watch the Javascript flow from their beautiful fingers.

But with Imperial’s app request, things were not so simple. We needed to go deeper than Kim Kardashian. We needed to code Kris Jenner.

Let me take you through what Imperial needed: The app itself is Imperial Hotel’s way of verifying guests’ access to premium wifi, as well as supplying those guests with access to information such as bookings, and contact with the reception desk. The main technical challenge was tying together several complex third party systems and a CMS, whilst delivering a seamless native user experience.

>The only exception was for the integration with the wifi provider. We needed to access pretty fundamental code in the phone

The user flow was as follows: a guest, who may not be the person who made the actual booking, submits their information into the app, which then checks the bookings records and verifies the guest. Once verified, the wifi provider automatically connects the phone to the wifi and the app confirms that the user can both connect and access the internet. The user can continue to browse the app content, such as contact information or restaurant recommendations as well as full access to the internet through the Imperial Hotels network.

{% raw %}
<div class="text-center">
    <img style="padding: 0 25%;" class="img-responsive mb-5 mt-5" src="https://storage.googleapis.com/ssg-website-images/imperial/imperial-app.png" />
    <p class="image-caption">Imperial Hotels' app in action, making sure the phone is connected to the wifi, not the data allowance</p>
</div>
{% endraw %}

With the booking API and the CMS, we wanted to avoid the added burden of maintaining these integrations for both iOS and Android. We knew we wanted to use React Native to ensure efficient development for the client - with this we could add all of the required integrations to a single codebase that supports both platforms with no additional maintenance.

The only exception was for the integration with the wifi provider, and this is where RN opponents would want to jump in. We needed to access pretty low level functionality in the phone, and bloggers on the internet usually advise against using RN at all in this instance.  In reality this is where React Native sets itself apart from older cross platform technologies such as PhoneGap and Titanium. We were able to write thin bridges in Java and Objective-C to allow us to access the low level functionality of the phone while still maintaining the benefits of React Native.

In some app builds, the workarounds and the bugs you have to deal with in order to get functioning bridges and an app which is stable and performant can amount to more hassle and cost that using two native apps in the first place.

So it’s testament to just how far React Native has come that we’re able in 2017 to write a stable app with multiple integrations, bridges to low level code, instant updates, APIs and third party involvement - all in one codebase with React Native.

We’ve even written low level bridges in the past for IoT devices in cars, which have performed just as expected, and which was unthinkable just a few years ago.

Of course, there are always improvements to be made. There aren’t a lot of precedences yet, and certainly not for an app of this type in the hospitality sector. So, knowing what we know now, for other projects we’d want to use new tools such as [React Native Navigation](https://github.com/wix/react-native-navigation) which provides 100% native platform navigation on both iOS and Android, making developing slick user interfaces across both platforms a lot simpler.

And as more and more tools emerge, we’re confident that we can build React Native apps indistinguishable from fully native apps, no matter the complexity. The Imperial Hotels app proves to us that app development very much continues to be a team effort with different third parties joining forces to seek success greater than the sum of its parts. My Kim Kardashian analogy very much stands true.

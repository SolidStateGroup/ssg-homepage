---
title: How We Built It - The Secure Healthcare App
published: true
description: This week saw the release of the app we built for PatientView, giving NHS patients control of their medical records, and empowering them to manage their healthcare.
author: Sara Jones
avatar: /static/images/blog/sara.jpg
image: https://storage.googleapis.com/ssg-website-images/How%20we%20built%20patientview%20app/patientview%20header.jpg
date: 17-mar-2018
tags: mobile dev
---

PatientView gives patients access to their own medical records, so they can manage, monitor and message their health whenever they want. It’s a fantastic open source project already used by hundreds of hospitals and health centres in the UK, and it has existed online at [https://www.patientview.org](https://www.patientview.org) for a good few years now.

> But, the future is convenience. The future is mobile.

To truly empower their patients, PatientView knew they needed a performant mobile app to provide access to records and monitoring features, even when offline. 

So PatientView came to us to build this important app - and it was released to the public this week! It’s already trending at #11 in the UK healthcare apps, with five juicy stars on the review count.

You can see the app on the [Play Store here](https://play.google.com/store/apps/details?id=org.patientview.mobile&hl=en), and iOS download is [right here](https://itunes.apple.com/app/patientview/id1263839920).

Here’s our overview on how we built this healthcare app, the challenges we faced, and what we’d recommend other healthcare businesses avoid for their app builds.

### The Clinical Details

Patient data needs to be as safe as houses. Our medical records are amongst our most confidential information, and when even the likes of North Korea are attacking the NHS, healthcare apps in 2018 need to have the highest security standards. Fly-by-the-seat-of-your-pants-and-hack-it-together entrepreneurial thinking does not serve patients, responsibility and duty of care are paramount.

But, it’s one thing making a secure app, it’s another making a secure performant app. In PatientView’s case, the complication was that the data also needed to be available offline, i.e. stored securely on local servers (aka. the phone), with offline user authentication.

Oh boy. Now we’ve got the need for a secure app, a performant app, and an app which can display said secure fast data *offline*.

We solved this by encrypting the data stored locally. To access this data, the user is presented with a challenge to decrypt the data. In PatientView’s case this is a secret word. That is how we solved the offline authentication challenge.

Then if the app is unused for 15 minutes, the sensitive information in memory is cleared and therefore inaccessible to snoopers. Then, when the user returns, the secret word challenge is presented again, and the data is replenished.

And, we were able to do this in a performant way without sacrificing smooth transitions and app performance.

### The Cosmetic Procedure

For the frontend, the UI, we wanted parity between the web experience and the app. Now the web app was built in Angular, but we chose [React Native](https://www.solidstategroup.com/2018/02/27/2018/From-MVPs-to-Raising-Seed-Money---Why-You-Should-Build-Your-App-in-React-Native/) for the app because we believe the current tooling is better, and better placed for the future. (For other projects we’ve been able to build both the web and mobile frontends ourselves and we’d usually go with React.js for the web too).

![PatientView App](https://storage.googleapis.com/ssg-website-images/How%20we%20built%20patientview%20app/PatientView%20App.png)

Part of the better RN tooling is the library for graph display. PatientView has years’ worth of data, and this can be a challenge for standard Javascript graphing libraries out there in terms of animation and displaying large datasets.

However, thanks to the wealth of react-native projects out there we found [React Native Charts Wrapper](https://github.com/wuxudong/react-native-charts-wrapper), a project that unifies native iOS and Android charting libraries. And indeed, we now modestly boast of 60 fps.

### The Myoclonic Jerk

It wasn’t actually a technical challenge per se which gave us a hiccough (or "Myoclonic Jerk" for the medical experts). It was to do with Apple’s Ts and Cs.

One thing that companies building apps need to be aware of, especially those hiring outside resource, is that you need to register your own app accounts to host the app on the appstores, not use the accounts of the outside developers or other suppliers you’re working with. You need to stay in control of your IP.

This is because Apple can be funny about agencies hosting apps on behalf of other companies, and the app submission process can frustrate app delays due to as small a thing as account ownership.

### Successful Treatment

The app's been unleashed to the public and Nadim Yazdani, PatientView's Technical Project Manager, had this to say about us:

> We love working with Solid State Group and have for a number of years. They advised us early on to use React Native which offered a huge advantage over building two separate native apps. We were able to leverage their extensive mobile and technical expertise to deliver a great app which we have received a very positive response from patients and we look forward to continue to develop the app with them.

And because PatientView have done such a good job of building their community, we were able to see [the instant reaction of the users on Facebook](https://www.facebook.com/patientview/posts/2071393129800348). You can see the heartwarming feedback from the horse’s mouth for yourself.

![PatientView on Facebook](https://storage.googleapis.com/ssg-website-images/How%20we%20built%20patientview%20app/Screen%20Shot%202018-03-16%20at%2014.18.38.png)

![More happy PatientView peeps](https://storage.googleapis.com/ssg-website-images/How%20we%20built%20patientview%20app/Screen%20Shot%202018-03-16%20at%2014.18.57.png)

*For more digital transformation, startup news, and technology innovation, sign up below to our monthly Issues and get our next research straight to your inbox.*

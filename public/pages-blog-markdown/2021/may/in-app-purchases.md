---
title: When to use Apple and Google's in-app purchasing & Subscriptions service.
description: A quick look at when to use Apple and Google's in-app purchasing & subscriptions offerings when building Apps.
date: 19-may-2021
author: Lewis Boodt
published: true
avatar: /public/images/blog/lewis.png
image: https://images.unsplash.com/photo-1600783245777-080fd7ff9253?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80
tags: in app purchases, IOS, android
---

Over the years here at Solid State Group, we've been asked by many clients about the pros and cons of using Apple and Google's in-app purchasing and subscription offerings. In recent years their guidance and rules have changed as have their pricing models. 

This year in fact sees the latest changes to their subscription charges, with the introduction of discounts for small businesses. This change and a number of clients asking about it prompted me to dig into what these services offer and understand when you are required to use them.

The main questions we have been asked are of course, what does it cost? But also and inreasingly more, What do we have to sell through the in-app purchasing services? And what and when can we use something that's cheaper?

**What is the cost of selling through in-app purchases?**

- One off purchases both iOS & Android charge **30%**
- Both offer a reduction for subscriptions, after 1 year of service, they take a reduced **15%** of the subscription fee.
- Google is reducing this for the 1st $1m of in-app purchase sales to **15%** on the 1st July 2021
- Apple has a “Small business program” which once enrolled on will charge **15%** **fee**

## What should be sold through in-app purchases?

Both the  [Apple App Store](https://developer.apple.com/in-app-purchase/) and the [Google Play Store](https://developer.android.com/distribute/best-practices/earn/in-app-purchases) are aligned, but of course use slightly different terms:

- Virtual game products (Google) / Consumables (Apple)  - Extra lives, coins, Gems, anything that is used once.
- App functionality or content (Google) / non-consumable (Apple)  - Remove adverts, additional photo filters 
- Subscriptions & Auto Renewable Subscriptions - Regular content updates, cloud storage

The first two, consumable and non-consumable have to be sold via the in-app purchase services of each of the stores. Both own the only platform which can deliver the purchased item to the user and therefore there isn't any way around this. Both stores of course make using this service extremely easy. From the libraries used in the code, to the reporting you get in the admin areas, it's all very well polished and easy to use and so it should be, they take a hefty 30% of each purchase. Only this year on the 1st July 2021 are Google introducing a discount to 15%, specifically for the first $1m that an App makes. Apple have had this in place since last year with their, [Small Business Program](https://developer.apple.com/app-store/small-business-program/). Techcrunch have a nice write up [here](https://techcrunch.com/2021/03/16/google-play-drops-commissions-to-15-from-30-following-apples-move-last-year/#:~:text=The%20Android%2Dmaker%20said%20on,Play%20billing%20system%20each%20year.).

Subscriptions however is where the line blurs a little. Spotify, Netflix, Dropbox to name a few, do not use the store's subscription services. Instead as I'm sure we are all aware you sign up and subscribe direct with them. It seems that for subscriptions at least there is a choice, which might explain why both stores have introduced a reduction to 15% after 1 full year a user has subscribed.

With the above in mind, both stores have a tight grip on consumable and non-consumable in-app purchases, but subscriptions and auto renewing subscriptions can managed and delivered by other services.

## Alternative Subscription Services

As i mentioned above, both Apple and Google offer pretty comprehensive subscription services. Both with mature native libraries, in depth reporting built straight into where you manage your apps and handle auto renewing with relative ease. This all comes with a 30% price tag however and begs the question what else is out there?

- [Paypal](https://www.paypal.com/merchantapps/appcenter/acceptpayments/subscriptions)  - 2.90% of trans + 0.30p
- [Stripe](https://stripe.com/docs/billing/subscriptions/overview)  - 1.9% of trans + 20p 
- [Re-charge](https://rechargepayments.com/)  - £42.34/month + 1% of trans + £0.03 - Requires payment gateway to make payments via
- [Subbly](https://www.subbly.co/) - £10/month + 1.25% of trans - Requires payment gateway to make payments via

Paypal and Stripe offer a similar services, I’ve added the links above for you to take a look at what they offer, but fundamentally they are legitimate alternatives to using Google and Apple's subscription services and of course are significantly cheaper. Re-charge and Subby seem to do a great job of managing your subscriptions, but both require you to have a separate payment gateway in place to actually take the payments.

**So what do we tell our Clients**?

For consumable and non-consumable products, we simply explain how both stores work and the charges they have. We take them through the Small Business Program entry requirements and help them sign up for the 15% discount if applicable. 

For subscriptions however, it's a closer look at the options they have, helping them make an assessment on the value Google and Apple bring to the table vs the alternatives. In many cases the ease and convenience to them and their users is worth the additional cost, but, for once in the App building world it's nice to have at least more than one option for once.




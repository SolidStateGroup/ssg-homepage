---
title: Can I Wear Shorts?
published: true
description: SSG's latest release has landed - you'll never be caught short again with our new Voice Skill for Alexa and Google. Here's how, and why, we did it...
author: Sara Jones
tags: corporates v startups, mobile applications, systems integration
avatar: /static/images/blog/sara.jpg
image: https://storage.googleapis.com/ssg-website-images/Can%20I%20Wear%20Shorts/rainbow.jpg
date: 18-jul-2017
---

Modern society is racing towards the promised heaven on earth: the ability to live like Iron Man without resorting to selling nuclear weaponry or shouldering the responsibility of fighting scary armoured space whales.

We at Solid State have proudly contributed to this race, and we have a new update.

Our Voice Skill for Alexa and Google Home "[Can I wear Shorts](https://www.amazon.co.uk/kyle-ssg-Can-I-Wear-Shorts-x/dp/B0711VC95N/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1500296568&sr=1-1&keywords=can+i+wear+short)" is now live!

{% raw %}
<div class="offset-md-3 col-md-6 mt-5 mb-5">
    <img src="https://storage.googleapis.com/ssg-website-images/Can%20I%20Wear%20Shorts/Iron%20Man%20it's%20christmas.gif">
</div>
{% endraw %}

Yes, you too can now live with J.A.R.V.I.S-like abilities. All you have to do is download our Skill, and shout, "Alexa, ask can I wear shorts?" and the application will look at the weather forecast and tell you “yes” or “no”, followed by weather info and chance of precipitation.

If only Patrick had our app.

{% raw %}
    <div class="offset-md-3 col-md-6 mt-5 mb-5">
        <img src="https://storage.googleapis.com/ssg-website-images/Can%20I%20Wear%20Shorts/patrick%20in%20rain%20shorts%20(1).gif">
    </div>
{% endraw %}

By removing the need to view the weather forecast ourself, we at Solid State *estimate* this voice skill saves our team around 4% of their working day, prevents 8% of heat stroke incidents in the office, and translates into £5 billion of productivity over the next 4 years when taken in conjunction with lottery predictions.

So in a bid to help the UK economy make similar gains in a post-Brexit economy, here’s how we did it.

{% raw %}
    <div class="offset-md-3 col-md-6">
        <img src="https://storage.googleapis.com/ssg-website-images/Can%20I%20Wear%20Shorts/underwear%20rain%20man%20(2).gif">
         <p class="text-center image-caption">(This man is well prepared for the weather.)</p>

        <img src="https://storage.googleapis.com/ssg-website-images/Can%20I%20Wear%20Shorts/neapolitan%20tan%20line%20man.jpg">
         <p class="text-center image-caption">(But this man has many regrets.)</p>
    </div>
{% endraw %}

But first, one thing to know: there might be 15,000 voice skills on Alexa, but 69% boast only a couple of downloads, and the vast majority are apps for your home (light controls etc) or news flash briefings. People are getting very excited about a future "without typing", but just because Caveman Bog managed to set a stick on fire, doesn’t mean he’s off to the Moon just yet.

We wanted to get involved at the stick-on-fire-stage and see what Voice can actually do *right now*. When we were searching for ideas, we knew wanted to make something useful but which Google Search can’t already do better, so we designed Can I Wear Shorts because it actually makes a decision for you - as opposed to merely searching for an answer or providing a poor alternative to activating an app tactily.

Plus, we live in London, we love wearing shorts, and we hate making decisions before coffee, so we decided to solve a big issue in our lives and make our Intelligent Assistants tell us whether we can wear shorts.

We  crafted the app using API.AI to build the conversational interface for multiple services (Alexa and Google Actions). We hooked it up to [ssg-node-cli](https://github.com/SolidStateGroup/ssg-node-cli) - a one line command to generate our node express app / API.

To get the weather forecast we used... [Weather Forecast](https://www.google.com/url?q=https://www.npmjs.com/package/forecast&sa=D&ust=1500311293629000&usg=AFQjCNEccXOehpblmKeuMBxRZXY7JApnZA) - a simple weather forecast module used to get weather data for a specific location.

Then to get the app working for both Google and Amazon, we used actions-on-google to integrate the nodes of google actions, and alexa-app as the node wrapper for the Amazon Alexa SDK.

The good news is that the skill works, you can download it [here for Alexa](https://www.amazon.co.uk/kyle-ssg-Can-I-Wear-Shorts-x/dp/B0711VC95N/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1500296568&sr=1-1&keywords=can+i+wear+short), and [here](https://www.google.com/url?q=https://assistant.google.com/services/a/id/32ba704aeb37297d?source%3Dweb&sa=D&ust=1500311341070000&usg=AFQjCNGXzh7g-RzPLtHTQpfUyRM6JdhGrQ)[ for Google Home](https://www.google.com/url?q=https://assistant.google.com/services/a/id/32ba704aeb37297d?source%3Dweb&sa=D&ust=1500311341070000&usg=AFQjCNGXzh7g-RzPLtHTQpfUyRM6JdhGrQ).

The bad news is that we encountered some hiccoughs along the way.

For example, Google Actions still don’t support spoken British English, most probably because of Donald Trump, so we had to change our phones to American English to access the skill. This means my phone thinks I should say hiccup.

Likewise, NLP (Natural Language Processing) still has a ways to go, this limits how many intents you can reasonably work with in voice. You won’t be discussing 20th century philosophy with Alexa quite yet.

But, what was most frustrating by farrrrrrrrrrrr was the app submission process for Amazon.  It took ages, it hampered our efforts to iterate, so it’s a must to mitigate this. Now we know the quirks, we could cut our next app submission time by 90% - but my god it was annoying getting to that point. Salt to the wound was the dev tooling - Amazon offer a simulator but we couldn’t test scenarios such as requesting user info.

{% raw %}
    <div class="offset-md-3 col-md-6 mb-5 mt-5">
        <img src="https://storage.googleapis.com/ssg-website-images/Can%20I%20Wear%20Shorts/female%20postman%20shorts%20snow.jpg">
    </div>
{% endraw %}


So, if you too want to join humanity’s quest to use artificial intelligence to recreate popular comic book heroes from the 1960s, here are a couple of top tips to do with voice skills:

Start with [alexa-app ](https://github.com/alexa-js/alexa-app)framework.

Incorporate a skill such as Can I Wear Shorts into your own app. If you have an API written in Node JS and Express you can easily extend it to work with Alexa and Google Home. To begin with we wrote a REST API where you can get a can I wear shorts answer given a latitude/longitude or postcode from a webpack, extending this to incorporate alexa was as easy as :

```javascript
**return **alexa.getAddress(req)

   .then(({ postalCode, countryCode }) => {

       **if **(!postalCode || !countryCode) {

           **return **response.say(NO_LOCATION_MESSAGE)

       }

       **return** canIWearShorts(postalCode)

           .then(({description}) => {

            	**return **response.say(description);

           });

   });
```

In a simple project like this, use Slack for logging. We have set up Slack integration so as soon as Can I Wear Shorts gets executed, a bot sends a message to Slack, so we can see in real-time when people are using it. This saves us from having to look at console logs on an ad hoc basis, while also gathering data on requests. Everything is on the Slack channel. We even have reports every day at 8am. It’s my favorite Slack Channel.
{% raw %}
    <div class="offset-md-3 col-md-6 mt-5 mb-5">
        <img src="https://storage.googleapis.com/ssg-website-images/Can%20I%20Wear%20Shorts/iron%20man%20background%20explosion%20(3).gif">
    </div>
{% endraw %}

p.s. here is the full list of tools we used:

  * [API.AI](https://api.ai/) - tool to build the conversational interface for multiple services (Alexa and Google Actions)
  * [ssg-node-cli](https://github.com/SolidStateGroup/ssg-node-cli) - a one line command to generate our node express app / API
  * [Weather Forecast](https://www.google.com/url?q=https://www.npmjs.com/package/forecast&sa=D&ust=1500311293629000&usg=AFQjCNEccXOehpblmKeuMBxRZXY7JApnZA) - a simple weather forecast module used to get weather data for a specific location
  * [actions-on-google](https://developers.google.com/actions/) - node integration of google actions
  * [alexa-app](https://github.com/alexa-js/alexa-app) - node wrapper for the amazon alexa sdk
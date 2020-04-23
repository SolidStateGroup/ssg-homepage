---
title: How we're building startups. 2015 Edition.
published: true
description: It's 2015 and it seems that the pace of innovation around languages, tooling, hosting and all that jazz continues to accelerate. I thought it would be a good time to take stock of what we're using and how we are building stuff.
author: Ben Rometsch
avatar: /static/images/blog/ben.png
image: https://www.solidstategroup.com/images/particle-button-blog-hero.jpg
date: 13-jul-2015
tags: corporates v startups
---

<p>It’s 2015 and it seems that the pace of innovation around languages, tooling, hosting and all that jazz continues to accelerate. I thought it would be a good time to take stock of what we’re using and how we are building stuff.</p>
<h3>Tooling</h3>
<p>The entire team is on Macbook’s; either Air or Pro laptops. They are without doubt the optimal choice for us.</p>
<p>We’re using Intellij IDEA for pretty much all of our development; Java, Javascript, HTML and CSS. It still leads the pack, and having one IDE to rule them all is effective for us.</p>
<p>Homebrew for package management.</p>
<p>Gulp for front end build stuff.</p>
<p>Jenkins for build management and deployment.</p>
<p>BitBucket hosts our git repos (although we might swap it out with GitLab — it would be completely free for us!).</p>
<h3>Languages</h3>
<p>We still prefer to write server side code in Java. It fell out of fashion a few years back but we soldiered on. Now the JVM is kind of trendy, even though writing pure Java is still a bit passé. We like it. It works well with Google App Engine. Java and Intellij IDEA are still a powerful combo. It’s also fast as hell.</p>
<p>On the client we’ve gone pretty much all-in on React. Both regular web flavour and native. React Native for iOS is <strong>amazing</strong>, and the Android version that dropped recently will no doubt catch up fast. The web version is mad fast, well thought out and understandable without too much ‘magic’.</p>
<h3>Data</h3>
<p>We built <a href="https://www.dugoutfc.com/">Dugout FC</a> on top of Google Cloud Datastore. It’s very good but not quite fast enough for our model of data. If we were to start over again, we’d probably mix in SQL to the more relational data and leave cloud datastore to the stuff that’s less SQL-relevant. You sort of get a feel for what would work on each platform as you start using Cloud Datastore.</p>
<p>If you do store stuff in MySQL on Google Cloud Platform you do lose “scale forever” to a certain extent— so it’s quite a big decision.</p>
<p>For real-time socket stuff it’s Pusher.</p>
<h3>IoT Jazz</h3>
<p>is superb. That’s pretty much it.</p>
<h3>Hosting</h3>
<p>We split out the architecture into a server-side API and then React-based clients that connect to the API. Google AppEngine is perfect for this setup.</p>
<p>Our server-side API is Java and Cloud Endpoints. The web client is generally a Python AppEngine project with all our JS and assets rolled up via gulp.</p>
<p>Admittedly the costs for AppEngine are higher than rolling your own setup, but we’ve found that it offers the best bang-per-buck until you are doing millions of uniques a day. AppEngine gives us:</p>
<ul>
	<li>Seamless deployments on both the front end and the API.</li>
	<li>Effortless versioning of the API and web applications.</li>
	<li>You are up and running on a massively scalable platform in about 10 minutes.</li>
	<li>No SSH. No chef, puppet or ansible. No devops pain. In fact, no devops at all. Sorry, devops people!</li>
	<li>SSL is baked into our server-side API for free.</li>
</ul>
The other great thing about Google Cloud Platform is that you can still roll your own services that aren’t available within it. So if you want an ElasticSearch or RethinkDB cluster you can get your hands dirty with the black screen.</p>
<p>Push notifications are managed by Parse (great, great service).</p>
<h3>Analytics</h3>
<p>From our clients (and sometime the server) into <a href="http://Segment.io">Segment.io</a> and then on to Google Analytics, Intercom and Amplitude. Don’t skimp on analytics, kids!</p>

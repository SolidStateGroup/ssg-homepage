---
title: What is Docker?
published: true
description: I've been trying to explain what Docker actually is to clients, partners and small children (I’m available for birthday parties. Other entertainment - a food-fight about micro-services). The answer like most things is both simple and complex, and so here we are. Reading this.
author: Ben Rometsch
avatar: /static/images/blog/ben.png
image: https://storage.googleapis.com/ssg-website-images/harbour-boat-sea-plane-80404.jpg
date: 13-jul-2016
---

<p>I've been trying to explain what Docker actually is to clients, partners and small children (I’m available for birthday parties. Other entertainment: a food-fight about micro-services). The answer like most things is both simple and complex, and so here we are. Reading this.</p>

<p>Software Engineers are constantly trying to achieve gains in two often conflicting directions:</p>

<ol>
<li>Developer Productivity</li>
<li>Computing Efficiency</li>
</ol>

<p>They conflict because, basically, ‘simpler’ programming languages are less efficient but quicker to work with. What you gain in developer productivity you lose in requiring more computer power.</p>

<p>Every now and then a technology comes along that advances the state of the art in both directions. You get more productive developers AND more efficient computing. Docker is one of those technologies. That’s probably why you’ve heard of it.</p>

<p>So what is it? To explain, we need a short history lesson.</p>

<h3>Back To The Old Skool</h3>

<p>Back in the day, if you wanted to launch a website, you wrote the website. Then you bought a few servers. Then they arrived and you threw out a LOT of cardboard. Then you installed your website on the servers. Then you drove them to the data center. Then you got cold installing them in the data center. Then they broke down and you had to go back into the data center, but this time you took a good jumper. Anyway, it was a really inefficient process, but the real inefficiencies were yet to come.</p>

<p>Each one of those servers you installed basically spent most of its time doing nothing. Most websites have traffic that peaks and troughs, a lot. You had to make sure you could handle the peaks, which meant that most of the time, your servers just sat around, burning up money (space, cooling and electricity in a data center is all expensive).</p>

<p>This is just how life was until the mid-2000’s, when VMWare changed everything.</p>

<h3>Enter The VM</h3>

<p>As time went on, servers got more powerful and they got more memory. A company called VMWare commercialised a technology that was, and still is, super cool. What their software did was to take a large server, and effectively run lots of “virtual machines” (VMs) on that one server. These VMs were completely isolated, self contained computers that ran independently of one another. The VMWare software ensured that they shared the “host” server fairly, and didn’t tread on each other’s toes. Each VM was its own computer, just like any other. It didn’t really “know” that it was running alongside other VMs on a big host machine. The important thing is that it behaved just like a regular computer.</p>

<p>It’s not a stretch to say that this changed the industry, completely. Imagine there are 2 VMs on the host machine. One services Japanese business users, the other Americans. The peaks of usage for each VM will be different, but because the peaks of each VM occur at different times of day, they will make much more efficient use of the resources available.</p>

<p>A LOT of money was saved. Probably hard to stress how much was saved. A LOT. Not to mention the reduction in carbon emissions, server hardware etc. etc. The VM was a good thing.</p>

<h3>Things can always get better</h3>

<p>Engineers are basically never satisfied. VMs were great but there were a couple of ways they could be made even better.</p>

<p>First of all, strange as it may sound, each one of these virtual machines had to boot up. Remember, it’s just a regular computer. So it takes maybe 30-60 seconds or so for the VM to get up and running.</p>

<p>Secondly, there were still a fair amount of resources being wasted. You can think of an Operating System as a stack of components. The applications you run sit at the top of the stack. Below that, the Operating System looks after the networks, disks, the CPU and the memory of the machine. If all these VMs run the same Operating System (doesn’t matter which: Windows, Linux, whatever), effectively the host machine was running the exact same core components a bunch of times.</p>

<p>I’m going to take a big conceptual leap here, but basically Docker solves both of these two problems. The core operating system runs on the big host server. Docker then runs applications on top of this core, but it doesn’t run an entire virtual computer each time. It sort of just runs the bits that are different (right now there are no doubt Computer Scientists angry at the simplification, but whatever).</p>

<h3>How is that helpful?</h3>

<p>So firstly you get more efficiencies just by way of not running the same core Operating System components each time. The real gain, though, is having a consistent platform that starts really quickly.</p>

<p>Docker runs applications in what it calls “containers”. Think of a container as the computer application. For this example, let's say it’s an application that runs a website. Because the container starts really quickly, we can easily deal with a sudden influx of traffic; we can just start more containers. Then if the traffic slows, we can just stop any excess containers. Sure, we could do that with VMs 10 years ago, but waiting a minute for a bunch of VMs to boot up might well be too long; your service starts to crash, just at the point when you just got a flood of traffic.</p>

<p>The other thing that Docker is great for is developer productivity. Quite often, developers write code on whatever computer they have; Mac, Windows, Linux, whatever. Often the configuration of the server that actually powers the website will have small (but often critical!) differences from the developer machines. These differences can cause really nasty bugs that are very very hard to track down and fix. Docker eliminates these differences. Everyone (the developer, the designer, the tester) is running Docker containers, and so is the server powering the live website.</p>

<p>Because Docker containers start so quickly, developers are now using them to actually develop their applications. They can be sure that their setup is now exactly the same as the server powering the site. They also don't need to spend hours installing all the software that is set up on the server. They just run one command (“docker-compose up” if you care!) and they are done.</p>

<p>Even better, “docker-compose up” can run other services that might be needed. Say you need a database to run the website. Docker can then automatically run that database (and importantly, the correct version of the database) for you to develop the site that you are working on.</p>

<p>Having these reproducible setups is a huge boon for developers.</p>

<h3>The rowers keep on rowing</h3>

<p>There is now a growing public library of Docker containers. Here’s one for Discourse; <a href="https://github.com/discourse/discourse_docker" target="_blank">(https://github.com/discourse/discourse_docker)</a> a popular web forum. Here’s one for Wordpress (<a href="https://hub.docker.com/_/wordpress/" target="_blank">https://hub.docker.com/_/wordpress/</a>). These containers run everything you need. The web server, the database, the application itself, everything.</p>

<p>Companies like Google are plowing resources into projects like Kubernetes (http://kubernetes.io/) which bills itself as “Production-Grade Container Orchestration”. What this means is that you can develop your application and then have Kubernetes look after all of the servers and containers for you. No more cold nights in the data center.</p>

<h3>Then what?</h3>

<p>In many ways Docker feels like a conclusion. It is now being used as a starting point for further optimisations and productivity gains. Projects like Kubernetes are building on top of Docker, and there are a myriad of other projects that are all leveraging this core technology in crazy ways. Of course it never ends, and no doubt at some point in the future some new paradigm will present itself, but right now it looks like Docker is here to stay.</p>
---
title: We Like Killing People
published: true
description: We are utterly addicted to PlayerUnknown’s Battleground, so we made our own multiplayer competitive survival shootout mobile game, even though we're not actually game devs.
author: Sara Jones
avatar: /static/images/blog/sara.jpg
image: https://storage.googleapis.com/ssg-website-images/Battle%20Royale%20Blog/pubg%20header.jpg
date: 14-aug-2017
tags: mobile dev, hackathon
---

We are utterly addicted to PlayerUnknown’s Battleground, see their promotional image above. It’s a competitive survival shooter where a hundred players race around an ever-shrinking battle area, scavenging extra weapons and kit, while assassinating each other till only one survives. When you start you have nothing. When you die, you’re out.

We love the philosophy of the game, it’s a battle of wits as much as shooting skills, it’s pure hunting warfare, it’s Sun Tzu, it’s patience and foresight over spray and pray. The visuals are poetic really, dozens of humans making life or death decisions surrounded by verdant woodland and glittering diamond death circles, in an Ozymandiac dystopia with shattered windows and discarded Harleys.

It also proves that we just really like killing each other.

And we wanted to carry on killing each other on mobile too.

We’ve just built a competitive survival shooter which stays true to the tactical philosophy of Battlegrounds, with up to 16 players fighting each other as the circle of death closes in on the map, last man standing wins, on both [iOS](https://itunes.apple.com/us/app/battle-royale/id1251457729?ls=1&mt=8) and [Android](https://play.google.com/store/apps/details?id=com.solidstategroup.battleroyale).

### Behold! SSG Battle Royale!


![SSG Battle Royale](https://storage.googleapis.com/ssg-website-images/Battle%20Royale%20Blog/giphy-5.gif)


We wanted to see if we could build a high quality game in just a few weeks, focusing on avoiding the unnecessary complexity of other mobile battle royale attempts, de-cluttering the UI, and avoiding the winner just being whoever had the best wifi at the time.

Thanks to the [Unity Engine](https://unity3d.com/), the SDKs it supports and the level of online support, our productivity was insane. We’re not even game developers, yet here’s how javascript-loving mobile developers created [Battle Royale](https://play.google.com/store/apps/details?id=com.solidstategroup.battleroyale&hl=en).


![Winner Winner Chicken Dinner](https://storage.googleapis.com/ssg-website-images/Battle%20Royale%20Blog/giphy.gif)



#### To Power The Game

We used [Unity](https://unity3d.com/), the cross-platform game engine. Using Unity, you can develop videogames for 27 platforms from just one codebase. It’s amazing.

It powers massive games such as Assassin’s Creed: Identity, Battlestar Galactica Online, and Temple Run, while being a heaven-send to indie developers, thanks to an encouraging game development community which provides free tutorials and support for Unity beginners.

#### To Enable Concurrent Games

It’s not a Battle Royale if users aren’t fighting the same battle at the same time, and it’s not a good game if it can’t handle multiple battles royales running concurrently either. But the networking approach required to achieve these live battles was not that simple. UNet is Unity’s built-in client-server architecture solution for networking. Because it strictly uses the client-server architecture and we did not want to rely on clients hosting their own games, we needed to develop a server manager for clients to find available servers to enable more than one game to run concurrently. So, we decided to make life easier for ourselves and stick to what we’re good at. We turned to Node.js.

We figured out how to establish a WebSocket connection to our Node.js server manager from within Unity. The Unity server would then report its availability to the server manager making sure to shut players out just before a game began, or when the maximum number of players was reached. Clients who hit Play send off a web request to the server manager which reports back with the first available server they can join. We weren’t used to this way of thinking so it was a challenge, but we figured it out in the end.


![Many many players](https://storage.googleapis.com/ssg-website-images/Battle%20Royale%20Blog/giphy1.gif)



#### The Visuals

We didn’t have a dedicated designer on the project but there are a ton of wonderful resources to create a new world without having any design skills. We used [opengameart.org/](https://opengameart.org/) for art assets such as bushes, and built the map using Tiled: [www.mapeditor.org/](http://www.mapeditor.org/).

We originally tried to use Unity’s IMGUI (Immediate GUI Mode) to build out the GUI, which we later found out was an outdated legacy GUI system, but it just couldn’t adapt to the wide variety of mobile screens out there. For example, it couldn’t painlessly scale font sizes. Ain’t nobody got time for font scaling when there’s vital stuff like shotgun spread to think about. So we had to refactor the entire UI by using Unity’s Canvas based UI system to solve this.


![bushes](https://storage.googleapis.com/ssg-website-images/Battle%20Royale%20Blog/giphy2.gif)



#### The Hard Things:

See this Circle of Death? This bit was haaaaaard. We had to research vector mathematics, physics and structure the problem as a graphical challenge as much as a coding one.

We managed to develop a solution using a sort of z-buffer depth camera trick, so what is actually happening is that the viewer is looking through an ever decreasing spherical "lens" down onto the sprites and map below. It’s like Westworld, without the gratuitous violence and Anthony Hopkins.

But the biggest clashes between devs were over game controls. It originally started off as a circle around the player and various iterations included pressing down and moving your finger around the player sprite to aim before releasing to fire. However, that just meant we were covering the player sprite with our fat fingers and reducing visibility. So we opted for dual controls as you can see here, one to move and one to rotate/fire.


![circle of death](https://storage.googleapis.com/ssg-website-images/Battle%20Royale%20Blog/giphy4.gif)



#### The Nice Surprises

We were staggered by just how powerful the Unity engine is. We were able to create a stable videogame in a matter of weeks, helped by using the vast array of SDKs out there. One of the biggest was [Firebase](https://firebase.google.com/) from Google, which is just so good now that it’s blowing competitors out the water. We used it for sign up (authentication), leaderboard & stats (real-time database), analytics and push notifications (cloud messaging).

And of course, we’re pleased by the amount of downloads we’re seeing. We’ve not publicised the game at all, yet we’re averaging about 30 downloads a day with good retention and reviews.

#### For Next Time…

When attempting this again we’d have looked into other networking plugins available for Unity, rather than using Unity’s own networking system UNet. Time will tell how well UNet will perform as downloads and games increase, especially when games start to reach full capacity, so there’s a question mark there.

We think we might also have changed the view and art style too, by going for a top-down view at a slight angle, instead of pure top-down 2D. This is better for adding objects that can provide limited cover i.e. bushes, which is a vital feature for a tactical survival shooter. In future releases, we want to add even more sprites such as rocks and houses, the angled view would make more sense here.


![get the gun](https://storage.googleapis.com/ssg-website-images/Battle%20Royale%20Blog/giphy3.gif)



We’re still building new updates for the game, so if you’ve got any suggestions and requests, [download the game here](https://play.google.com/store/apps/details?id=com.solidstategroup.battleroyale&hl=en), kill some people and tell us, so we can get learned how to make stuff more deader.

But the next really interesting step to take from here, is to add ARkit into the mix, and create an [AR game with Unity](https://twitter.com/Trashgames/status/891419824752087040), so that one day very soon, we can play a tactical survival shooter in the Ozymandiac dystopia of Shoreditch.



*We're always working on new projects and have a few things cooking up right now, follow us on [Twitter](https://twitter.com/solidstategroup) to see the new stuff as soon as we chuck it into public view.*


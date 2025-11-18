---
title: "On Gamedev"
date: 2025-10-15
---

# On video game development

After thinking about it, I feel like I didn't really fully introduce myself in my "Hello, World!" post. So, I wanted to talk more about that - specifically a bit more about my thoughts/philosophies rather than just "what I'm objectively going to be doing" here on GhostGamedev.

So, I'll start with computers.

## Computers

I don't know about you, but straight up, computers, to me, are just like, "what the  INSERT FRENCH HERE  is going on?!?!?" And, I'm not saying this because I don't know how to use computers - what I mean is, I think many/most people have almost no idea what they are actually working with when using computers these days...

What I mean is, like, computers nowadays, let's take the "Intel i7" - according to a quick lookup, the 2010 model has 1.75 billion transistors. 1.75 billion. That's astronomical. For reference, the Earth is 4.5 billion years old. And, according to another quick lookup, the equivalent number of transistors required to perform the job of an abacus (a mechanical, manually operated calculator) is approximately 1,000. So, in a way, you almost are holding the power of 1.75 million abacuses, and that's in terms of physical computational material, I'm not even sure about computational speed, but I'm sure that it's also another astronomical number. And, I'm just speaking to the hardware level/layer of computers here. There are more levels - hardware, kernel, OS, drivers, network, application, graphics, etc - and, each layer is a deeply complex subject. Humans commit their lives to mastering just a single layer.

Crazy stuff...

But, these days, I often find myself asking - were we humans even supposed to be able to compute with this astronomical power?

I mean, like, today, computers have come so far that we now have AI - artificial (ie, computer-based) intelligence. Like, what!?!?

Point: Computers are immensely powerful and immensely deep things.

And, how does all of this relate to video games?

## Back to video games

Well, video games are computer programs just like any other computer program.

In my opinion, video game development is yet another "layer" of computing. Perhaps a "compound layer" of computing that is a blend of effectively all of the layers of a computer combined.

Video game development has so, so, so, so much depth. It's mind-blowing. Video games are probably one of the most complex applications of graphics processing out there - just look up "ray tracing". Even 3D graphics itself involves pure matrix mathematics. Video games often rely on sophisticated mathematical physics models/simulations - look up "broad phase vs narrow phase" or "space partitioning". Then, if a game is a real-time online multiplayer game, then you get into "netcode" (on the network layer) - look up "predictive roll-back" - a technique used to make players feel like they are with each other in real-time even though there might be seconds of latency between them. And, this is the surface of it all...

It's truly amazing. And, honestly, it feels good to express gratitude to all of the people before me who have come up with remarkable methods of "bending a computer" to do what we want it to do in terms of giving people meaningful, interactive experiences via the channel of video games through the years.

But, today, I can't help but think people have forgotten the profound depth and elegance of computers, computer software, and video games.

Lost appreciation
I read Reddit forums/subreddits on game development and very often see comments like, "I could build this game in Unity in a month".

And, I always have just one thing so say about that... Everytime... And, that is,

"🤦‍♂️"

To me, I don't care how basic or how complex a video game is. All video games are amazing. Why? Because of just how much is actually happening on a computational level even for the most basic video games to simply exist. Graphics processing, input drivers, audio processing/drivers, mathematics - just to get started.

So, yeah...

Point: All video games are masterpieces.

## Game engines

I think the issue, which are also solutions at the same time, let's call it a "double-edged sword", are game engines (ie, Godot, Unity, Unreal, GameMaker, etc). Game engines enable everyday people to build video games, which is incredible and very empowering. But, I think game engines these days also give people the illusion that video games themselves are simple, when, in reality, they aren't whatsoever.

On top of that, I think that game engines make every single game built with the engine somehow all feel the same. Ie, I can, with reasonable accuracy, tell which engine is used for a game when I see it. How? Games developed in a given engine often all share the same graphics/shaders, the same physics feel, the same terrain generation, the same fog effect, the same character controller logic, etc.

And, to me, I think there is something lost when developing using a game engine. Game developers using game engines lose out on the experience of true, genuine computer programming. Game engines take care of all of the "computer stuff" so that, as a game developer, you focus on the "game" part. Which is good, but, I think game engines often take this idea a bit too far... What I mean is, game engines even force specific, opinionated programming patterns onto you - Unity has its entities/components with "MonoBehaviors" and Godot has "signals", for instance. If a game doesn't lend itself to those programming patterns, you are still stuck with them because other things within the engine are coupled with (dependent on) those systems. What is even worse is when you end up battling the engine - like, your game's software architecture literally contradicts the engine's programming patterns/architecture and you end up not being able to access specific variables/data at times when you need them, for instance. Cry 😭.

## Conclusion

So, all in all, I think game engines are truly good, but I think you lose some of the meaning behind what it means to develop video games when using game engines. Admittedly, I've never built a game from scratch, so I don't know if what I'm saying is all true. Maybe having a somewhat generic look/feel with all of your games and being forced into specific programming patterns is worth the tradeoff with everything game engines provide, haha.

## What this means

Here on GhostGamedev, I think I'd like to explore trying to "build a game from scratch" or at least feel out all of the various systems involved in doing so. I think that would be a quite the grand adventure. 🙂
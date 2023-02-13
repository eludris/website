---
layout: "../../layouts/BlogPost.astro"
title: "State Of The Thing #4"
description: "The fourth entry in the series of not-so-monthly Eludris news & updates."
author: "EnokiUN"
pubDate: "February 13 2023"
hide: false
---

## Main Things

- [Greetings](#greetings)
- [Eludris](#eludris)
  - [Bots](#bots)
  - [API Wrappers](#api-wrappers)
- [Conclusion](#conclusion)

## Greetings

Howdy there everyone, it is but I, your not-so-favourite blogger EnokiUN with another
State Of The Thing entry. This time we'll be discussing the latest and greatest
updates and changes that have befallen the wonderful world of Buaris
<span style="display: inline-block; width: 40px;"></span> UN over the past 2 months!
(To understand the jokes you'll really have to join our Discord server, do it now.)

## Eludris

These past few months were extremely busy for Eludris. We released Eludris v0.3.1
and Eludris v0.3.2.

We also made this pretty insignificant thing called Pengin. It's like this web client
for Eludris which is way more advanced and user friendly than the others whilst being
more customizable and having more features, [give it a try, no?](https://elu.pages.dev).
And while you're at it (and since it's really easy to use), why don't you show it
off to a friend or two? :D

We _also_ made this CLI that handles all the hard parts of hosting your own Eludris
instance. Seriously, all you have to do is [install](https://eludris.github.io/docs/cli.html#installation)
it then run `eludris deploy` and it will take you on a step-by-step process to get your
instance up and running!

Additionally, we also moved all of the microservices (and soon docs) to the [Meta Repository](https://github.com/eludris/eludris) to improve the process of making changes to Eludris.

We also got pre-built docker images for all of our microservices (courtesy of
[EnokiUN/Eludris/Oliver <span style="display: inline-block; width: 20px;"></span> Wilkes](https://github.com/ooliver1))!

That's only the major changes that Eludris had (besides `ratelimit` -> `rate limit` (help)), we had a
ton of minor changes and bug fixes to Eludris and we're happy to announce that we'll
start working on version 0.4; The features update!!!

### Bots

For this SOTT we only got one bot, but do not be deceived, it's one hell of a beast.
Introducing, [Dewel](https://github.com/ooliver1/dewel). Dewel is a next generation,
bleeding edge and blazingly fast (kind of) Eludris bot made by
[EnokiUN/Eludris/Oliver <span style="display: inline-block; width: 20px;"></span> Wilkes](https://github.com/ooliver1)
(according to him).

### API Wrappers

This SOTT we got 2 new API wrappers. The first one being in a personal favourite of mine, [crystal](https://crystal-lang.org/)!
It's a Crystal API wrapper for Eludris called [Crudris](https://github.com/eludris-community/crudris) by @toolifelesstocode.

We also got a [V](https://vlang.io/) api wrapper called [eludris.v](https://github.com/eludris-community/eludris.v)
made by @RGBCube, here's a taste of that:

```v
import rgbcube.eludris

mut client := eludris.new_client("Goof")

client.on_message(fn [client] (message eludris.Message) ! {
    if message.content.to_lower().starts_with("!ping") {
        client.send_message("Pong!")!
    }
})

client.run()!
```

We also got typescript API typings for Eludris under [eludris-api-types-ts](https://github.com/eludris-community/eludris-api-types-ts) by @teaishealthy!

## Conclusion

That's about it for this month's SOTT, it was a really fun month especially with
the increase in amount of our already dubious amount of shitposting!

Oh also, [Eludris now has a YouTube channel](https://www.youtube.com/@eludris) (content soon™™™)
so why not check it out?

That's all for this month's SOTT, hope you have a great time until next SOTT (if I'm still alive by then).

\- Enoki & The @Eludris team.

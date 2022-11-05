---
layout: "../../layouts/BlogPost.astro"
title: "State Of The Thing #2"
description: "The second entry in the series of monthly Eludris news & updates."
author: "EnokiUN"
pubDate: "November 2 2022"
draft: false
---

## Main Things

- [Eludris](#eludris)
  - [Instances](#instances)
  - [Clients](#clients)
  - [API Wrappers](#api-wrappers)
  - [Bots](#bots)
  - [Eludris Development](#eludris-development)
- [Conclusion](#conclusion)

### Welcome Back

So, if you are the keen type you might have perhaps noticed how there is a
missing SOTT for last month, and you'd be correct, I totally didn't
procrastinate the entire month and it was totally some very serious real
business decision that I won't delve into deeper detail about here, just
know that it 100% was not any form of procrastination.

And yes, this release of SOTT will cover the events that occurred over the last
two months, so strap your belts because this one is going to hopefully be a
good one.

### Eludris

#### Instances

First off, our friend @teaishealthy has started hosting their own Eludris
instance over at <https://eludris.teaishealthy.me> so do consider checking that
instance out.

#### Clients

In the realm of Eludris clients there have been also some developments, besides
[Pilfer](https://github.com/eludris/pilfer) (our beloved official TUI) getting
all around enhancements and reworks to be more stable on well, unstable connections
and just have more _pizazz_ to it we also got not one, but two new clients.

The first one actually being a GUI brought to you by @teaishealthy (again) is
[eludris-flutter](https://github.com/eludris/eludris-flutter) which as you
could imagine is made in the Dart programming language using the Flutter UI kit,
it's a nice looking cross platform client which also works on mobile, it currently
reigns as the best way to get Eludris on the go.

The second one which just appeared on the same day this blog was started to get
written is [eluder](https://github.com/sawshadev/eluder) by @sawshadev, it's
also a TUI much like Pilfer but it's written in python, give it a try, who knows,
you might like it.

#### API Wrappers

Next up we have the Eludris API wrappers, python wise we still have only two,
[eludris.py](https://github.com/teaishealthy/eludris.py) also by @teaishealthy
which sadly didn't get any major updates in the past two months and
[pydris](https://github.com/enokiun/pydris) which is made by your truly, @enokiun
(me (the person writing this)).

Now unlike eludris.py, pydris had _a lot_ of improvements, changes and more,
mainly the inclusion of a decorator-stacking based commands framework, here's
a tiny example of that:

```py
@param("c", BoolParser(), required=False)
@param("b", NumberParser(signed=False), short="b") # this is a flag
@param("a", StringParser())
@client.command("foo")
async def foo(_: Message, a: str, b: int, c: Optional[bool]):
    # invoked with something like `!foo "hello world" y -b 9` or `!foo h -b0`
    await client.send(f"{a} {b} {c}")

# You can also set error handlers
@hello.error
@sus.error
async def handle_errors(_: Message, err: Exception):
    await client.send(f"{err}")
```

there's also much much more that got added so I really suggest you head to the
git repo and check it out for yourself if you're interested.

Up next we have a rust API wrapper for Eludris, it's actually a part of the
[Uwuki](https://github.com/enokiun/eludris) Eludris bot which we will get into
in just a bit, currently the repository houses the library as a lib and the bot
as a binary so you can add it by running <span class="code">`cargo add --git https://github.com/enokiun/uwuki`</span>
in your rust project and it will _just work!!!1!!_.

#### Bots

The last two months included _a lot_ of action in the bot side of Eludris, we got
bots such as Thang, [Erik](https://github.com/teaishealthy/erik), [Uwuki](https://github.com/enokiun/uwuki),
[Kerrik](https://github.com/toolifelesstocode/kerrik) and [Emre-Bot](https://github.com/emretech/emre-bot),
each with their semi-unique set of features, they all reside in
<span class="code">`h`</span> (the endorsed instance hosted by @ooliver1 over
at <https://eludris.tooty.xyz>) so whenever you're free, give them a try, here's
a more detailed rundown of them one at a time:

- Thang: Currently WIP, exists mostly as the Discord bot that bridges
  <span class="code">`h`</span> with [eludis](https://discord.gg/vV6v2DhWQB)
  (the official Eludris Discord server), used to test pydris sometimes, the first
  Eludris bot.
- Erik: The second Eludris bot which takes a lot from our beloved Rik, focuses
  on fun with a side of utility.
- Uwuki: Written in rust, focuses on utility with a side of fun.
- Kerrik: Like Erik but with an extra dosage of shitposting.
- Emre-Bot: ~~Relatively new bot, who knows what could happen.~~
  In the first 30 minutes of this bot's lifetime it went from
  simple ping-pong bot to shitposting but on dubious amounts of steroids.

#### Eludris Development

Now for the technical part, over the past two months not much has happened sadly
since all the Eludritians were busy, that does not mean that Eludris didn't have
any work done on it, here are some of the main highlights:

- Split Eludris into microservices.
- Use Apache Kafka as a message broker.
- Stop using kafka and use keyDB as a message broker instead since it's more
  lightweight, is less of a pain to maintain and generally fits with the Eludris
  vision better.
- eludris/eludris development now happens on the next branch.
- Added proper ratelimiting for Oprish and Pandemonium.
- Added a proof-of-concept file server to Effis which is currently deployed
  on both instances.
- Added new limits and validation to some REST API request fields.
- Removed instance features and added descriptions.
- Made Most of the stuff configurable from within an <span class="code">`Eludris.toml`</span>
  file.
- Fixed some issues with ratelimits breaking on CloudFlare or when using Nginx.
- Make CORS work.

Hopefully we will have a longer list next month, **_hopefully_**.

### Conclusion

Welp, that was a fairly fun ~~two~~ month~~s~~, it was very Eludris focused and
nothing really happened on the Cognite side, that might change next month however,
who knows.

&nbsp;

That's all for this month's SOTT, hope you have a great month and until next time!

\- Enoki & The @Eludris team.

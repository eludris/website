---
title: 'State Of The Thing #1'
description: 'The first entry in the series of monthly Eludris news & updates.'
author: 'EnokiUN'
pubDate: 'August 31 2022'
hide: false
---

## Main Things

- [Introduction To SOTT](#introduction-to-sott)
- [Eludris](#eludris)
- [Cognite](#cognite)
- [Other Things](#other-things)

## Introduction To SOTT

Now, you may be asking yourself something along the lines of "What the heck is
SOTT?", and to your very valid question I'll say:

It's quite simple really, SOTT (or State Of The Thing) is a blog which delves
into what has happened with the Eludris community since the last SOTT, it is
_supposed_ to be released somewhere around the end of every month so stay tuned
for it I suppose, I can assure you you will not regret it ~~probably~~.

## Eludris

After a several month long stalemate with the GitHub commit counter being stuck
at 69 _noice_ commits and us eventually giving up on a glitch in the matrix changing
it, we've finally started working on Eludris again!

Over the last half a month-ish we have made Eludris dockerize, improved the gateway
and added simple ratelimiting for it and sketched up a new fully fledged microservice
driven restructure which you'll hopefully hear about next month.

On other less nerdy news, thanks to the docker pr we @ooliver1 has gracefully hosted
an Eludris instance over at <https://eludris.tooty.xyz> _(Thanks olivier)_ which
has led to a chain reaction of occurrences, from the Eludris discord server suddenly
growing, eluci.py, [pilfer](https://github.com/eludris/pilfer) (official TUI) and
@teaishealthy's flutter client being made, [eludris.py](https://github.com/teaishealthy/eludris.py)
and [pydris](https://github.com/enokiun/pydris) getting created, @ooliver1 adding
a Discord <--> Eludris bridge to [Thang](https://github.com/eludris/thang-discord)
and an unprecedented amount of shitposting, shenanigans and DOSing occurring.

If you didn't notice, this means that you can use Eludris **right now**, just
install [pilfer](https://github.com/eludris/pilfer) and you'll be set, what are
you waiting for? go do it _now_.

Now that you've sent your very first Eludris messages, let's see what also happened
this month.

## Cognite

Eludris has also stared working on a new project, [Cognite](https://github.com/eludris/cognite).

Here's a summary of what it is from the README.md file:

> "🚀 A simple blazingly fast language agnostic microservice driven Discord
> bot framework made in rust that leverages Apache Kafka and KeyDB to take care of
> the gateway and caching leaving the handling for you to do in your preferred programming
> language with toolings to help you bring in your preferred Database of choice and
> presets is some languages to help you get started."

If you think that that sounds amazing then you're absolutely correct!

This allows bot developers to make bots in their preferred languages without worrying
as much about performance, gateway or caching.

It also allows the use of multiple languages for one bot and splitting every main
section into small parts which helps maintainability.

Eludris™️ will hopefully deliver official cognite wrappers very soon to facilitate
making bots with Cognite even more!

## Other Things

Among ~~us~~ the plethora of other stuff that happened this month we also got:

- [awesome-eludris](https://github.com/awesome-eludris): A repository where you
  can share all your Eludris related creations.
- [elusite](https://github.com/eludris/elusite): The website you're on right now,
  made using Astro.js.

## Conclusion

That was a pretty eventful 2 weeks for what was absolutely dead just a while ago.

As anything Eludris related if you have any improvements or edits you can make
to this website and blog make sure to make a pr and we will check it out.

That's all for this month's SOTT, hope you have a great month and until next time!

\- Enoki & The @Eludris team.

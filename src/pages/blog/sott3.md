---
layout: "../../layouts/BlogPost.astro"
title: "State Of The Thing #3"
description: "The third entry in the series of monthly Eludris news & updates."
author: "EnokiUN"
pubDate: "December 12 2022"
hide: false
---

## Main Things

- [Greeting](#greeting)
- [Eludris](#eludris)
  - [Eludris Development](#eludris-development)
  - [Eludris Community](#eludris-community)
  - [API Wrappers](#api-wrappers)
- [Conclusion](#conclusion)

## Greeting

Well hello there my friends, first let me start with mentioning how - and as you've probably noticed (if you aren't blind or
didn't get cache'd) - Elusite (this website) has got a minor makeover, this isn't final nor complete yet and is subject to a
lot of possible changes :D (may be if you're reading from the future).

## Eludris

This month was quite a relatively busy one for Eludris, the community got together on Discord and we worked ourselves to the
bone until Eludris v0.3 (codenamed calcite) was finally finished!

### Eludris Development

The community banding together and working to release the next major Eludris version brought upon a fair share of breaking
Eludris-API changes, luckily however and thanks to the efforts of @chromosomologist, we now have
[docs](https://eludris.github.io/docs)!

These docs contain the breaking changes and both API and instance-hosting level docs so I'd really recommend you check it out
if you're interested.

As a quick summary however:

1. Bunch of `.env` variable name changes.
2. `Eludris.toml` is now a thing.
3. Pandemonium changed to use OPCode payloads including `PING`s.
4. Effis was remade from the ground up.
5. More ratelimits.
6. Changed pandemonium expected ping interval duration.

### Eludris Community

This month, and thanks to wanting to give more "official" support to 3rd party library and client creator while not wanting to
clutter the official organization, we've decided to create a new organization called
[Eludris Community](https://github.com/eludris-community), here you can add your API wrappers, clients, toolings and so on and
be truly a part of the Eludris community, [awesome](https://github.com/eludris/awesome) still exists and will keep accepting
PRs for (hopefully) ever.

What this means is that stuff like `eludris-flutter` was moved from `eludris` to `eludris-community`.

### API Wrappers

This month we were graced with a bit more in the realm of variety Eludris API wrapper wise, there was only _one_ new Python api
wrapper which singlehandedly sunset both Eludris.py and Pydris (R.I.P.), the wrapper in question - made by @chromosomologist -
being [Velum](https://github.com/eludris-community/velum). Not only does Velum have wonderful internals focused on
extensibility and performance but it also has a wonderful developer experience, and it doesn't just stop there since it has
another extra library called [velum-sail](https://github.com/eludris-community/velum-sail) which is simply put, Python
argument parsing on meth.

Here's an example of that:

```py
@sail.param("flag", short="f")
@manager.command()
async def test(
    ctx: sail.Context,
    ints: sail.Greedy[typing.Set[int]],
    strs: typing.Sequence[str],
    bools: typing.List[bool],
    int_: int,
    ints2: typing.FrozenSet[int],
    *,
    switch: bool,
    flag: int,
) -> None:
    ...
```

Additionally, this month we also got a go Eludris api wrapper called
[eludris.go](https://github.com/eludris-community/eludris.go) by @ooliver1, here's a taste of that:

```go
func onMessage(msg *events.MessageEvent) {
	c := msg.Client()

	if msg.Author == "hello" {
		return
	}

    if msg.Content == "!speed" {
		_, err := c.SendMessage("googwuki", "I am the fastest ever.")

		if err != nil {
			panic(err)
		}
    }
}

func main() {
	HTTPUrl := os.Getenv("ELUDRIS_HTTP_URL")
	WSUrl := os.Getenv("ELUDRIS_WS_URL")

	manager := events.NewEventManager()
	events.Subscribe(manager, onMessage)
	c := client.New(client.Config{HTTPUrl: HTTPUrl, WSUrl: WSUrl, EventManager: manager})
	err := c.Connect()
}
```

We also got a TypeScript wrapper called [Evangeline](https://github.com/toolifelesstocode/evangeline), hope you JS shills are
happy now >:D

Here's a little example of that:

```ts
import { Bot } from "evangeline";

const bot = new Bot("new bot name");

bot.on("messageCreate", async (msg) => {
  if (msg.content == "!speed") {
    await bot.send("Am I fast?");
  }
});

bot.connect();
```

Finally, [uwuki](https://github.com/enokiun/uwuki) got the actual wrapper parts of it surgically removed and transplanted over
to [eludrs](https://github.com/eludris-community/eludrs), here's an example of what it looks like now:

```rs
use eludrs::HttpClient;
use futures::stream::StreamExt;

#[tokio::main]
async fn main() {
    let mut http = HttpClient::new().name("Uwuki".to_string());
    let gateway = http.create_gateway.await?;
    let mut events = gateway.get_events().await.unwrap();

    while let Some(msg) = events.next().await {
        if msg.content == "!speed" {
            http.send("I am faster").await.unwrap();
        }
    }
}
```

## Conclusion

Welp, that's about all for this month's SOTT, while it may not seem like much it's because most of the work happened was more
on the boring side so I can't really mention it here <img alt="A scuffed crying emoji" src="https://cdn.discordapp.com/emojis/980418824975319040.webp?size=96&quality=lossless" width="30em">.

If you're interested in all that stuff then perhaps you might want to check out Documentation (link in the navbar) or join our
Discord server (link in the footer)!

That's all for this month's SOTT, hope you have a great month and until next time!

\- Enoki & The @Eludris team.

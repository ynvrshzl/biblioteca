I'm experimenting with using HTML to write docs. 

Motivation: 
- I write alot. 
- I needed a plaintext format that will survive technology trends
- I needed a seriously battle-tested technology, that i can rely on to help me organize my overwhelming brain (very important!)

Naturally i started using apps. And discovered the world of UNIX; plaintext philosophy. And then the web; with markdown + 100s of formats.

Markdown made the most sense, and it was natively supported by obsidian and other great PKM apps. It is great as a lightweight plaintext formatting markup; but the biggest problem is;

> it solves a single problem of formatting readability; while creating a host of other issues;
- requires parser
- markdown flavors change content
- not supported natively in browser (important. the browser is a huge source of unexplored power, which is motivating the effort i'm exploring in this discussion!)
- cannot scale with large formatting requirements (especially graphical elements for explaining complex topics like latex, tables, etc.)
- cannot use JS natively (requires complex enviornment setup, which the browser already supports.)
- css is enviornment controlled.
- inconsistent across enviornments (data is not represented properly.)

So then i realized something; 

> Tiddlywiki already exploited this idea 20 years ago!

The browser can be used for it's operating-system-like features; a content rendering + organization + management engine.

But as explored further; there are several reasons this hasn't become stable enough to be an app. Tiddlywiki is the closes standardization of these ideas, i've researched. 

Here are the best parts about HTML as compared to other information management efforts;
- HTML is supported natively by all browsers
- saving HTML is more reliable than markdown (not enviornment/application driven; simply download HTML file.)
- browser is far more stable than most apps + editor enviornments.
- HTML supports inline CSS + JS (can get messy, but great for prototyping).
- HTML can link external CSS + JS  (even locally offline. this is crazy powerful.)
- HTML can operate using localhost (i have not tested this but apparently it's basically a micro app enviornment without the bloat of an editor.)
- HTML can natively display media
- HTML can create custom elements for formatting and document markup. Behaving closer to rich formatting like PDF than plain top-down markdown.
- HTML, even if local, can link and embed web content.
- A ton of other observations... (too extensive to mention here).

So then i ask myself "why am i using markdown? what is wasting more time and energy?" That's the main hypothesis of this conversation;

> Over the span of 1000s of files, which system scales cognitively?

That's not purely subjective; objectively here are key friction points to measure, especially as examined and experimented by others in PKM and web communities.

Friction:
- HTML is harder to write than markdown. 
- For transferring inforamtion, docs, studies, research etc; html is harder to work with due to it's document-heavy markup nature, as compared to markdown + YAML, for easy databasing (*this is probably the biggest con of HTML... it may be the reason people don't natively use HTML docs for managing information. It may introduce too much power + friction. Markdown has fragmentation, but arguably, at a much lower scale.)

Arguments:
- but HTML is still plaintext. And tons of editors facilitate this editing process.

I'm having this discussion becuase i believe applying friction is necessary; this seems too good to be true. I wonder if people have tried this before

And what exactly makes more sense, according to my hypothesis.

Basically this is all going towards my application; executable-html-documents-and-engine (PROJECT EDaE).
I have a proposition for "abstract code models". 

We already explored this previously, as the discussion of "Programming language design and systems structure."
However, I want to explore the phenomena of "languages as spheres of thought." Becuase it is definitely a direction where programming languages, missed the forest for the trees, so to speak. They focused so much on features, compiler policy, industry, and forgot the main purpose of a language; human beings speak with machines using langauges.

Perhaps a paradigm of functional programming, or a new way to expression logic.

In essence, we have this common issue, as seen across all forms of computer systems:

"<button>" + url + "</button>"

but what if the url is empty? we introduce in-line logic;

"<button>" + choice(url, url, "No URL") + "</button>"

Now the problem becomes readability, which is essentially the true, "end boss" stage of software engineering and computation. Becuase as code scales, so does complexity. That is a natural law of physics, and it applies to computer space just as much.

At a certain scale, systems become unreadable from their original intention. E.g.,

"<button>" + choice(url, type(url, e, "None"), "No URL")  + "</button>"

This becomes a problem of; future readability, even if in the moment of programming, this is incredibly intuitive and closer to how we human beings process problem-solving in-line.

However, code is not merely engineering; it is also mutual. Even if the only person who has to read the code, is the engineer themselves; i.e., "in 6 months, will today's code be readable to you? How about in 6 years?"

Code systems should stand the test of time; GNU, UNIX and Linux did, and they arguably power much of the computational structure of today's civilization. So that matters.



### Proposition
The proposition is this: What if we had a functional approach? Not merely "functional programming" but function as the primary unit of expression in code?


e.g.,

"<button>" + u + "<button>".

This does not merely have to abstract logic itself; it is about abstraction of logic, while remaining structurally intact. Very similar to algrebraic models, where variables are placeholders for unknown values, yet they form a model of expression. That's what allows us to start thinking in sophisticated, higher-orders of dimension. Which helps us problem-solve complex issues; and physics is a great example of algebra as a foundational model for equation and expression, tapping into the algebraic power of;

"Model expressions, without known variables."

in this case "u" can simply be another abstraction phase;

u = type(e, e, "No Extern)

and "e" can be the final depth of abstraction, for the expression;

e = choice(url, url, "No URL").

Now the model is readable as an unfolding sequence of steps.

...
However, it is not entirely realistic to sequentially stack abstraction; especially when the programmer is in a rush; abstraction introduces friction, and that's detrimental to the human programmer's ability to author the system, which itself, is detrimental to the system.

So another model, would be even more rigorously algebraic:

t(o) + c(u) + t(c).

Where instead of passing returns of fucntions, we are using variables (single letters) as both; 

- variables as function
- variables as logic


Now variables can express models, and produce output. 

...
Conclusion, i wonder if this has been previously explored, not as a paradigm, but as a strict model of coding itself. Perhaps somewhat similar to Haskell's monad-enforced structure, or Rust's memory borrow checking.


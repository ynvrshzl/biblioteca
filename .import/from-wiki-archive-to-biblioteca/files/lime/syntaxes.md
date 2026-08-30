I'm studying programming paradigms, to better understand how we can implement toosl and languages that actually reflect the phenomenology of human-machine-interaction, rather than detached computer science algorithms and models, which, from my local experience, rarely ever appear in systems-oriented web development.

here is a sample of the code style i am developing that solves alot of systems issues for myself.

Two styles: the first implementatiion is a variable-less chained syntax interface, using chains to pass state, and a global "hidden" state counter so varaibles do not clutter scopes, and better yet; we don't waste time and cognitive effort with temporary variables.

```JS
Data(32).type("int").as(new Var("y"))
```

The other style is less focused on a new cybernetic interface for code, and more about applying mathematical reasoning without "detached levels of analysis" fundamentally, we cannot infinitely reason about the code becuase; it creates a paradox;

- The more we reason about, dissect, and describe parts of code
- The more verbosity we increase
- The more system surface area we expand (horizontal scaling)
- Human cognition scales with density (vertical scaling, i.e., abstraction layers.)

The two styles i'm exploring include;
- Variables as the true mathematical idea of a variable "a container for an unknown value, which is used to model an expression problem." So instead of the classical programming "variable as infinite memory" in this case, we treat variables as "snapshots of program state."
- Reducing as much unecessary variables as possible (e.g., variables that are only consumed once.) by passing in math(style(functions())) ... although this style quickly gets out of hand and resembles spreadsheet formulas than code (which is why i developed the first cybernetic interface syntax style.) 

But this is a great exercise to showcase all the different ways we can structure code... which is an integral area of study, especially for all of the systems issues I have been exploring recently; and it seems very very few people in history actually attempted to contribute or fix the computational problem... but that may be significant enough for it's own discussion...


Given this insight, i'm testing two styles in real code for my projects. Below is real code implmenenting these ideas in unison. It isn't the most "perfect" prototype out there, but it illustrates something far more readable than the default style of phenomenological programming which is usually; make everything instantly executable in global scope, and neglect systems.

Anyways...

```JS
/**
 * Dependencies required for article loading process pipeline
 */
import { default as MD } from "../../../lib/markdown.js";
import { default as F } from "../router/fetch.js";
import * as A from "./api.js";

/**
 * Copyright (c) 2026 Hazl.
 * This is a test script for the article module of the system.
 */
export default async function () {
    const [ Y, M ] = $2();
    A.LD(Y);
    A.LD(M);
}
/**
 * Microtest version of the full module test, without any unecessary variables.
 */
export async function alt(){

    A.LD(new MD().D(await new F().LCF("./sample.md", __dir__)));
    A.LD(new MD().D(String('This is a markdown test string. **Bold** [Link]() `Code`. Is your formatter properly configured? <button>Yes</button> <button>Foo</button>')))
}

/** 
 * @stage Path normalization
 */
var __dir__ = import.meta.url;

/** These are the sample data files and strings for testing markdown and article capabilities. */
const $ = {

    /**
     * Inline markdown test string 
     */
    W: String('This is a markdown test string. **Bold** [Link]() `Code`. Is your formatter properly configured? <button>Yes</button> <button>Foo</button>'),

    /**
     * Markdown sample article, File I/O
     */
    T: await new F().LCF("./sample.md", __dir__),

};

/**
 * @stage File I/O, Processing, Markdown
 */
function $2() {
    const M = new MD().D($.W);
    const Y = new MD().D($.T);
    return [Y, M];
}
```

Instead of critiquing my code "oh but xyz should be abc..." i believe it is more beneficial to research history, and recent figures; to help make code more human operable.
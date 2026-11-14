import { Highlight } from "../../lib/com.webtools3/main.js";
import { Page, Cell, Element, Image, Header, Hyperlink, Description } from "../lib.js";

new Page()
    .title(`Neuroframes`)
    .properties({
        version: '0.1.0',
        status: 'editing',
        image: 'https://images.pexels.com/photos/17483868/pexels-photo-17483868.jpeg?w=900'
    })
    .body(
        new Element('center').c('Concept of "Neuroframes"'),
        new Element('img').attr({ src: 'https://images.pexels.com/photos/17483868/pexels-photo-17483868.jpeg' }),
        new Cell(`These are both interpeted Scientifically in our Work, and Mythologically, in our Youniverse work.`),
        new Cell(`"Psyframes", "Neuroframes" or "Mindframes" are both: Systems of Value (Our sense of Tethering Belief, Faith, Axioms, Truth, Reality) and War machines using the Mind as various Arrangements of War; Training Camp, Arena, Tournaments and real Battlefields (Psychefields)`)
    ).write();
new Page()
    .properties({
        categories: ['philosophy'],
        version: '0.1.0',
        status: 'editing',
    })
    .title('X-Theory')
    .body(
        new Cell().chain([
            new Element('h2').c('Theory on how we define and know what is Real (Somewhat Pragmatist view... not quite Materialist...)'),
            new Element('span').c(`Perhaps the most real of things, that we can understand, is at the most Abstract, fundamental feature of things... `),
            new Element('mark').c('the beginning and end: Time.'),
            new Element('p').c('This Exhibits fundamental qualities of Time (Beginning, End, Chronology) and of Space (Material, Physical). However, this position is incomplete, as it neglects a fundamental property, Inherent and Integral to both Machine and Living: '),
            new Element('mark').c('Events.'),
            new Element('p').c('This is the third emergent Category between the Temporal and Physical... the "Eventuality." or "Causality."')
        ]
        ),
        new Cell().chain([
            new Element('p').c('Introduction to "X-Theory" or "Chronometry II"'),
            new Image({ src: 'https://images.pexels.com/photos/9213725/pexels-photo-9213725.jpeg' })
        ]),
        new Cell().chain([
            new Cell(`1. Where something begins, is it's position in space, at a point in time.`),
            new Cell(`2. Where something ends, is it's position in space, at another point in time.`),
            new Cell(`3. Where these points meet, is almost never a Linear computation; but a series of points in between. These points are distributed along...`),
            new Cell(`4. How and When events interconnect, are positions in time, points in space.`)
        ]),

    ).write();
new Page().properties({
    title: 'cyberoptics',
    version: "0.1.0",
    image: 'https://images.pexels.com/photos/39923388/pexels-photo-39923388.jpeg',
}).body(
    new Cell('Cyberoptics is a branch of ').inlink({ href: "#/cyberneering", text: 'Cyberneering.' }).c(" Primarily focusing on..."),
).write()

new Page().properties({
    title: 'cyberneering',
    version: '0.1.0',
    status: 'editing',
}).body(
    new Cell(`Cyberneering is the study of `)
).write()

new Page()
    .title('CyberopticChannels')
    .properties({
        version: '0.1.0',
        status: 'editing',
    })
    .body(
        new Cell('The reason this is fundamental, is becuase it is precisely what makes Cyberoptics a "Visual" field; we cannot often see deep into the structures of information, yet they have profound implications on the way we navigate complex Systems and Life.'),
        new Cell('The primary problem in ').inlink({ href: '#/cyberoptics', text: 'Cyberoptics' }).c(' is tracking Relational Changes at Junctions. This is most common when making Decisions'),
        `The primary problem in Cyberoptics is that Human Vision (Both Physically and Cognitively and even Orientationally) is highly limited to our ability to Focus. When we change one thing, we are Implicitly working with Relata; underlying assumptions.`
    )
    .write()

new Page()
    .title('Cyberoptic-bioautomata')
    .properties({
        version: '0.1.0',
        status: 'editing',
    })
    .body(

        new Header(2).c('1.1 Introduction'),
        new Cell(`The Cyberoptic machine is a hypothetical/abstract model measuring and displaying key areas of Cyberoptics: Human Abstract Reasoning (Working Memory Capabilities, Coherence)`),
        new Cell(`It is a fundamental Object of modelling and representation for the field of `).inlink({ href: '#/cyberoptics', text: 'Cyberoptics.' }),

        new Header(2).c('1.2 References, History and Inspirations'),
        new Cell(`Inspired by Turing's Insanely Minimal Computer/Machine: The Turing Machine.`),
        new Cell(`Please read more about the Turing machine at Wikipedia.`).insert(new Hyperlink({ href: 'https://en.wikipedia.org/wiki/Turing_machine', text: 'Open external link' })),
        new Image({ src: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Turing_Machine_Model_Davey_2012.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original', alt: 'Turing machine, via Wikipedia' }),
        new Cell(`Not only did this Machine drill to the very most bottom of depths in search for the Abstraction of Abstractions; but it also invented a Standard test of Computational Completeness. Decades after it's invention, it is still among the Standard methods for testing how we build Computers capable of solving problems in the real world... (*though this is an entirley different topic.)`),
        new Header(2).c('2.0 - Scenarios'),
        new Header(3).c('2.1 - Most common'),
        new Cell('Most common Scenario'),
        new Cell(`The most common scenario and problem in the Bioautomata is Real-time Memory Processing`).chain([
            new Element('li').c('- The bioautomata cannot process parallel streams of Information, yet it must navigate a complex Ecosystem.'),

            new Element('li').c(`- An Internal "Telos" Is necessary.`),
            new Element('li').c(`- This is measured in the macro scale (i.e., weeks instead of days)`),
            new Element('li').c(``),
        ]),
        new Header(2).c('"Context Hopping"'),
        new Cell(` Switching/Hopping contexts 'a' to 'b' to 'e'. The gaps between the bioautomata must either fill or comproimise each gap. This suggests information has both; Gap as Structure and as Processing `),
        new Header(2).c('"The longterm goal of the Bioautomata"'),
        new Cell(` The eventual, longterm goal of the bioautomata is to genereate and maintain internal "Atlases" or "Simplified, Unified Models" of all 3 Cores in Cyberoptics;`).chain([
            new Element('li').c(`- Surrounding (Problems, Inspiration, Reference, Pressure)`),
            new Element('li').c(`- System (Subsystems, Implementations, Strategies) `),
            new Element('li').c(`- Telos (Direction, Value Hierarchies, Transcendent Elements)`),
        ]),
        new Header(2).c('"Historical Hops"'),
        new Cell().chain([
            new Header(3).c('Context'),
            new Element('p').c(`To understand Historical Hops, we must first understand the importance of Cause and Effect.`),
            new Element('p').c(`Cause and Effect is an integral Abstract object of Human Reasoning. It allows us to understand Why things happen.`),
            new Element('p').c(`If we understand Cause-and-Effect by History... then what happens when we create or switch Contexts without explanation? It is as if we instantiate entirely new Historical chains, none of which appear related, none of which position is inherently obvious from external probing.`),
            new Element('p').c(`What if this is an Adaptive ability of the Human brain; a Necessity, not merely a Computational Power. If we interpret thought as walking through a complex City; then it is clear why Hops are necessary. `),
            new Element('p').c(`Imagine having to walk the same distance every time, even when we know where to teleport (so-to-speak.) `),
            new Element('p').c(`But what if this ability, in short-term excess, is Entropy?`),
            new Element('p').c(` What if this could be measured in some sense, using Phenomenological Strategies? Self-reported scales of Cognitive Depletion by Measured Information Mechanics (Density, Novelty, Speed, Hops)`),
        ]),
    ).write()

new Page()
    .title('continuity-mechanics')
    .properties({
        version: '0.1.0',
        status: 'editing',
    })
    .body(
        new Header(1).c('The Mechanics of Continuity'),
        new Element(`p`).c(`As made observable by Writer's block.`),
        new Element('hr'),
        new Header(2).c('1.0: Understanding Continuity'),
        new Cell(`To understand Continuity, let's examine a real-life Scenario of a Classical case in `).inlink({ href: '#/continuity-break', text: 'Continuity Break: ' }).c(`Writer's Block.`),
        new Description(`Read more about Continuity Break `).insert(new Hyperlink({ href: '#/continuity-break', text: "Here." })),
        new Element('hr'),
        new Header(2).c('1.1: Examining Writer\'s block'),
        new Cell().chain([
            new Highlight(`Summary`),
            new Element(`span`).c(`Continuity is blocked by Iota-or-Micro Scale Focus.`),
        ]),
        new Cell(`As soon as the writer focuses on the individual words, rather than the Telos; Continuity collapses.  `),
        new Cell(`This implies specific mechanics about how we Human Beings process Complex Information and maintain internal Coherence and Continuity. Two ideas:`),
        new Cell(` 1. Focus depends on scale (Only focusing on one scale of the world at a time) `),
        new Cell(` 2. Continuity is a Cognitive process, much like a bike requires Gyrocnetric Equillibrum (Sufficient baseline velocity) in order to stay upright and balanced, and avoid collapsing. In Cyberoptic terms, this collapse would essentially be `).inlink({ href: '#/errata', text: 'Eratta.' })
    ).write();

new Page()
    .title('cursor-theory')
    .properties({
        version: '0.1.0',
        status: 'editing',
    })
    .body(
        new Header(2).c('1.0 - Introduction'),
        new Element('p').c(`Cursor Theory is a branch of `).insert(new Hyperlink({ href: '#/cyberoptics', text: "Cyberoptics" })),
        new Element('h2').c(`Changelog:`),
        new Element('li').c(`Cursor theory is now a unified object in Cyberoptics, alongside the "axis"`)
    ).write();


new Page()
    .properties({
        title: 'continuity-break',
        version: '0.1.0',
        status: 'editing',
    }).body(

        new Header(2).c('1.0 - Introduction'),
        new Cell(`Continuity Break is... similar to `).inlink({ href: '#/errata', text: 'Errata' }),
        new Header(2).c('2.0 - Causes of Continuity Break'),
        new Cell(`In simplest terms, Continuity Break may result fundamentally from an abstract problem of equillibrium between implicit vs explicit relata. The more implicit information (loose parts/fragments) that are not addressed explicitly and linked back to the local Telos, the less signal in path. Continuity Breaks. As with most Cyberoptic concepts, this exists in a Continuum, often only reliably measurable from internal, Conscious...`)
    ).write()

new Page()
    .properties({
        title: 'errata',
        version: '0.1.0',
        status: 'editing',
    }).body(
        new Cell('Errata is...')
    ).write()
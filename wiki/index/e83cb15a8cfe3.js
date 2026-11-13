import { Page, Cell, Element, Image, Header, Hyperlink } from "../lib.js";

new Page()
    .title(`Neuroframes`)
    .body(
        new Element('center').txedit('Concept of "Neuroframes"'),
        new Element('img').attr({ src: 'https://images.pexels.com/photos/17483868/pexels-photo-17483868.jpeg' }),
        new Cell(`These are both interpeted Scientifically in our Work, and Mythologically, in our Youniverse work.`),
        new Cell(`"Psyframes", "Neuroframes" or "Mindframes" are both: Systems of Value (Our sense of Tethering Belief, Faith, Axioms, Truth, Reality) and War machines using the Mind as various Arrangements of War; Training Camp, Arena, Tournaments and real Battlefields (Psychefields)`)
    ).write();
new Page()
    .properties({
        categories: ['philosophy']
    })
    .title('X-Theory')
    .body(
        new Cell().chain([
            new Element('h2').txedit('Theory on how we define and know what is Real (Somewhat Pragmatist view... not quite Materialist...)'),
            new Element('span').txedit(`Perhaps the most real of things, that we can understand, is at the most Abstract, fundamental feature of things... `),
            new Element('mark').txedit('the beginning and end: Time.'),
            new Element('p').txedit('This Exhibits fundamental qualities of Time (Beginning, End, Chronology) and of Space (Material, Physical). However, this position is incomplete, as it neglects a fundamental property, Inherent and Integral to both Machine and Living: '),
            new Element('mark').txedit('Events.'),
            new Element('p').txedit('This is the third emergent Category between the Temporal and Physical... the "Eventuality." or "Causality."')
        ]
        ),
        new Cell().chain([
            new Element('p').txedit('Introduction to "X-Theory" or "Chronometry II"'),
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
    new Cell('Cyberoptics is a branch of ').inlink({ href: "#/cyberneering", text: 'Cyberneering.' }).txedit(" Primarily focusing on..."),
).write()

new Page().properties({
    title: 'cyberneering'
}).body(
    new Cell(`Cyberneering is the study of `)
).write()

new Page().title('CyberopticChannels')
    .body(
        new Cell('The reason this is fundamental, is becuase it is precisely what makes Cyberoptics a "Visual" field; we cannot often see deep into the structures of information, yet they have profound implications on the way we navigate complex Systems and Life.'),
        new Cell('The primary problem in ').inlink({ href: '#/cyberoptics', text: 'Cyberoptics' }).txedit(' is tracking Relational Changes at Junctions. This is most common when making Decisions'),
        `The primary problem in Cyberoptics is that Human Vision (Both Physically and Cognitively and even Orientationally) is highly limited to our ability to Focus. When we change one thing, we are Implicitly working with Relata; underlying assumptions.`
    )
    .write()

new Page().title('Cyberoptic-bioautomata')
    .body(
        new Element('center').chain([
            new Header(1).txedit('Cyberoptic Bioautomata')
        ]),
        new Header(2).txedit('1.1 Introduction'),
        new Cell(`The Cyberoptic machine is a hypothetical/abstract model measuring and displaying key areas of Cyberoptics: Human Abstract Reasoning (Working Memory Capabilities, Coherence)`),
        new Cell(`It is a fundamental Object of modelling and representation for the field of `).inlink({href: '#/cyberoptics', text: 'Cyberoptics.'}),

        new Header(2).txedit('1.2 References, History and Inspirations'),
        new Cell(`Inspired by Turing's Insanely Minimal Computer/Machine: The Turing Machine.`),
        new Cell(`Please read more about the Turing machine at Wikipedia.`).insert(new Hyperlink({ href: 'https://en.wikipedia.org/wiki/Turing_machine', text: 'Open external link' })),
        new Image({ src: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Turing_Machine_Model_Davey_2012.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original', alt: 'Turing machine, via Wikipedia' }),
        new Cell(`Not only did this Machine drill to the very most bottom of depths in search for the Abstraction of Abstractions; but it also invented a Standard test of Computational Completeness. Decades after it's invention, it is still among the Standard methods for testing how we build Computers capable of solving problems in the real world... (*though this is an entirley different topic.)`),
        new Header(2).txedit('2.0 - Scenarios'),
        new Header(3).txedit('2.1 - Most common'),
        new Cell('Most common Scenario'),
        new Cell(`The most common scenario and problem in the Bioautomata is Real-time Memory Processing`).chain([
            new Element('li').txedit('- The bioautomata cannot process parallel streams of Information, yet it must navigate a complex Ecosystem.'),

            new Element('li').txedit(`- An Internal "Telos" Is necessary.`),
            new Element('li').txedit(`- This is measured in the macro scale (i.e., weeks instead of days)`),
            new Element('li').txedit(``),
        ]),
        new Header(2).txedit('"Context Hopping"'),
        new Cell(` Switching/Hopping contexts 'a' to 'b' to 'e'. The gaps between the bioautomata must either fill or comproimise each gap. This suggests information has both; Gap as Structure and as Processing `),
        new Header(2).txedit('"The longterm goal of the Bioautomata"'),
        new Cell(` The eventual, longterm goal of the bioautomata is to genereate and maintain internal "Atlases" or "Simplified, Unified Models" of all 3 Cores in Cyberoptics;`).chain([
            new Element('li').txedit(`- Surrounding (Problems, Inspiration, Reference, Pressure)`),
            new Element('li').txedit(`- System (Subsystems, Implementations, Strategies) `),
            new Element('li').txedit(`- Telos (Direction, Value Hierarchies, Transcendent Elements)`),
        ])
    ).write()
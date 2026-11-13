import { Element, Page, Cell, Header, Description } from "../../com.webtools3/main.js"

/**
 * descriptions: tests
 * state: prototype
 * version: 0.1.0
 * date: 2026-11-10
 */
new Page().properties({
    title: "Testing-all-features",
}).body(
    new Header(1).txedit('Syntax'),
    new Element('center').txedit('Prototyping + Developing Specification Manual for JS Authoring Syntax/Lib'),
    new Header(2).txedit('1.0 - Links'),
    new Cell('How do links work? We developed a previous project in which we studied this... ').hyperlink({ href: '#/event-horizon', text: 'Hyperlink text test to Event Horizon.' }),
    new Cell().chain([
        new Element('hr'),
        new Element('p').txedit('There are several ways to work with Links... though they are definitely arranged by Standardization: Verbosity (Spec coming soon...) '),
        new Element('center').txedit('Variations of Hyperlinks (Assorted by Reccomended Spec)'),
        new Element('div').attr({ style: 'margin: 5px; padding: 25px; border: 1px solid; border-radius: 5px;' })
            .chain([
                new Element('p').txedit('1) Simplest inline link'),
                new Description('Using the standard .hyperlink packaged with each Cell() instance.'),
                new Element('pre').txedit('new Cell().hyperlink({href: "#", text: "link"})'),
            ]),
        new Element('div').attr({ style: 'margin: 5px; padding: 25px; border: 1px solid; border-radius: 5px;' })
            .chain([

                new Element('p').txedit('1.1) Inline link via strings'),
                new Element('pre').txedit('new Cell(`This is an ${new Hyperlink({href: "#", text: "inline link."})}.`)'),
            ]),
        new Element('div').attr({ style: 'margin: 5px; padding: 25px; border: 1px solid; border-radius: 5px;' })
            .chain([
                new Element('p').txedit('2: Lesser recommended'),
                new Element('pre').txedit('new Cell().chain([ new Hyperlink({href: "#", text: "link"}) ])'),

            ]),
    ]),
    new Header(2).txedit('Adding content to page'),
    new Cell('For now, the body can simply contain lines of content. Isnt this more verbose than HTML or MarkDown?'),
    new Cell(`As with all things, time will tell!`),
    new Header(2).txedit('Templates'),
    new Header(3).txedit('Lorem ipsum'),
    new Cell().lorem()
).write()

new Page().properties({
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Black_hole%27s_accretion_disk.jpg/960px-Black_hole%27s_accretion_disk.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    title: 'event-horizon',
}).body(
    new Cell('An Event Horizon is...'),
    new Element('img').attr({ src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Black_hole%27s_accretion_disk.jpg/960px-Black_hole%27s_accretion_disk.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail' })
).write()
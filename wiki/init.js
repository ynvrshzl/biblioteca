/**
 * description: experimental js-based articles
 * type: module
 * date: 2026-11-09
 * author: hazl
 */
import { Page as Index, Cell } from "../lib/com.editor/main.js";
import { html } from "../lib/com.webtools3/src/html.js";

/**
 * descriptions: tests
 * state: prototype
 * version: 0.1.0
 * date: 2026-11-10
 */
new Index().properties({
    title: "test",
}).body(
    new Cell('For now, the body can simply contain lines of content. Isnt this more verbose than HTML or MarkDown?'),
    new Cell(`As with all things, time will tell!`),
    new Cell('How do links work? We developed a previous project in which we studied this... ').hyperlink({ href: '#', text: 'Hyperlink text.' }),
    new Cell('').lorem()
).write()

new Index().properties({
    title: 'cyberoptics',
    version: "0.1.0",
}).body(
    new html('h2').txset('Cyberoptics'),
    new Cell('Cyberoptics is a branch of ').hyperlink({ href: "#", text: 'Cyberneering.' }).txset(" Primarily focusing on..."),
).write()

new Index().properties({
    title: 'cyberneering'
}).body(
    new html('h2').txset('Cyberneering'),
    new Cell(`Cyberneering is the study of `)
).write()

new Index().properties({
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Black_hole%27s_accretion_disk.jpg/960px-Black_hole%27s_accretion_disk.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    title: 'event-horizon',
}).body(
    new Cell('An Event Horizon is...'),
    new html('img').attr({ src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Black_hole%27s_accretion_disk.jpg/960px-Black_hole%27s_accretion_disk.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail' })
).write()
/**
 * description: experimental js-based articles
 * type: module
 * date: 2026-11-09
 * author: hazl
 */
import { Article, Cell } from "../lib/com.editor/main.js";

// new Domain('youniversity').description('No description available')
// new Domain('lexicon').description('No description available')
// new Domain('youniverse').description('No description available')
// new Domain('observatory').description('No description available')
// new Route('matrix').description('Main route for web app.');



new Article().body(
    new Cell('For now, the body can simply contain lines of content. Isnt this more verbose than HTML or MarkDown?'),
    new Cell(`As with all things, time will tell!`),
    new Cell('How do links work? We developed a previous project in which we studied this... ').link({href: '#', display: ''}),
    new Cell('How is this rendered on the site itself?')
)
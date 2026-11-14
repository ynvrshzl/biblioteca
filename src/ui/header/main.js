import { Element } from "../../../lib/com.webtools3/main.js"
import { tree } from "../../tree.js"
/**
 * type: component
 * class: component, ui, web, layout
 * description: 
 * role: article-readability
 * category: accessibility
 */

/**
 * 1-depth
 */
tree.header.left = new Element('span').css_list('left').c('L'),
    tree.header.right = new Element('span').css_list('right').c('R'),
    tree.header.title = new Element('section').css_list('title-container', 'flex', 'row', 'gap-[5px]');

/**
 * 2-depth
 */
tree.header.title.label = new Element('span').css_list('title').c('Title')
tree.header.title.img = new Element('img').css_list('thumbnail').attr({ src: 'https://placehold.co/1x1/gray/gray' })

/**
 * compoasition
 */
tree.header.chain([
    tree.header.left,
    tree.header.title.chain([
        tree.header.title.img,
        tree.header.title.label
    ]),
    tree.header.right,
])

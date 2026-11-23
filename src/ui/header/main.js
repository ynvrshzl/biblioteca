import { Button, Element } from "../../../lib/com.webtools3/main.js"
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
tree.header.left = new Button().css_list('left').c('+').evtclick(() => tree.panels.left.csstoggle('collapsed')),
tree.header.right = new Button().css_list('right').c('+').evtclick(() => tree.panels.right.csstoggle('collapsed')),
tree.header.title = new Element('section').css_list('title-container', 'flex', 'row', 'gap-[5px]');

/**
 * 2-depth
 */
tree.header.title.column = new Element('span').css_list('flex', 'column',);
/**
 * 3rd-depth
 */
tree.header.title.label = new Element('span').css_list('title').c('Title')
tree.header.title.description = new Element('span').css_list('label').c('Description...')

tree.header.title.img = new Element('img').css_list('thumbnail').attr({ src: 'https://placehold.co/1x1/gray/gray' })

/**
 * compoasition
 */
tree.header.chain([
    tree.header.left,
    tree.header.title.chain([
        tree.header.title.img,
        tree.header.title.column.chain([
            tree.header.title.label,
            tree.header.title.description,

        ])

    ]),
    tree.header.right,
])

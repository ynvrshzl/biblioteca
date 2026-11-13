import { Element } from "../../../lib/com.webtools3/main.js"
import {tree} from "../../tree.js"
/**
 * type: component
 * class: component, ui, web, layout
 * description: 
 * role: article-readability
 * category: accessibility
 */
tree.header.chain([
    new Element('span').css_list('left'),
    new Element('span').css_list('title').txedit('Title'),
    new Element('span').css_list('right'),
])
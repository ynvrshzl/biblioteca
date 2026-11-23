import { Element } from "../../../lib/com.webtools3/main.js";
import { tree } from "../../tree.js";

/**
 * pass: ui-assignment + instantiation
 */
tree.stage.content
    = new Element('section').cssq('width-[readable] content body');

tree.stage.header
    = new Element('header').cssq('sub-ui-component-section flex column')

tree.stage.header.title
    = new Element('h1').cssq('title').c('Title')

tree.stage.breadcrumbs = new Element('section').cssq("breadcrumbs component size-[slim] flex row").c('path/to/article')

tree.stage.footer = new Element('footer').css_list(`sub-ui-component-section`).c(` Citations, References, Etc.`);


/**
 * experimental two-in-one method of both; assigning constant and object chaining internally
 * this may become a standard method for UI hierachies...
 * id: #3fe83151
 */
Object.assign(tree.stage.header, {
    properties: new Element('section').cssq('properties table').c('Properties | Author | Version | etc.')
})


/**
 * stage: ui-composition
 */
tree.stage.chain([
    tree.stage.breadcrumbs,
    tree.stage.header.chain([
        tree.stage.header.title,
        tree.stage.header.properties
    ]),
    tree.stage.content,
    tree.stage.footer
])
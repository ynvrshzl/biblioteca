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
    = new Element('h2').cssq('title').c('Title')


    /**
     * experimental two-in-one method of both; assigning constant and object chaining internally
     * this may become a standard method for UI hierachies...
     * id: #3fe83151
     */
Object.assign(tree.stage.header, {
    properties: new Element('section').cssq('properties table')
})


/**
 * stage: ui-composition
 */
tree.stage.chain([
    tree.stage.header.chain([
        tree.stage.header.title,
        tree.stage.header.properties
    ]),
    tree.stage.content,
])
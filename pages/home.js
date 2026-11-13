/**
 * type: page
 * description: Homepage 
 * version: 0.1.0
 */
import { Element } from "../lib/com.webtools3/main.js";
import { database } from "../lib/com.editor/database.js";
import { tree } from "../src/tree.js";

/**
 * description: accessing ui
 */
const sidebar = tree.panels.left;

/**
 * devlog: testing database
 */
new Element('p').txedit(`Database has (${database.length}) objects`).attach(sidebar);

/**
 * looping through database
 */
database.forEach((x) => {

    new Element('div').chain([
        new Element('a').attr({ href: '#/' + x.title }).txedit(x.title)
    ]).attach(sidebar);

});

// database = d
// loop item = x
// li = l
// link = a
// href = a.h
// d -> x
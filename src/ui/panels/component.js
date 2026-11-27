/**
 * type: component
 * comment: "Panels."
 * version: 0.1.0
 * date: 2026-11-17
 */
import { Element } from "../../../lib/com.webtools3/main.js";
import { database } from "../../../lib/com.editor/database.js";
import { tree } from "../../../src/tree.js";

/**
 * description: accessing ui
 */
const sidebar = tree.panels.left;

/**
 * description: topics are essentially 'folders' or 'hierarchy url categories'. see docs for more info.
 * state: prototype
 * version: 0.1.0
 */
const topics = new Set();

/**
 * section: passing topics
 */
database.forEach((i) => {
    /**
     * if the current 'i' information object iterant contains a topic, then add it to the database registry
    */
    if (i.topic) {
        console.log(i.topic)
        topics.add(i.topic);
    }
});
/**
 * note: if we ever need to directly access real topics (that are type 'topic') then we can use this code instead.
 * const t_matches = database.filter((o) => o.type === 'topic');
 */
    









/**
 * stage: parsing topics into panel
 */
new Element('p').c(`Topics`).attach(sidebar);

topics.forEach((x) => {


    new Element('div').chain([
        /**
         * state: temporary 
         * text: fix for linking topic strings as actual object hrefs
         */
        new Element('span').chain([
            new Element('a').attr({ href: '#/' + x, style: 'display: block' }).c(x)

        ])
    ]).attach(sidebar);
})
/**
 * devlog: testing database
 */
new Element('p').c(`All Objects: (${database.length}) `).attach(sidebar);

/**
 * looping through database
 */
database.forEach((x, i) => {

    /** type: container */
    new Element('div').chain([
        /** type: list item */
        new Element('span').chain([
            new Element('span').c(x.topic ?? "").c(" "),
            // new Element('a').attr({ href: '#/' + (x.topic ? x.topic + "/" + x.title : x.title ) }).c(x.title)
            new Element('a').attr({ href: '#/' + x.title }).c(x.title)
        ])
    ]).attach(sidebar);
});

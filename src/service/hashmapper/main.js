/**
 * description: url network router logic system module
 * type: service
 * license: (internal)
 * author: hazl
 */
import { database } from "../../../lib/com.editor/database.js";
import { tree } from "../../tree.js";

/**
 * todo: moving to external stage api
 * todo: how do we access the content here?
 */
const stage = tree.stage.content;


/**
 * init: the program begins with two entry points: onload and hashchange
 * hook: the module uses the 'window hashchange' event and 'onload'
 */

function init() {
    window.addEventListener('hashchange', main);
    window.addEventListener('load', main);
}

/**
 * description: loads hashmapper main service init
 */
function main(e) {

    /**
     * hash from window
     */
    const hash = window.location.hash.slice(2);

    /**
     * querying database to find matching entry reference so we can work with it's data programmatically
     */
    const match = database.find((i) => i.title === hash);

    /**
     * todo: moving to article/stage map!
     */
    stage.empt()
    stage.txovr(match.content)

}

init();
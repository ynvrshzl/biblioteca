/**
 * description: url network router logic system module
 * type: service
 * license: (internal)
 * author: hazl
 */
import { database } from "../../../lib/com.editor/database.js";
import { Element } from "../../../lib/com.webtools3/main.js";
import { tree } from "../../tree.js";

/**
 * todo: moving to external stage api
 * todo: how do we access the content here?
 */
const content_body = tree.stage.content;


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
     * feature: default page
     * logic: if the window has no hash, load default
     * 
     */
    if (window.location.hash == "") {
        window.location.hash = '/README.md'
    }

    /**
     * hash from window
     */
    const hash = window.location.hash.slice(2);

    /**
     * querying database to find matching entry reference so we can work with it's data programmatically
     */
    const match = database.find((i) => i.title === hash);

    /**
     * todo: moving all of this to article/stage apis
     */
    // todo: moving buffer compoennt!
    if (tree.stage.src.querySelector('div.buffer')) {

    } else {
        const buffcomponent = new Element('div').css_list('buffer', 'component')
        tree.stage.insert(buffcomponent);
        buffcomponent.chain([
            new Element('div').css_list('buffer', 'indicator')
        ])
        buffcomponent.src.addEventListener('animationend', function (e) { buffcomponent.src.remove() }, { once: true })

    }





    content_body.empt()
    content_body.cch(match.content)
    tree.stage.header.title.cch(match.title ?? "No title")
    tree.header.title.label.cch(match.title ?? "No title")
    tree.header.title.img.attr({ src: match.image ?? "https://placehold.co/1x1/lightgray/lightgray" })
    tree.stage.header.thumbnail.attr({ src: match.image ?? "https://placehold.co/1x1/lightgray/lightgray+text=v" })
    tree.stage.header.background.attr({ src: match.image ?? "https://placehold.co/1x1/lightgray/lightgray" })
    tree.stage.header.properties.empt()

    /**
     * stage: looping through each datakey (excluding content)
     */
    Object.entries(match).filter(([k]) => k !== 'content')
        .forEach(([a, b]) => {
            tree.stage.header.properties.chain([
                new Element('div').css_list('property', 'row').chain([
                    new Element('span').css_list('property', 'key').c(a),
                    new Element('span').css_list('property', 'value').c(b)
                ])
            ])
        })

}
init();
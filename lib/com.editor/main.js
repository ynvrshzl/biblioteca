import { Element } from "../com.webtools3/main.js";
import { database } from "./database.js";


/**
 * description: Synonym for 'Article' or 'File'.
 */
export class Page extends Element {
    /**
     * description: no constructor.
     */
    constructor() {
        /**
         * description: calls inherited class
         */
        super('div').attr({ class: "article file page node data" });

        /**
         * description: Each page has with it, an associated set of properties whcih are both, internally generated and author-defined.
         */
        this.data = {};

        return this;
    }
    /**
     * description: Set the body of the internal reference (does not output graphics.)
     */
    body(...rows) {

        /**
         * type: auto-casting map
         * stage: Append each element to the body. element must be of class 'html'
        */
        rows.forEach((item) => {
            /**
             * feature-support: For standalone strings in the content body, this simply auto-maps a Cell to avoid overly verbose 'new Cell()' in the content body.
             * status: experimental, unstable, entropic
             * version: 0.1.0
             * date: 2026-11-13
            */
            if (typeof item == "string") {
                /**
                 * type: internal-api-communication protocol
                 */
                new Cell(item).attach(this);

                /**
                 * map: otherwise, if the current 'e' element in the body loop is of the 'html' class
                 */
            } else if (item instanceof Element) {
                /**
                 * type: internal-api-communication protocol
                 */
                this.insert(item.src)

                /**
                 * map: Otherwise, if it is an instance of cell, simply...
                 */
            } else if (item instanceof Cell) {
                /**
                 * type: internal-api-communication protocol
                 */
                item.attach(this)
            }

        });
        return this;
    }

    /**
     * description: Add custom or hard-coded properties to the Article.
     * example: "Page().properties({title: 'title', year: 2077})"
     */
    properties(a) {

        for (const key in a) {
            this.data[key] = a[key];
        }
        // a.forEach(([a,b]) => {this[a] = b})
        Object.assign(this.data, a)
        return this;
    }
    /**
     * description: Quick access title property
     * type: common-prop
     */
    title(a) {
        Object.assign(this.data, { title: a })
        return this;
    }
    /**
     * description: Compiles and register this page to the database.
     * type: auto
     * on: init
     */
    write() {
        /**
         * description: register this data to the database.
         */
        this.#PROCINTERN();
        database.push(this.data);
        return;
    }
    /**
     * description: Processes various internal properties (auto-generated, i.e., id) and builds database index.
     * type: private
     */
    #PROCINTERN() {
        Object.assign(this.data, { content: this.src.innerHTML });
        Object.assign(this.data, { id: Math.random().toString(16).slice(2) });
        Object.assign(this.data, { namespace: "/" });
    }
}

/**
 * description: The 'Cell' is the smallest micro-object of text data in the eco-system.
 */
export class Cell extends Element {
    constructor(data) {
        super('p');
        this.txedit(data ?? "").attr({ class: "cell" });
        return this;
    }
    inlink({ href, text }) {
        new Hyperlink({href, text}).attach(this.src);
        return this;
    }
    /**
     * type: template/snippet
     * description: Fills a cell with 'Lorem ipsum' content.
     * version: 0.1.0
     */
    lorem() {
        this.txovr(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eligendi mollitia adipisci? Numquam
            quae repellendus, error quas nostrum soluta quasi tempora, laboriosam esse recusandae reprehenderit
            aspernatur aut molestias id asperiores?`)
        return this;
    }
}
/**
 * description: Standard hyperlink
 */
export class Hyperlink extends Element {
    constructor({ href, text }) {
        super('a').attr({ href }).txovr(text);
    }
}
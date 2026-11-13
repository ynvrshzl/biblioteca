import { html } from "../com.webtools3/src/html.js";
import { database } from "./database.js";


/**
 * description: Synonym for 'Article' or 'File'.
 */
export class Page extends html {
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
    body(...elements) {
        /**
         * stage: Append each element to the body. element must be of class 'html'
         */
        elements.forEach((e) => this.insert(e.src));
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
    title() { }
    /**
     * description: Compiles and register this page to the database.
     * type: auto
     * on: init
     */
    write() {
        /**
         * description: register this data to the database.
         */
        this.__$_build_intern_properties();
        database.push(this.data);
        return;
    }

    __$_build_intern_properties() {
        Object.assign(this.data, { content: this.src.innerHTML });
        Object.assign(this.data, { id: Math.random().toString(16).slice(2) });
        Object.assign(this.data, { namespace: "/" });
    }
}

/**
 * description: The 'Cell' is the smallest micro-object of text data in the eco-system.
 */
export class Cell extends html {
    constructor(data) {
        super('p');
        this.txset(data).attr({ class: "cell" });
        return this;
    }
    hyperlink({ href, text }) {
        new html('a').attr({ href }).txovr(text).attach(this.src);
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
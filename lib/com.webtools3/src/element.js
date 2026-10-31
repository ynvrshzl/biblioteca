/**
 * title: html
 * type: HTML General Element Blueprint
 * description: For building HTML interfaces out of HTML pieces
 */
export class html {
    /**
     * description: The class constructor accepts a single string 'a' which is the HTML tagname 
     */
    constructor(a) {
        /**
         * label: tag
         * type: internal-class-method
         * in-src: a
         */
        this.tag = a;
        /**
         * label: "Source HTML Element"
         * description: The internal class HTML Source element reference.
         */
        this.src = HTMLElement;

        /**
         * description: this class auto-initalizes itself upon instantiation.
         */
        this.init();
    }
    /**
     * type: init-protocol
     */
    init() {
        this.src = document.createElement(this.tag);
        return this;
    }
    /**
     * description: Attribute quick add
     * features: {'Multi attribute mapper': "Map multiple attriburtes frm an object."}
     */
    attr({ args }) {

        /**
         * description: Loop + Decompose each object for it's key: value pair (a,b)
         */
        args.forEach(([a, b]) => {
            this.src.setAttribute(a, b);
        });
        return this;
    }
}

/**
 * type: inherited
 * inherits: html
 */
export class button extends html {
    constructor() {
        super('button');
    }
}
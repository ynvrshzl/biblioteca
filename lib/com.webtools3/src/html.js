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
        return this;
    }
    /**
     * type: init-protocol
     */
    init() {
        this.src = document.createElement(this.tag);
        return this;
    }
    /** 
     * description: Quick set css class
     *     */
    cssq(c) {
        this.attr({ class: c })
        return this;
    }
    /** 
     * description: Adds a list of CSS Class names to this element
    */
    css_list([c]) {
        this.src.classList.add([...c]);
        return this;
    }
    /**
     * internal class query selector with class normization
     */
    qsmatch(q) {
        /**
         * description: standard dom query
         */
        const query = this.src.querySelector(q);

        /**
         * return the matched query (not 'src') if it is an elemnt of this class.
        */
       if (query instanceof html) {
            return query;
        } else {
            return query
        }
    }
    /**
     * description: Attribute quick add
     * features: {'Multi attribute mapper': "Map multiple attriburtes frm an object."}
     */
    attr(args) {

        /**
         * description: Loop + Decompose each object for it's key: value pair (a,b)
         */
        Object.entries(args).forEach(([a, b]) => {
            this.src.setAttribute(a, b);
        });
        return this;
    }
    /**
     * Text content overwrite/override
     */
    txovr(t) {
        this.src.innerHTML = t;
        return this;
    }
    /**
     * Text content add/increment assign
     */
    txset(t) {
        this.src.innerHTML += t;
        return this;
    }
    /**
     * description: Attach this element to a target element
     */
    attach(to) {
        /**
         * description: chore check for common html/HTML mixups in classes!
         * v: as html.src and HTMLELement are not the same.
         */
        if (to instanceof html) {
            to.src.append(this.src)

        } else {
            to.append(this.src);

        }
        return this;
    }
    /**
     * description: Insert a target element inside this element. An inverstion of 'attach'
     */
    insert(from) {
        if (from instanceof html) {
            this.src.append(from.src)

        } else {
            this.src.append(from);

        }
        return this;
    }
    /**
     * description: Insert multiple sub-elements inside this element
     */
    chain(c) {
        [c].forEach((c) => this.insert(c.src))
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
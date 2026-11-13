/**
 * title: html
 * type: HTML General Element Blueprint
 * description: For building HTML interfaces out of HTML pieces
 */
export class Element {
    /**
     * description: The class constructor accepts a single string 'a' which is the HTML tagname 
     */
    constructor(tag) {
        /**
         * label: "Source HTML Element"
         * description: The internal class HTML Source element reference.
         */
        this.src = HTMLElement;

        /**
         * description: this class auto-initalizes itself upon instantiation.
         */
        this.init(tag);
        return this;
    }
    /**
     * type: init-protocol
     */
    init(tag) {
        this.src = document.createElement(tag);
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
    css_list(...c) {
        this.src.classList.add(...c);
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
        if (query instanceof Element) {
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
    txedit(t) {
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
        if (to instanceof Element) {
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
        if (from instanceof Element) {
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

        c.forEach((c) => this.insert(c.src))
        return this;
    }
    /**
     * description: Safely Empty/clear the element of it's HTML content.
     */
    empt() {
        this.src.replaceChildren();
        return this;
    }
}

/**
 * type: inherited/template
 * inherits: html
 */
export class Button extends Element {
    constructor() {
        super('button');
    }
}

/**
 * type: inherited/template
 * inherits: html
 */
export class Header extends Element {
    constructor(n) {
        /**
         * by heading level (1-6)
         */
        super(`h${n}`);
    }
}
/**
 * example: new img({src: 'https...', alt: 'image'})
 */
export class Image extends Element {
    constructor({ src, alt }) {
        super('img').attr({ src, alt: alt ?? src })
    }
}
/**
 * description: Boundary text Highlitght (\<mark>)
 */
export class Highlight extends Element {
    constructor(a) {
        super('mark').txedit(a)
    }
}
export class Description extends Element {
    constructor(i){
        super('span').txedit(i).css_list('label', 'description', 'small')
    }
}
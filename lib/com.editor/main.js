import { html } from "../com.webtools3/src/html.js";

export class Domain { }
export class Article {
    constructor() { }
    /**
     * description: Set the body of the internal reference (does not output graphics.)
     */
    body(...elements) {
        /**
         * stage: Append each element to the body. element must be of class 'html'
         */
        elements.forEach((e) => e.src)
    }
    /**
     * description: Database properties?
     */
    compile() {

    }
    /**
     * description: Render this Article and Compile it's data into HTML
     */
    render(to) {

    }
}
export class Database { }
export class Route { }

/**
 * description: The 'Cell' is the tiniest object of text data in the eco-system.
 */
export class Cell { }
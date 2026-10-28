/**
 * title: html
 * type: HTML General Element Blueprint
 * description: For building HTML interfaces out of HTML pieces
 */
export class html {
    /**
     * description: The class constructor accepts a single string 'a' which is the HTML tagname 
     */
    constructor(a){
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
        this.init();
    }
    /**
     * type: init-protocol
     */
    init(){

    }
    attr({a}){

    }
}
/**
 * type: inherited
 * inherits: html
 */
export class button extends html {
    constructor(){
        super('button');
    }
}
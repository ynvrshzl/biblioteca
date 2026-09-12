/**
 * The HTML construction interface provides unintuitive interface for working with HTML graphical elements and basic element operations such as join, query, and style.
*/
export class HTML { 
    
    /* From "{E}", an HTML element namespace, and "{T}" it's inner HTML string */
    constructor(tag){
        this.init(tag);
    }

    /* Double-underscore indicates a private-only initializing method of the class. */
    init(T){
	    this.HTMLSourceElement = document.createElement(T);
        return this;
    }
    text(X){
        this.HTMLSourceElement.textContent = X
        return this
    }
    css(x){
        return this;
    }
    inlinecss(a){
       this.HTMLSourceElement.style.cssText = a 
       return this;
    }
    log(){
        return this
    }
    group(k){
        
        k.forEach((i) => {
             if (i instanceof HTML){
                 this.HTMLSourceElement.appendChild(i.HTMLSourceElement)
                 
             } else {
                 
             }
        });
        
        return this;
    }
};
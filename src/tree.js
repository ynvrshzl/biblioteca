/**
 * type: gui-tree
 * description: builds the refernces main tree for application user-interface layout
 */
import { Element } from "../lib/com.webtools3/main.js";

export const tree = {
    /**
     * description: shell
     */
    shell: new Element('main').cssq('application web shell frame layout grid'),
    /**
     * description: 
     */
    header: new Element('header').cssq('component size-[slim] flex horizontal'),
    /**
     * description: 
     */
    nav: new Element('nav').cssq('component size-[slim] flex horizontal'),
    /**
     * description: Main viewport content reading area of application
     */
    stage: new Element('article').cssq('web-component viewport stage'),
    /** 
     * description: footer...
     */
    footer: new Element('footer').cssq('component size-[slim] flex horizontal'),
    /**
     * description: panels
     */
    panels: {
        /**
         * description: panel
         */
        left: new Element('aside').cssq('panel').attr({ role: 'left' }),
        /**
         * description: panel
         */
        right: new Element('aside').cssq('panel collapsed').attr({ role: 'right' }),
    }
}

/**
 * composing tree in order
 */
tree.shell.attach(document.body)
tree.header.attach(tree.shell);
tree.footer.attach(tree.shell);
tree.shell.insert(tree.nav)
tree.shell.insert(tree.stage)
tree.shell.insert(tree.panels.left);
tree.shell.insert(tree.panels.right);
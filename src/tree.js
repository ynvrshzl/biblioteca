/**
 * type: gui-tree
 * description: builds the refernces main tree for application user-interface layout
 */
import { html } from "../lib/com.webtools3/main.js";

export const tree = {
    /**
     * description: shell
     */
    shell: new html('main').cssq('application web shell frame layout grid'),
    /**
     * description: 
     */
    header: new html('section').cssq('component size-[slim] flex horizontal'),
    /**
     * description: 
     */
    nav: new html('nav').cssq('component size-[slim] flex horizontal'),
    /**
     * description: Main viewport content reading area of application
     */
    stage: new html('article').cssq('web-component viewport stage'),
    /** 
     * description: footer...
     */
    footer: new html('footer').cssq('component size-[slim] flex horizontal'),
    /**
     * description: panels
     */
    panels: {
        /**
         * description: panel
         */
        left: new html('aside').cssq('panel').attr({ role: 'left' }),
        /**
         * description: panel
         */
        right: new html('aside').cssq('panel').attr({ role: 'right' }),
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
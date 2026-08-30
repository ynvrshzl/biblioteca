/** 
 * Copyright (C) 2026 Hazl Lzah. 
 * The purpose of this system is: to reduce as much manual input throughout the vault as possible. However, while this meta template is truly 'meta', in that is is a single template routing system, this still requires each file to insert the 'meta.template' into it's markdown body, and sometimes specify the template.
 * 
 * Mechanics: This "meta" template is used as a single "master" template for all pages to source from. The old system relied on specific templates, for each page, which became complex to manually manage. This system provides programatic automation & management. TO automatically generate markdown views for the current file. This is essentially a test for a more complex plugin "meta-alias-sync-templats"
 * Specs: each file, by default, is matched a template by it's file.path. If files need to force templates, pass in  "{ template: <arg>} " to the object arguments. (read morehere)
 * 
 * Future notice: This system will eventually be converted into an obsidian plugin.
*/
/** Get obisidan's API for system vault path */
const base = app.vault.adapter.getBasePath();
/** Alias for 'this' */
const self = dv.current();
/** Sanitze the path of the current file, which is used as the main query metric. */
const path = self.file.folder.toLowerCase();

/**
 * Temporary fix for dataview wrapper, becuase the default dv.el object seems to add extra "<span>" elemets leading to template errors!
 */
dv.el = function (e, t) {
    /**
     * Eventually this will be an external library! All that dv.el does, is doc.createEl + dataview.container
     */
    const el = document.createElement(e);

   // If no "string" is supplied, the function simply does nothing.
    if (!t || t === undefined || t === null || t === "") {
			// ?
    }
    // 
    else if (t instanceof HTMLUnknownElement || t instanceof HTMLElement || t instanceof Node) {
        el.append(t)
    // 
    } else {
        el.innerHTML = t;
    }
    // Add to the dv container
    dv.container.append(el)
    // Always return reference to element!
    return el;
}


/** Dataview queries of files in vault, by */
const pages = dv.pages().where(p => p.file.folder.includes(self.file.path.replace(".md", "")));
/** Task files */
const tfiles = pages.filter(p => p.file.tasks.length > 0);
/** Doc files */
const docfiles = pages.filter(p => p.file.tasks.length === 0);


/**
 * DataviewJS API contains an 'input' object (https://github.io/blacksmith.gu/obsidian) which is the... args from the file which is using this 'meta.template' 
 * When a file supplies a specific set of arguments, this...
 * The purpose of this feature is to provide a method of forcing a specific template, to override default path-seeking behavior (read docs) additional arguments
 * The available options for each include: "template" to force a specific
*/
const features = input;

/**
 * Temporary map for templates... todo: maybe this should simply be using dv.await to assemble composed-templates? Like we're already doing in the tree below!
 */
const templates = {

    /** Basic default template */
    "default": function () {
        dv.el('pre', 'Default template for markdown views');
        dv.el('button', "Menu");
        dv.el('button', "View");
        dv.el('button', "File");
        dv.el('button', "Tasks");
        dv.el('button', "Docs").classList.add('mod-cta');
    },

    /** Testing purposes only! */
    "debug": function(){
        dv.el('pre', 'Debugging template, working!')
    },

    /** Template for project view pages */
    "project": async function () {
        await dv.view("Components/Banner");  
        await dv.view("Components/Buttons");
        await dv.view("Components/Readme");
        await dv.view("Components/Documents");
        await dv.view("Components/Tasks")
        await dv.view("Components/Section", { Text: "Completed", Body: null })
        await dv.view("Components/Section", { Text: "Sub-projects", Body: null, Open: 1})
        await dv.view("Components/Section", { Text: "Stats", Body: dv.el('section', "Contains 3 Files, 5 tasks") })
        await dv.view("Components/Section", { Text: "Footer", Body: null })
    }

}

/** Check if the template provided an input param */
const has = Object.keys(features).length > 0;
/**
 * The plugin version of this system essentially looks for "template.js" in the directory of the current file.
 * This if/else tree is a mock of that system.
 */
if (has) {

    /** Conversion of the 'template' object into arg */
    const arg = features.template;

    // This tree specifically checks if the file has passed a 'template' arg
    try {
        // Try to load the target template based on "template": arg
        templates[arg]()
    } catch (error) {
     
        // Reports errors 
        console.error(error);
    }

// if path is empty
} else if (path === "") {
    dv.el('pre', "Type has no folder, and no template assigned to it.");
    // 
} else if (path === "projects") {
    await templates["project"]()
    // 
} else if (path.includes("tests")) {

    dv.el('pre', "Type is test");
    // 
} else if (path.includes("templates")) {
    dv.el('pre', "Type is template");
    // 
} else {
    dv.el('pre', "Type has no template assigned!");
}

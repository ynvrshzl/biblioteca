/** 
 * Copyright (C) Hazl 
 * Template button generator to help access frontmatter, more effectively.
*/

/** Require electron shell for external commands */
const { shell } = require("electron");

/** alias for 'this' */
const self = dv.current();
/** Yaml frontmatter */
const props = self.file.frontmatter;

/**
 * List of buttons to generate. This sources from properties
*/
const Proplist = [];

/**
 * Parsing each property of the current file, via properties
 */
if (props.github) {
    Proplist.push(
        {
            text: "Open in GitHub",
            classes: "mod-cta",
            onclick: () => { shell.openExternal(self.github); }
        },
    )
} 
if (props.vscode) {
    Proplist.push(
        {
            text: "Open in VS",
            classes: "mod-info",
            onclick: () => { shell.openExternal(self.github); }
        },
    )
}
if (props.system) {
    Proplist.push(
        {
            text: "Open in system",
            onclick: () => { shell.openExternal(self.system); }
        }
    )
} else {
    Proplist.push(
        {
            text: "No actions in file",
            onclick: () => 0
        }
    )
}

// @todo can this use @lib/componenets.js? using our test/research!
function GenerateBTN(properties) {
    const DataviewHTMLButtonElement = dv.el("button");
    DataviewHTMLButtonElement.classList.add(properties.classes);
    DataviewHTMLButtonElement.innerHTML = properties.text;
    DataviewHTMLButtonElement.style.margin = "5px";
    DataviewHTMLButtonElement.onclick = properties.onclick ?? undefined;
    return DataviewHTMLButtonElement
};

// Section Group 
const Body = dv.el('section');
await dv.view("Section", { Text: "Actions", Body: Body, Open: 1 });

// Map through each button on the list and define
Proplist.forEach((Prop) => Body.append(GenerateBTN(Prop)));
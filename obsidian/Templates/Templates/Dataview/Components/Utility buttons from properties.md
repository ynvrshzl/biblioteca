###### Actions 

```dataviewjs 
/** 
 * Copyright (C) Hazl 
 * Template button generator to help access frontmatter, more effectively.
*/
let HEADER;

/** Require electron shell for external commands */
const { shell } = require("electron"); 

/**
 * You can define + configure buttons by modifying the list below.
 * Alternatively, you can define buttons by calling the 'button' function itself
 * e.g., "button({ text: 't', classes: 'mod-cta', e: function(){} });"
*/
const buttons = [ 
	{ 
		text: "CTA Button",  
		classes: "mod-cta",  
		onclick: () => { shell.openExternal(self.github); } 
	}, 
	{ 
		text: "Button", 
		onclick: () => { shell.openExternal(self.system); } 
	},
	{ 
		text: "Button", 
		onclick: () => { shell.openExternal(self.system); }
	},
];


/** alias for 'this' */
const self = dv.current();

function button(properties){ 
	const e = dv.el("button"); 
	e.classList.add(properties.classes);  
	e.innerHTML = properties.text;  
	e.style.margin = "5px"; 
	e.onclick = properties.onclick ?? undefined; 
}; 

// Map through each button on the list and define
buttons.forEach((btn) => button(btn));
```
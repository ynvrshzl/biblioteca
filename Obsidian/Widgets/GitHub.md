<div style='height: 25vh; display: flex; justify-content: center; align-items: center; font-size: 4rem; opacity: 0.1;'>:LiGithub:</div>


```dataviewjs
const statusbar = dv.el('div', null);
statusbar.style.cssText = 'position: fixed; top: 0px; left: 0; width: 100%; background: var(--color-accent-2); color: white; box-shadow: 0 0px 15px var(--shadow); padding: 5px;';

statusbar.append(dv.el('span', 'GitHub: Last fetch 2s ago'))

```

###### Stat

```dataviewjs
dv.table([], [
	[
		'Server', 'GitHub'
	],
	[
		'Last Fetch', '2s ago'
	],
	[
		'URL', ' https://github.com/ynvrshzl/biblioteca '
	],
])
```

###### Changelog
###### Gitlog
```dataviewjs
// this shaould be a plugin babe!
const github = await fetch('https://api.github.com/repos/ynvrshzl/biblioteca/commits');
// json
const json = await github.json();

const widget = dv.el('button', ':LiCommand:');
widget.classList.add('mod-cta');
widget.style.cssText = 'position: fixed; top: 15px; right: 15px; padding: 8px;'

let gap = '10px';


// gui
const container = dv.el('div'); container.style.cssText = `display: flex; flex-direction: column; gap: ${gap}; justify-content: space-between; background-image: linear-gradient(90deg, var(--text-faint) 1px, transparent); background-size: 1px; background-position: .4em; background-repeat: repeat-y; overflow-y: auto; max-height: 250px; background-color: var(--background-primary-alt); border-radius: 15px;)`;


const slider = dv.el('input');
slider.type = 'range'
slider.max = 250;
slider.min = 10;
slider.oninput = (e) => { container.style.gap = e.target.value + "px" };
slider.style.cssText = 'position: fixed; top: 25px; left: 25px;'

container.append(slider, widget);
// gen
const output = Object(json).map((o, i) => {
	const title = dv.el('div');
	title.style.cssText = 'flex-direction: column; display: flex; align-items: start;'
	
	const img = dv.el('img')
	img.src = Object(json)[0].committer.avatar_url;
	img.style.cssText = 'height: 20px; width: 20px; object-fit: cover; vertical-align: middle; margin-inline-end: .7em;';
	
	const truncated = o.commit.message.slice(0, 25) + "...";
	const msg = dv.el('span', truncated);
	msg.style.cssText = 'cursor: pointer; font-size: 0.9em';
	msg.setAttribute('data-tooltip-position', 'right');
	msg.setAttribute('data-tooltip-delay', '300ms');
	msg.setAttribute('aria-label', DateTime.fromISO(o.commit.committer.date).toFormat('EEEE, MMMM dd y, h:mm a'));

	msg.insertAdjacentElement('afterbegin', img);
	
	const flair = dv.el('span', '&nbsp;#' + (json.length - i));
	flair.style.cssText = 'color: var(--text-faint); float: right;';
	msg.insertAdjacentElement('afterbegin', flair)
	
	// const url = dv.el('span', `[Open on GitHub](${o.commit.url})`);
	// url.style.cssText = 'float: right;';
	// msg.insertAdjacentElement('afterbegin', url)
	
	const sub = dv.el('span', Math.round(DateTime.now().diff(DateTime.fromISO(o.commit.committer.date), 'hours').hours) + "h ago");
	
	sub.style.cssText = 'margin-inline-start: 3em; color: var(--text-muted); font-size: 0.7em;';
	
	title.append(msg, sub);
	
	container.append(title)

  });

```



###### Actions 

```dataviewjs 
/** 
 * Copyright (C) Hazl 
 * Template button generator to help access frontmatter, more effectively.
*/
let HEADER;
const container = dv.el('div', null);
container.style.cssText = 'width: 100%; overflow: hidden;'

/** Require electron shell for external commands */
const { shell } = require("electron"); 

/**
 * You can define + configure buttons by modifying the list below.
 * Alternatively, you can define buttons by calling the 'button' function itself
 * e.g., "button({ text: 't', classes: 'mod-cta', e: function(){} });"
*/
const buttons = [ 
	{ 
		text: "Push & Sync",  
		classes: "mod-cta",  
		onclick: () => { new Notice('Pushing changes to GitHub...'); } 
	}, 
		{ 
		text: "Fetch & Update",  
		classes: "mod-",  
		onclick: () => { new Notice('Fetching changes from GitHub...'); } 
	}, 
	{ 
		text: "Open on GitHub", 
		onclick: () => { shell.openExternal(self.system); } 
	},
	{ 
		text: "Open in System", 
		onclick: () => { shell.openExternal(self.system); }
	},
	{ 
		text: "Open in VS", 
		onclick: () => { shell.openExternal(self.system); }
	},
	{ 
		text: "Open in Console", 
		onclick: () => { shell.openExternal(self.system); }
	},	
];


/** alias for 'this' */
const self = dv.current();

function button(properties){ 
	const e = dv.el("button", null); 
	// const description = dv.el('sub', properties.description ?? 'No description');
	
	e.classList.add(properties.classes);  
	e.style.cssText += 'width: 100%; margin-block: 1px; border-radius: 8px !important;';
	e.innerHTML = properties.text;  
	e.onclick = properties.onclick ?? undefined; 
	container.append(e);
	return e;
}; 

// Map through each button on the list and define
buttons.forEach((btn) => button(btn));
```

<div style='height: 25vh; display: flex; justify-content: center; align-items: center; font-size: 4rem; opacity: 0.1;'>:LiGithub:</div>

/**
 * Copyright (C) Hazl 
 * This dataviewjs template generates an image banner, inspired by [notion.so](https://app.notion.so)
 * The image is sourced
 * The orientation of the image can be positioned either left-aligned or left-aligned using the configuration settings provided below. 
*/

const opts = {
	/** Alignment of elements */
	'align': 'left',
	'spacer': '180px',
	height: '200px'
};

/** Main banner image */
const a = dv.el('img');
a.src = dv.current().image ?? "https://placehold.co/5x5/white/white?text=.";
a.style.cssText = `position: absolute; top: 0; left: 0; width: 100%; height: ${opts.height}; object-fit: cover; filter: brightness(0.5); pointer-events: none; z-index: 0; border-radius: 0;`;

/** Spacer */
const i = dv.el('div').style.height = opts.spacer;

/** Thumbnail */
const x = dv.el('img');
x.src = dv.current().image ?? "https://placehold.co/5x5/white/white?text=.";
x.style.cssText = 'border-radius: 50%; position: absolute; top: 45px; right: 25px; width: 120px; height: 120px; object-fit: cover; z-index: 9;';

/** Header */
const h = dv.el('div', dv.current().title ?? dv.current().file.name);
h.style.cssText = 'position: absolute; top: 60px; left: 25px; color: white; font-size: 4rem; font-weight: 600;';

/** Path */
const p = dv.el('span', dv.current().file.folder + "/");
p.style.cssText = 'opacity: .4; font-size: 0.7em; position: absolute; top: 65px; left: 25px; color: white; ';

/** Mini stats */
const xts = dv.el('span', null);
xts.style.cssText = 'opacity: .8; font-size: 0.7em; position: absolute; top: 150px; left: 35px; color: white;';
xts.append([
	`${dv.pages().where(p => p.file.path.includes(dv.current().file.name)).length} Files`,
	`${dv.pages().where(p => p.file.path.includes(dv.current().file.name) && p.file.tasks.length > 0).length} Taskfiles`,
	`${dv.pages().where(p => p.file.path.includes(dv.current().file.name) && p.file.tasks.length > 0).file.tasks.length} Tasks`,
].join(" · "));
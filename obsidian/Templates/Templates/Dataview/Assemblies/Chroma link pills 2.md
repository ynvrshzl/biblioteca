```dataviewjs
const p = dv.pages().where(p => p.file.inlinks.includes(dv.current().file.link) && p.file.tasks.length > 0 && p.file.tasks.filter(t=>!t.completed) !==p.file.tasks.length > 0);

p.map((file, index) => {
	const r = index * 25;
	const hsl = `${r}, 90%, 70%`;
	const string = `background: hsla(${hsl}, 1);`
	const rgb = dv.el('i', '');
	const e = dv.el('small', file.file.link);
	const c = dv.el('small', '');
	c.append(rgb);
	c.append(e);
	
	
	rgb.style.cssText = `border-radius: 50%; margin-inline-end: .5em; ${string} display: inline-block; height:.5em;width:.5em;`;	
	c.style.cssText = `border-radius: 15px; font-size: 0.65em; display: inline-block; color: var(--color-accent-1); --link-color: var(--text-normal);`;
});

dv.el();
```
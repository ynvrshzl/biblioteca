```dataviewjs
const p = dv.pages().where(p => p.file.name.includes('Sample'));

p.map((file, index) => {
	const e = dv.el('small', `T${index} ` + file.file.link);
	e.style.cssText = `font-size: 0.65em; display: inline-block; color: var(--text-faint); --link-color: var(--text-normal);`;
});

dv.el();
```
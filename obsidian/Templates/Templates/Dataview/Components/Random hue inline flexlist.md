```dataviewjs
const p = dv.pages().where(f=>f.file.name.includes('Sample'));

p.map(async (file, index) => {
	const r = index * 255;
	const d = `<span style='height: .7em; width: .7em; border-radius: 50%; display: inline-block; background:  hsl(${r}, 40%, 60%);'></span> `;
	const e = await dv.el('small', d + file.file.link);
	e.style.cssText = `font-size: 0.65em; display: inline-block; --link-color: hsl(${r}, 40%, 60%); background: hsla(${r}, 30%, 20%, 0.5); border-radius: 25px; padding: 5px 10px; margin: 1px;`;
});
```
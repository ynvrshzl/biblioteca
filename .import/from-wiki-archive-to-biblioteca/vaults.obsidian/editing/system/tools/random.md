<div style='height: 25vh; display: flex; justify-content: center; align-items: center; font-size: 4rem; opacity: 0.1;'>:LiDices:</div>

<center style='opacity: 0.2; font-size: 0.8em;'>Random files</center>


```dataviewjs
const pgs = dv.pages();
const r = () => { return Math.random() * pgs.length };
const rpgs = [pgs[r()], pgs[r()], pgs[r()], pgs[r()], pgs[r()]];

dv.table(['Files'], rpgs.map((m) => [
	m.file.link
	+ "<br><sub style='opacity: 0.3'>" + m.file.folder,
	// await dv.io.load(m.file.path)
]));

const rbtn = dv.el('button', 'Reroll');
rbtn.onclick = () => app.commands.commands['dataview:dataview-rebuild-current-view'].callback()

```
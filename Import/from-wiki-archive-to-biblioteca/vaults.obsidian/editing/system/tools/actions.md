```dataviewjs

// @section Function libraries
const bm = (s, c, e) => {
	const b = dv.el('button', s);
	b.classList.add(c ?? 'css');
	// b.style.width = '100%';
	b.style.margin = '5px';
	b.onclick = e;
}
const o = (path) => {
	app.workspace.openLinkText(path, '/', true)
}

bm('Home', 'mod-cta', () => o('Homepage'))
bm('Activity', 0, () => o('activity'));
bm('Check system diagnostics', null, () => o('system-diagnostics'));
bm('Directories', 0, () => o('folders'));
bm('Recent files', 0, () => o('recent files'));
bm('Random files', 0, () => o('random'));
bm('Info inspector panel', 0, () => o('inspector'))
```
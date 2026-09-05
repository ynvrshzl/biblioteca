<div style='height: 25vh; display: flex; justify-content: center; align-items: center; font-size: 4rem; opacity: 0.1;'><span style=' animation: spin 5s linear infinite; vertical-align: middle;'>:LiCog:</span></div>

```dataviewjs
const e = dv.pages().where(p => p.file.folder.includes(''));
const p = dv.el('center', '');

const t = (i) => {
	const e = dv.el('sub', i);
	e.style.fontSize = `0.75em`;
	e.style.opacity = '0.5';
	return e
};

p.appendChild(dv.el('div', 'Wiki Studio'));
p.appendChild(t(`<b>${e.length}</b>` + " wiki files"));
// p.appendChild(dv.el('br'));
// p.appendChild(t('Version 1.0.5'));
```

<br>

```dataviewjs
const b = (s, c, e) => {
	const b = dv.el('button', s);
	b.classList.add(c ?? 'css');
	b.style.width = '100%';
	b.style.marginBlock = '5px';
	b.onclick = () => o(e);
}
const bs = (s, c, e) => {
	const b = dv.el('button', s);
	b.classList.add(c ?? 'css');
	b.style.margin = '2px';
	b.style.boxShadow = 'none';
	b.style.paddingBlock = '20px';
	b.onclick = () => o(e);
}

const o = (path) => {
	app.workspace.openLinkText(path, '/', true)
}


dv.el('sup', 'Tools').style.opacity='.3';
b('Start sampling', 'mod-cta', 'Discovery');
b('Domains', 'mod-destructive', 'Domains');
b('Recent', 0, 'Recent files');
b('Created today', 0, 'files created today');
// b('Edited', 0, 'files modified today');

dv.el('p', '');
dv.el('sup', 'Other').style.opacity='.3';
b('All tools', 0, 'Tools');
b('Export files', 'mod-destructive', 'Export');

// bs(':LiInbox:', 0, 'Inbox');
// bs(':LiDices:', 0, 'Random');
// bs(':LiCog:', 0, 'system-diagnostics');
// bs(':LiClipboardList:', 0, 'words-list-for-use');
```

<sub style='opacity:.4'>Copyright (C) Wiki systems</sub>

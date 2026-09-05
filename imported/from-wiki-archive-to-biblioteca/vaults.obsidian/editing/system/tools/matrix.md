```dataviewjs
const pages = dv.pages().sort((a, b) => b - a.file.mtime).limit(12);

const header = [
	'',
	'Link',
	'Time since last edit',
	'Folder',
	'\\#',
];
const rand = () => "<span style='height: .7em; width: .7em; border-radius: 50%; display: block; background-color: hsl(" + Math.random() * 1 + ", 70%, 70%);'>";

const map = pages.map((m, i) => [
	//	rand(),
	// new DateTime(Date.now() - m.file.mtime),
	//	 '<span style="opacity:.3;">:LiFile:</span> ' + m.file.link,
	':LiFile:',
	m.file.link + "<br><small style='opacity: 0.3'>" + m.file.folder,
	m.file.mtime.toFormat("EEEE, 'at' h:mm a"),
	dv.fileLink(m.file.folder.split('/').pop() + '/readme', 0, m.file.folder.split('/').pop()),
	i + 1,
	
])
const term = dv.table(header, map)

// term.style.fontFamily = 'var(--font-monospace)';
// term.style.position = 'absolute';
// term.style.top = '0';
// term.style.left = '0';
// term.style.width = '100%';
// term.style.height = '100%';
// term.style.padding = '5px';
// term.style.borderRadius = '5px';
// term.style.background = 'var(--background-secondary-alt)';
// term.style.border = '1px solid';
// term.focus();
```
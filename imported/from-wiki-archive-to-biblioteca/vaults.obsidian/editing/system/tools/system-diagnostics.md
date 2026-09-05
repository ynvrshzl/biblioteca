---
cssclasses:
  - cards
---
%% <div style='height: 25vh; display: flex; justify-content: center; align-items: center; font-size: 4rem; opacity: 0.1;'>:LiCog:</div> %%

```dataviewjs
const xbtn=dv.el('button', 'Export files');
xbtn.classList.add('mod-cta');
xbtn.onclick = function(){
	app.workspace.openLinkText('export/readme', '/', 1); 
	new Notice('Export these files to [wiki](file:///home/hazl/Wiki)...');
}

dv.table(0, [
	[
		`<b>${dv.pages().where(p => p.file.folder.includes('export')).length}`,
		'Files ready for export',
		xbtn
	],
	[`<b>${dv.pages().where(p => p.file.folder.includes('edit')).length}`,
	'Files you are currently editing.',
	`<button>Open</button>`,
	],
])
```
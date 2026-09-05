<div style='height: 25vh; display: flex; justify-content: center; align-items: center; font-size: 4rem; opacity: 0.1;'>:LiBadgeInfo:</div>

```dataviewjs

/** 
 * copyright (c) hazl
 *
 * this script will 
 * listen for active file
 * provide an alias template view for the nearest folder that includes a 'readme.md' file
 * this helps keep context. 
 * like an inspector info panel
*/
let header;


/** main function */
function main(){
	clearInterval(i);
	setInterval(i, ri);
	console.log("Running info panel...")
}

/** refresh interval */
const ri = 1000;

/** */
const f = () => { return app.workspace.lastActiveFile };

/** output */
const container = dv.el('section', '');
const table = dv.el('table', '');
const tbody = dv.el('tbody', '');

/* g */
container.append(table);
table.append(tbody);
// container.innerHTML = `<div style='display: flex; justify-content: center; align-items: center; text-align: center; width: 100%; opacity: 0.1;'>Loading...</div>`

let time = 0;
/** tr */
const row = (cells) => {
	const tr = dv.el('tr', '');
	tbody.append(tr);
	cells.map(m => {
			const td = dv.el('td', m);
			tr.append(td);
		}
	);
};

const condition = () => f().path || f() !== undefined || f() !==  null || f().path !==  null; 
	
/** main interval function to repeat */
const i = () => {

	if (f().path){
		try {
			const x = f().path;
			const t = dv.page(x);
			
			tbody.innerHTML = '';
		row(['Elapsed', `${time++}s`])
		row(['File', dv.page(f().path).file.link ]);
		row(['Context', dv.page(f().path).file.folder.split('/').slice(0, 2).join('/')]);
		row(['Context (?)', `[[${dv.page(f().path).file.folder.split('/').slice(-1)}/README|${dv.page(f().path).file.folder.split('/').slice(-1)}]]`]);
		row(['Nearest ancestors', dv.pages().where(f => f.file.folder.includes(t.file.folder)).map(x => x.file.link)])
		// row(['Folder', dv.page(f().path).file.folder ]);
		} catch(err) {
			new Notice(err);
		}
	}
}

main();

/*
app.vault.on('modify', () => {
	i()
});


const try2 = function(){
	// Get the active markdown view
	const mdView = this.app.workspace.getActiveViewOfType(f());
	
	if (!mdView) {
		new Notice("No active markdown file.");
		return;
	}
	
	// Get the file object
	const file = mdView.file;
	if (file instanceof TFile && file.extension === "md") {
		new Notice(`Yes, "${file.name}" is a markdown file.`);
	} else {
		new Notice("Active file is not markdown.");
	}
}


*/
```

- [x] add improved context-based file explorer  for current file. e.g. showing a list of files in the current file's folder
- [ ] add header of context
- [ ] this should probably be a sidebar tab plugin!
- [ ] use improved obsidian.vault.on('modify') instead of setinterval
- [ ] read api docs of this panel is useful.
- [ ] this basically creates an auto-alias template for the current file.
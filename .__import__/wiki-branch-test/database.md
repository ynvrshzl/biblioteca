---
description: "This is a temporary markdown + javascript script (lol) to generate a prototype database.json mock for the wiki. Using javascript (dataviewjs + obsidian) to generate internal working database. temporary!"
---

```dataviewjs
const folder = 'public';
const files = dv.pages().where(p => p.file.folder.includes(folder));

const json = JSON.stringify(files.values.map((f, i) => {
	const p = dv.page(f.file.path);
	
	/** 
	 * Note, dataview has it's quirks, so it doesn't render obsidian outlinks/inlinks properly... definitely requires a real database soon! */
	const outlinks = [];
	outlinks.push(p.file.outlinks.map(o => dv.page(o).file.path));
	
	const inlinks = [];
	outlinks.push(p.file.inlinks.map(o => dv.page(o).file.path));
	
	return {
		"path": f.file.path, 
		"name": f.file.name, 
		"frontmatter": f.file.frontmatter,
		"mtime": f.file.mtime,
		"ctime": f.file.ctime,
		"outlinks": [],
		"inlinks": [],
		}
	}
), 1, 1);

new Notice(`Generating database...`);
new Notice(`From "${folder}/" showing ${files.length} files`)

dv.el("pre", `
\`\`\`json
${json}
\`\`\`
`
)

dv.el("pre", `
${files.map(f => f.file.link).join("\n")}
`);
```
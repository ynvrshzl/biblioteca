Test: Using dataviewjs to generate a JSON database. Instead of implementing a full file-system watcher + indexer + edge-cases.

We are basically testing if we should use this in the wiki system itself? Obsidian has a built-in database indexer... up to you babe!


```dataviewjs
const files = dv.pages().where(p => p.file.folder.includes('export'));

const json = JSON.stringify(files.values.map((f, i) => {
	return {
		"path": f.file.path, 
		"name": f.file.name, 
		"frontmatter": f.file.frontmatter,
		"mtime": f.file.mtime,
		"ctime": f.file.ctime,
		"outlinks": f.file.outlinks,
		"inlinks": f.file.inlinks
		}
	}
), 1, 1);

new Notice(`Generating database...`);
new Notice(`From 'export/' showing ${files.length} files`)

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

Should this have the ability to write to a file? For now you can copy-paste the JSON from the codeblock to a file, but eventually, an automated process would be good!


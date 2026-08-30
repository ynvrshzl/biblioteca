<div style='height: 25vh; display: flex; justify-content: center; align-items: center; font-size: 4rem; opacity: 0.1;'><span style=''>:LiGlasses:</span></div>

```dataviewjs
const p = dv.pages().sort((a, b) => b - a.file.mtime).limit(1);

dv.el('p', "Alias template view");
dv.el('p', { 
	"File": p.file.link,
	"Topic": p.file.folder,
	"Path": p.file.folder,
})
```
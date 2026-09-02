---
icon: ":LiClock2:"
cssclasses:
  - tiny-imgs
---

<div style='height: 25vh; display: flex; justify-content: center; align-items: center; font-size: 4rem; opacity: 0.1;'>:LiHistory:</div>

###### Recent Files

```dataviewjs
const pages = dv.pages().sort((a, b) => b - a.file.mtime).limit(24);
 const map = pages.map((p, i) => [ `<span style='color: var(--color-accent);'>\\#${i+1}</span>`, p.file.folder === "" ? "<span style='color: var(--text-faint);'>Empty</span>" : p.file.folder.split('/').slice(2, 3) + `<br><sup style='opacity: 0.5'>${dv.fileLink(String(p.file.folder.split('/').slice(2, 3) + "/README.md"), false, 'Namespace')}</sup>`, p.file.folder.split('/').slice(2, 3) + "/... " + dv.fileLink(p.file.path, false, p.file.name + ".md") + `<br><sup style='margin-inline-start: 1.2rem; opacity: 0.35'>${(p.file.folder === "" ? "File has no folder..." : p.file.folder)}</sup>`, `<span style='color: var(--color-green);'>+${Math.round(DateTime.now().diff(DateTime.fromISO(p.file.mtime), 'hours').hours)}h ago</span>`, Math.round(p.file.size / 1024) + " MB"]);
 dv.table(['\\#', 'Namespace', 'File', 'Time', 'Size'], map);
```


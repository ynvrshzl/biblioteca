---
icon: ":LiClock2:"
cssclasses:
  - tiny-imgs
---

<div style='height: 25vh; display: flex; justify-content: center; align-items: center; font-size: 4rem; opacity: 0.1;'>:LiHistory:</div>

###### Activity
```dataview
table without id

"<span style='color: var(--color-green);'>+" + string(slice(split(string(dur(date(now) - date(file.mtime))), ","), 0, 1)) + " ago" +"<br>" + "<sup style='opacity: .5'>" + dateformat(file.mday, "EEEE") as "Modified",
 "<span style='--link-color: var(--text-normal);'>" + file.link +  "<br>" + "<small style='opacity: .4'>" + file.folder  as "File"




flatten "<span style=''>M</span>" as flair
sort file.mtime desc
limit 12
```

###### Recent Files

```dataviewjs
const pages = dv.pages().sort((a, b) => b - a.file.mtime).limit(24);
 const map = pages.map((p, i) => [p.file.link + `<br><sup aria-label='About this file\n&nbsp;\n Filename: "${p.file.name}.md"\n Outlinks: ${p.file.outlinks.length}\n Cross-references: ${p.file.inlinks.length}\n Domain: "${(p.file.folder).split('/').slice(0, 1)}"\n Namespace: "${(p.file.folder).split('/').slice(1, 2)}"\n  Category: "${(p.file.folder).split('/').slice(2,3)}"\n  Modified: ${Math.round(DateTime.now().diff(DateTime.fromISO(p.file.mtime), 'hours').hours)}h ago\n Size: ${Math.round(p.file.size / 1024) + " MB"} ' data-tooltip-position='right' data-tooltip-delay='300ms' style='cursor: pointer; opacity: 0.5'>:LiBadgeInfo: About this file</sup>`, i]);
 dv.table([], map)
```


###### Recent Files

```dataviewjs
const pages = dv.pages().sort((a, b) => b - a.file.mtime).limit(24);
 const map = pages.map((p, i) => [ `<span style='color: var(--color-accent);'>\\#${i+1}</span>`, p.file.folder === "" ? "<span style='color: var(--text-faint);'>Empty</span>" : p.file.folder.split('/').slice(2, 3) + `<br><sup style='opacity: 0.5'>${dv.fileLink(String(p.file.folder.split('/').slice(2, 3) + "/README.md"), false, 'Namespace')}</sup>`, p.file.folder.split('/').slice(2, 3) + "/... " + dv.fileLink(p.file.path, false, p.file.name + ".md") + `<br><sup style='margin-inline-start: 1.2rem; opacity: 0.35'>${(p.file.folder === "" ? "File has no folder..." : p.file.folder)}</sup>`, `<span style='color: var(--color-green);'>+${Math.round(DateTime.now().diff(DateTime.fromISO(p.file.mtime), 'hours').hours)}h ago</span>`, Math.round(p.file.size / 1024) + " MB"]);
 dv.table(['\\#', 'Namespace', 'File', 'Time', 'Size'], map);
```


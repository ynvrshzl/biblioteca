---
cssclasses:
  - cards
---

```dataviewjs
const p = dv.pages().where(p => 
p.file.folder.includes('export')).map((_) => [_.file.link, _.file.folder]);

const b = dv.el('button', `Open "wiki" in system`);
const b2 = dv.el('button', 'Open "/export" in system');
b.classList.add('mod-cta');
b.onclick = () => window.open("file:///home/hazl/Wiki/", "_blank");
b2.onclick = () => window.open("file:///home/hazl/Wiki/@editing/export", "_blank");

const n =dv.el('span', `+${p.length}`);
n.style.color = 'var(--color-blue)';

dv.table(0, [
	[n, `Files ready for export in ['export/'](file:///)`],
	['Actions', b, b2]
]);

// dv.table(0, p);
```
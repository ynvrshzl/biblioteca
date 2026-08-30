
```dataviewjs
/** Tasks component */
/** Files */
const a = dv.current().file.outlinks;

// shows as a continuity inline timeline of a -> b -> c
a.map((a, b) => dv.el('span', dv.fileLink(dv.page(a).file.path, false, b + 1)  + " -> "))

/** Map */
const b = a.map((a, b) => [ 
	b, 
	dv.page(a).file.link + "<br><sup style='opacity: 0.5'>" + dv.page(a).file.folder.split("/").slice(2).join("/") + "</sup>",
	 dv.page(a).description ?? "<span style='opacity: 0.2'>No description for task</span>",
	 // "<progress max='" + (dv.page(a).file.tasks.length) + "' value = '" + (dv.page(a).file.tasks.filter(t=>t.complete).length) + "'></progress>",
	dv.page(a).file.tasks.length === dv.page(a).file.tasks.filter(t=>t.complete).length ? "<input type='checkbox' checked/>" : "<input type='checkbox'/>"
])

dv.table(['\\#', 'Task', 'Description', 
// 'Progress', 
'?'], b) 

```
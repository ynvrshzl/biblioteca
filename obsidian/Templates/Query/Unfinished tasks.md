---
description: Helps manage files with tasks from across our Vault.
cssclasses:
  - cards
---


```dataview
table without id
"Folder <b>" + F,
"<progress max='" + length(sum(map(rows, (m) => m.file.tasks))) + "' value = '" + length(sum(filter(map(rows, (m) => m), (t) => !t.completed))) + "'></progress>" as "Progress", 
length(sum(map(rows, (m) => m.file.tasks))) + " tasks of " + length(sum(filter(map(rows, (m) => m), (t) => !t.completed))) + " incomplete, found in " + length(rows) + " files" as "C"

where length(filter(file.tasks, (t)=>!t.completed)) > 0
flatten file.folder
group by file.folder as F
sort length(sum(map(rows, (m) => m.file.tasks))) desc

```
%%

%%

```dataview
table without id
file.link  + "<br>" + "<small style='opacity: .3'>"+ file.folder as "File", 
length(filter(file.tasks, (t)=>!t.completed)) as "<input type='checkbox'/>"

where length(filter(file.tasks, (t)=>!t.completed)) > 0

// sort startswith(file.folder, "2") asc
sort length(filter(file.tasks, (t)=>!t.completed)) desc
```
---
cssclasses:
  - cards
---

```dataview
table without id 

choice(length(filter(file.tasks, (t) => t.completed)) = length(file.tasks),"<input type=checkbox checked>", "<input type=checkbox>") as "<input type=checkbox>",

file.link,

"<progress max='" + length(file.tasks) + "' value = '" + length(filter(file.tasks, (t) => t.completed)) + "'></progress>" as "Progress", 

default(description, length(file.tasks) + " steps") as "Overview"
where icontains(file.folder, replace(this.file.path, ".md", "")) and file != this.file

sort length(filter(file.tasks, (t) => t.completed)) / length(file.tasks) * 100 desc
```
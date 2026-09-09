---
links:
  - "[[Obsidian/Templates/Templates/mock]]"
cssclasses:
  - cardsx
---

<!--- @template:dataview--->

```dataview
table without id 
":LiBox:" as ":LiBox:", file.link + "<br><sup style='opacity: 0.5'>" + file.folder as "Item", 
"<progress max='" + length(file.tasks) + "' value = '" + length(filter(file.tasks, (t) => t.completed)) + "'></progress>" as "Progress",
choice(length(filter(file.tasks, (t) => t.completed)) != length(file.tasks), "<input type='checkbox'/>", "<input type='checkbox' checked/>") as "C?"

where  contains(file.inlinks, this.file.link)
sort length(filter(file.tasks, (t) => t.completed)) desc
```
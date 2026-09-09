---
links:
  - "[[Obsidian/Templates/Templates/mock]]"
cssclasses:
  - cards
---

###### Current task from each

```dataview
// "<small>This office tool shows the first task or file from " + link(file.path, "core.md") + " file of " + link(file.folder, slice(split(file.folder, "/"), -1)[0])
// "<small>First task from <u>" + slice(split(file.folder, "/"), 1),

table without id

"&nbsp;<div style='position: relative;'><img style='filter: brightness(.4); background: hsl(" + truncate(string(hash(file.folder, 1)), 3, "") + ", 70%, 60%);'>" 
+ "<div style='height: 100px; width: 100px; position: absolute; right: 0; border-radius: 25%; overflow:hidden; transform: translate(0%, -100px) scale(.7); background: hsl(" + truncate(string(hash(file.folder, 1)), 3, "") + ", 70%, 60%);'>",

x + slice(split(file.folder, "/"), 1) + "<span style='height: .7em; width: .7em; border-radius: 50%; display: inline-block; float: right; background-color: hsl(" + truncate(string(hash(file.folder, 1)), 3, "") + ", 70%, 60%);'>",
"<q style='color: var(--text-muted)'>" + replace(replace(slice(filter(file.tasks, (t) => !t.completed), 0, 1).text, "[[", ""), "]]", ""),


"<progress max='" + length(file.tasks) + "' value = '" + length(filter(file.tasks, (t) => t.completed)) + "'></progress>" as "Progress",

"<small style='display: flex; justify-content: space-between; --link-color: var(--text-faint);'>" 
+ link(file.path, ":LiCog: Open core")  
+ link(slice(filter(file.tasks, (t) => !t.completed), 0, 1).outlinks[0], ":LiFileCheck: Open task")
+ link(slice(split(file.folder, "/"), 1), ":LiLayers: Project"),
  
"<input type='checkbox'>"
flatten "<span style='color: hsl(" + truncate(string(hash(file.folder, 1)), 3, "") + ", 70%, 60%);'>" as x

where 
filter(map(this.file.outlinks, (m) => m), (f)=> icontains(file.path, string(replace(meta(f).path, ".md", "") + "/core.md")))

```
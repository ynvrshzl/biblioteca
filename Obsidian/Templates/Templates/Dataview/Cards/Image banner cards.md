---
links:
  - "[[mock]]"
cssclasses:
  - cards
---

###### View as cards

```dataview
// choice(length(filter(file.tasks, (t) => t.completed)) = length(file.tasks),"<input type=checkbox checked>", "<input type=checkbox>") as "<input type=checkbox>",
// "<span style='height: 1em; width: 1em; border-radius: 50%; display: block; background-color: hsl(" + truncate(string(hash(file.folder, 1)), 2, "") + ", 70%, 50%);'>",
// "<small style='--link-color: var(--color-blue)'>In: <a></a>" + join(map(reverse(slice(split(file.folder, "/"), 1)), (f) => link(f)), " -> ") as "Quest",


table without id

"&nbsp;<div style='position: relative;'><div style='filter: brightness(.4)'/>!" + elink(default(image, reverse(link(slice(split(file.folder, "/"), 1)).image)[0])) + "</div>"
+ "<div style='width: 100px; position: absolute; right: 0; border-radius: 25%; overflow:hidden; transform: translate(0%, -100px) scale(.7)'>!" + elink(default(image, reverse(link(slice(split(file.folder, "/"), 1)).image)[0]))
,
file.link,
 file.folder,
"<small>"  + default(description, reverse(link(slice(split(file.folder, "/"), 0)).description)[0])

where contains(file.inlinks, this.file.link)
sort length(filter(file.tasks, (t) => t.completed)) = length(file.tasks)  
```


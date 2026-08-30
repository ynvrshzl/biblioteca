---
cssclasses:
  - cards
---

```dataview
table without id
"!"+elink(default(image, "https://placehold.co/2x2/lightgray/lightgray")),
"<span style='color: var(--text-normal);'>" + slice(split(file.folder, "/"), -1) + "<small style='float: right; color: var(--color-blue); background-color: color-mix(in srgb, var(--color-blue) 15%, transparent); padding: 5px 10px; border-radius: 15px;'>F</small>",
default(description, "No description"), 
"<small style='display: inline-block;  --link-color: white; background: var(--color-blue); border-radius: 15px; padding: 5px 10px; float: right;'>" + link(file.path, "Open") + "</small>"
from "Public" 
where 
length(split(file.folder, "/")) = length(split(this.file.folder, "/")) + 1 and any(map(["README"], (m) => icontains(file.name, m)))
```
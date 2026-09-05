---
icon: ":LiTrafficCone:"
links:
  - "[[mock|mock]]"
cssclasses:
  - cards
---

`="<div style='height: 25vh; display: flex; justify-content: center; align-items: center; font-size: 4rem; opacity: 0.1;'>" + this.icon + "</div>"`


```dataview
table without id 
"<div style='font-size: 0.7em;display: inline-block; border-radius: 25px; padding: 5px 10px; background-color: color-mix(in srgb, var(--color-blue) 10%, transparent); color: var(--color-blue); --text-muted: var(--color-blue);'>" + CLASS,
"",
"<div style='display: flex; flex-direction: row; justify-content: space-between;'><span style='color:var(--text-normal); "  + "'>" + file.name + "</span><span style='float: right; height: .6em; width: .6em; border-radius: 50%; display: inline-block; " + BGP + "'>",
default(description, file.name),
"<span style='display: inline-block; float: right; border-radius: 25px; padding: 5px 10px; box-shadow: 0 1px 5px var(--shadow); --link-color: var(--text-muted);'>" + link(file.path, "Open") + "</span>" 

flatten "Class" as CLASS
flatten "hsl(" + truncate(string(hash(file.name, 3)), 3, "") + ", 50%, 60%);" as RANDRGB
flatten "background-color: " + RANDRGB as BGP
flatten "color: " + RANDRGB as SGP

where contains(file.inlinks, this.file.link) 
```
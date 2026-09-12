---
icon: ":LiRefreshCcw:"
links:
  - "[[Obsidian/Templates/Templates/mock|mock]]"
cssclasses:
  - cards
---

`="<div style='height: 25vh; display: flex; justify-content: center; align-items: center; font-size: 4rem; opacity: 0.1;'>" + this.icon + "</div>"`


```dataview
table without id 
 CLASS,
"",  
"<div style='display: flex; flex-direction: row; justify-content: space-between;'><span style='color:var(--text-normal); "  + "'>" + file.name + "</span><span style='float: right; height: .6em; width: .6em; border-radius: 50%; display: inline-block; " + BGP + "'>",
default(description, file.name),
"<span style='display: inline-block; float: right; border-radius: 25px; padding: 5px 10px; background: var(--color-base-30); --link-color: var(--text-muted);'>" + link(file.path, "Open") + "</span>" 


flatten "<span style='color: var(--color-green);'>+" + string(slice(split(string(dur(date(now) - date(file.mtime))), ","), 0, 1)) + " ago" + "<br>" + "<small style='opacity: .3'>" + file.mtime  as CLASS
flatten "hsl(" + truncate(string(hash(file.name, 3)), 3, "") + ", 50%, 60%);" as RANDRGB
flatten "background-color: " + RANDRGB as BGP
flatten "color: " + RANDRGB as SGP

sort file.mtime desc
limit 7
```
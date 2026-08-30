---
links:
  - "[[mock]]"
cssclasses:
  - cards
---

```dataview
// "https://placehold.co/100x100?text=Cover%20is%20missing!"
table without id 
"!" + elink(default(image, "https://img.shields.io/badge/--white"))
, 
"<span style='display: inline-block; border-radius: 25px; padding: 5px 10px; --text-faint: white; --link-color: white; background-color: hsla(" + truncate(string(hash(file.name, 3)), 3, "") + ", 70%, 50%);'>" + link(file.path, "Open") + "</span>" 

+ choice(vscode, 
  
  "<span style='display: inline-block; border-radius: 25px; padding: 5px 10px; --text-faint: white; --link-color: white; background-color: var(--color-blue); --link-external-color: white;)'>" + elink(vscode, "Open in VS") + "</span>", "")
,
"&nbsp;<div style='display: flex; flex-direction: row; justify-content: space-between;'><span style='color: hsl(" + truncate(string(hash(file.name, 3)), 3, "") + ", 70%, 50%);'>" + file.name + "</span><span style='height: 1em; width: 1em; border-radius: 50%; display: inline-block; background-color: hsl(" + truncate(string(hash(file.name, 3)), 3, "") + ", 70%, 50%);'>"
,
default(description, file.name)
where contains(file.inlinks, this.file.link)
sort length(filter(file.tasks, (t) => t.completed)) = length(file.tasks)  
```
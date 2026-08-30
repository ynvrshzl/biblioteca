---
icon: ":LiClock2:"
cssclasses:
---

###### Folders
```dataview
list without id
"<small>Modified " + file.link + "<br>"
+ "<sup style='opacity: .4'>" + file.folder + "</sup>"
+ "<span style='float: right;'>" 
  + "<span style='color: var(--color-green);'>+" + string(slice(split(string(dur(date(now) - date(file.mtime))), ","), 0, 1)) + " ago"
+"<br>"
+ "<sup style='opacity: .5'>" + dateformat(file.mtime, "h:mm a")
sort file.mtime desc
flatten file.folder as f
limit 12
```
###### Table
```dataview
// file.size + "b" as "Size",
table without id

"<span style='color: var(--text-muted);'>:LiFile:" as "",

file.link+ "<br>"
+ "<small style='opacity: .4'>" + file.folder as "File",
  "<span style='color: var(--color-green);'>+" + string(slice(split(string(dur(date(now) - date(file.mtime))), ","), 0, 1)) + " ago"
+"<br>"
+ "<sup style='opacity: .5'>" + dateformat(file.mday, "EEEE")
as "Modified"

flatten "<span style=''>M</span>" as flair
sort file.mtime desc
limit 12
```

```dataview
// file.size + "b" as "Size",
table without id

"<span style='color: var(--color-green);'>+" + string(slice(split(string(dur(date(now) - date(file.mtime))), ","), 0, 1)) + " ago"
+"<br>"
+ "<sup style='opacity: .5'>" + dateformat(file.mday, "EEEE")
as "Modified",


"<q>"+file.name + ".md</q>"+ "<br>"
+ "<small style='opacity: .4'>" + file.folder as "File",

"<span style='background: var(--color-green); --link-color: white; padding: 5px 10px; border-radius: 25px; '>" + link(file.path, "Open") as "Link of file"

flatten "<span style=''>M</span>" as flair
sort file.mtime desc
limit 12
```

<button style='float: right; font-size: 0.8rem; display: inline-block; border-radius: 25px; padding: 5px 10px; box-shadow: 0 1px 5px var(--shadow); --link-color: var(--text-muted);'>+25 More</button>
---
cssclasses:
---
```dataview
table without id

file.link + "<br>" + "<small style='opacity: .3'>"+file.folder as "Files, Recently modified"
,
"<span style='color: var(--color-green);'>+" + string(slice(split(string(dur(date(now) - date(file.mtime))), ","), 0, 1)) + " ago"
+ "<br>"
+ "<small style='opacity: .3'>" + file.mtime
as "Modified"
sort file.mtime desc
limit 5
```

```dataview
table without id "<small>Click to [[Activity|open full panel]]" as "+25 More" where file = this.file
```

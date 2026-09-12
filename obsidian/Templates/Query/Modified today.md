---
cssclasses:
---
###### Folders
```dataview
table without id
":LiFolders:" as "",
f + "<details style='font-size: 0.8em; color: var(--text-faint);'><summary>Changed Files</summary>" + rows.file.link +"</details><details style='font-size: 0.8em; color: var(--text-faint);'><summary >FLink</summary>" + link(f) as "Folder",
(length(rows)) as ":LiHash:",
"<span style='color: var(--color-green)'>+" + string(slice(split(string(dur(date(now) - date(max(rows.file.mtime)))), ","), 0, 1)) + " ago" + "<br>" + "<small style='opacity: .5'>" + dateformat(max(rows.file.mtime), "h:mm a") as "Modified time"

where file.mday = date(today)
sort file.mtime desc
flatten file.folder as f
group by f
```

###### Files
```dataview
table without id
":LiFile:" as "",
file.link + "<br>" + "<small style='opacity: .2'>"+ choice(file.folder = "", "~/", file.folder) as "File"
,
string(slice(split(string(dur(date(now) - date(file.mtime))), ","), 0, 1)) + " ago" + "<br>" + "<small style='opacity: .2'>" + dateformat(file.mtime, "h:mm a") as "Time"

where file.mday = date(today)
sort file.mtime desc
```
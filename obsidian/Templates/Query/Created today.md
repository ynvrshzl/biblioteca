---
cssclasses:
---
```dataview
table without id

file.link + "<br>" + "<small style='opacity: .2'>"+ choice(file.folder = "", "~/", file.folder) as "File"
,
string(slice(split(string(dur(date(now) - date(file.ctime))), ","), 0, 1)) + " ago" + "<br>" + "<small style='opacity: .2'>" + dateformat(file.ctime, "h:mm a") as "Time"

where file.cday = date(today)
sort file.ctime desc
```
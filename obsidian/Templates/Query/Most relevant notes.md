```dataview
table
file.cday as "Created",
file.mday as "Modified",
slice(split(string(dur(date(file.mtime) - date(file.ctime))), ","), 0,1) as "Distance $(d)$",
durationformat(date(file.mtime) - date(file.ctime), "s") as "Relevance $(r)$"
sort dur(date(file.mtime) - date(file.ctime)) desc
limit 12
```
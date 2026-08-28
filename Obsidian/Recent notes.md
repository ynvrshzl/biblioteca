###### Recent Files

```dataview
table without id

 "<span style='--link-color: var(--text-normal);'>" + file.link + 
 "<br>" + "<small style='opacity: .4'>" + file.folder  as "File",

"<span style='color: var(--color-green);'>+" + string(slice(split(string(dur(date(now) - date(file.mtime))), ","), 0, 1)) + " ago"
+"<br>"
+ "<sup style='opacity: .5'>" + dateformat(file.mday, "EEEE")
as "Modified"



flatten "<span style=''>M</span>" as flair
sort file.mtime desc
limit 12
```
###### Recent Files (List)

```dataview
list 
map(rows.file.link, (m) => "<small style='--link-color: var(--color-green)'>" + m)

flatten file.folder as f
flatten "<span style='color: var(--color-green); float: right;'>M</span>" as flair
flatten "<small style='color: var(--text-faintx);'>" as sm
sort file.mtime desc
group by sm + f + "/" + flair
limit 12
```
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
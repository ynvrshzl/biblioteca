
```dataview
table without id
link(rows.file.folder) as "Recent spaces",
length(rows.file) + " Files" as "Length"

sort file.mtime desc
flatten file.folder as g
limit 7
group by g
```
files that haven't been accessed in a long time, are considered 'space-junk' and await either archival, or editing!

a stack of files will eventually become overwhelming, so let's consider grouping via folder hiearchy

- [ ] todo: this would be very useful if it shows an accumulated value per folder, of the most recently modified files. which shows which large-level topics are actively being modified!

# Oldest file per directory
```dataview
table
string(slice(split(string(dur(date(now) - min(map(rows, (m) => m.file.mtime)))), ","), 0, 1)) + " ago" as "Oldest time", (map(rows, (m) => m.file.link))[0] as "Oldest file"

sort file.mtime asc
flatten file.folder as Directoy
group by Directoy
```

# Salience tool
Oldest files in vault

```dataview
table without id file.link + "<br><sup style='color: var(--text-faint);'>" + file.folder as "Object",

"<span style='color: var(--color-green);'>+" + string(round(dur(date(now) - file.mtime).days) + "d ago") as "Age"
sort file.mtime asc limit 25
```
<center style='opacity: 0.3;'>Files modified today</center>

```dataview
list without id file.link + "<br><sup style='--link-color: var(--text-faint);'>" + join(reverse(map(split(file.folder, "/"), (m) => link(m + "/readme", m))), " . ") where file.mday = date(today) sort file.mtime desc
```

%%

Basic list, only shows file names, which can be difficult to visually parse.
```dataview
list where file.mday = date(today) sort file.mtime desc
```

```dataview
list without id link(file.path, file.path) where file.mday = date(today) sort file.mtime desc
```

Table has been commented out, as it is too verbose.

```dataview
table without id file.link as "Notes", dateformat(file.mtime, "h:mm a") as "Modified" where file.mday = date(today) sort file.mtime desc
```
```dataview
table without id
split(string(dur(date(now) - file.mtime)), ",")[0] + " ago" + "<br><sup style='opacity: 0.5'>" + file.mtime + "</sup>" as "Edited",
file.link + "<br><sup style='opacity: 0.4'>in " + file.folder + "</sup>" as "File"
sort file.mtime desc
limit 12
```

%%
```dataview
list without id
file.link +  "<small style='font-size: 0.7em; color: var(--text-faint); --link-color: var(--color-green);'> in " + link(file.folder) + "</sup>"
where 1 < 2
sort file.mtime desc
limit 12
```
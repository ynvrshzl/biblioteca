---
description: "This tool aims to turn the filesystem into a more tangible interface, using the power of queries. (maybe an obsidian plugin too...)"
---


```dataview
table without id

":LiLandmark:" as "",

link(g + "/readme", g) as "Topics: Folders as READMEs",

sum(length(rows.file)) as "Files", 

link(slice(split(rows[0].file.folder, "/"), 0, 1) + "/readme", slice(split(rows[0].file.folder, "/"), 0, 1))[0] as "Upper depth (1)",

choice(icontains(meta(link(g + "/readme")).path, ".md"), 
":LiCheck:", "")
 as ":LiBookCheck:"

flatten slice(split(file.folder, "/"), -1)[0] as g
group by g
sort sum(length(rows.file)) desc
```


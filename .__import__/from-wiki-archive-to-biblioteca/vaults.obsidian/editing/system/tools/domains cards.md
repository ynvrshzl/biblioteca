---
description: This tool aims to turn the filesystem into a more tangible interface, using the power of queries. (maybe an obsidian plugin too...)
cssclasses:
  - cards
---


```dataview
table without id

":LiBox:" as "",

link(g + "/readme", g) as "Topics: Folders as READMEs",

sum(length(rows.file)) + " Files", 


choice(icontains(meta(link(g + "/readme")).path, ".md"), 
link(g + "/readme", ":LiBookMarked:"), "")
 as ":LiBookCheck:"

flatten slice(split(file.folder, "/"), -1)[0] as g
group by g
sort sum(length(rows.file)) desc
```


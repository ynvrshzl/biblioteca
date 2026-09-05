<div style='height: 25vh; display: flex; justify-content: center; align-items: center; font-size: 4rem; opacity: 0.1;'>:LiActivity:</div>

<center style='opacity: 0.3; font-size: 0.8em;'>Activity</center>

```dataview
table without id 
"!"+elink("https://avatars.githubusercontent.com/u/205842815?v=4&size=32") as "User",
"<div style='line-height: 1.1;'><small style=' color: var(--color-x);'> + " + slice(split(string(dur(date(now) - file.mtime)), ","), 0, 1)
+ " ago</small>" 
+ "<br><span style='font-size: 0.7em; color: var(--text-faint);'><span style='opacity: 0.5'>" + date(file.mtime) + "</span><br>Edited file " + file.link + "<br>At directory: <q style='color: var(--text-normal)'>" + file.folder + "</q><br><br>"  as "T"
  
  sort file.mtime desc limit 25
```
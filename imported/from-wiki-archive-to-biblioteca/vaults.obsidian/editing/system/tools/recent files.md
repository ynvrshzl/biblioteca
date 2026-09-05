<div style='height: 25vh; display: flex; justify-content: center; align-items: center; font-size: 4rem; opacity: 0.1;'>:LiHistory:</div>

<center style='opacity: 0.3; font-size: 0.8em;'>Recent Files</center>

```dataview
list without id "<small style=' color: var(--color-green);'> + " + slice(split(string(dur(date(now) - file.mtime)), ","), 0, 1) 

+ " ago</small>" 
+ "<br><span style='font-size: 0.7em; color: var(--text-faint);'>" + file.folder + "/" + file.link sort file.mtime desc limit 25
```
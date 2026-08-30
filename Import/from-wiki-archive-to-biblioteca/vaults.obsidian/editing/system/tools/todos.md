---
description: Track tasks and jobs across the wiki
---

<div style='height: 25vh; display: flex; justify-content: center; align-items: center; font-size: 4rem; opacity: 0.1;'><span style=''>:LiClipboardList:</span></div>

```dataview
table without id file.link + "<br><small style='opacity: 0.3'>" + file.folder + "</small>" as "Tasks", length(filter(file.tasks, (f) => !f.completed)) as "T", length(file.tasks) as "<input type='checkbox' checked>" where length(filter(file.tasks, (f) => f.completed)) != length(file.tasks)
```


```dataview
table without id file.link + "<br><small style='opacity: 0.3'>" + file.folder + "</small>" as "Completed" where length(filter(file.tasks, (f) => f.completed)) = length(file.tasks) and file.tasks
```
%%

```dataview
task
group by file.path
```
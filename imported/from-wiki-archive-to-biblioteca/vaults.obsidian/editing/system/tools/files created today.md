<div style='height: 25vh; display: flex; justify-content: center; align-items: center; font-size: 4rem; opacity: 0.1;'>:LiCalendarFold:</div>

```dataview
table without id
file.link
+ "<br><span style='font-size: 0.7em; color: var(--text-faint);'>" + file.folder as "Files",
dateformat(file.ctime, "h:mm a") as "Time",
"<small style=' color: var(--color-green);'> + " + slice(split(string(dur(date(now) - file.ctime)), ","), 0, 1) 

+ " ago</small>"  as "Age"
where file.cday = date(today)
sort file.ctime desc
```
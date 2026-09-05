---
cssclasses:
---

###### Oldest folders
```dataview
table without id
"<span style='color: var(--color-green);'>:LiPlus:" as "",
slice(split(FF, "/"), -1) +  "<br><sup style='opacity: 0.4'>" + FF + "</sup>" as "Folder",
"Folder was created <span style='color: var(--color-green);'>+" + rows.Age[0] + " ago</span>" as "Calculation"

FLATTEN sort(split(string(dur(date(now) - file.cday)), ",")[0]) as Age 
SORT length(split(file.folder, "/")) desc
FLATTEN choice(file.folder = "", "/", file.folder) as FF
GROUP BY FF
LIMIT 24
```
###### Oldest modified files
```dataview
table without id
"<span style='color: var(--color-green);'>:LiHistory:" as "",
file.name +  "<br><sup style='opacity: 0.4'>" + file.folder + "</sup>" as "File",
"Last change was <span style='color: var(--color-green);'>+" + Age + " ago</span>" as "Calculation",
"<span style='display: inline-block; border-radius: 25px; padding: 5px 10px; background: var(--color-accent); --link-color: var(--text-on-accent); font-size: 0.8em;'>" + link(file.path, "Open") + "</span>" as "Link"

FLATTEN sort(split(string(dur(date(now) - file.mday)), ",")[0]) as Age 
SORT Age desc
LIMIT 12
```
###### Oldest created files
```dataview
table without id
"<span style='color: var(--color-green);'>:LiPlus:" as "",
file.name +  "<br><sup style='opacity: 0.4'>" + file.folder + "</sup>" as "File",
"File was created <span style='color: var(--color-green);'>+" + Age + " ago</span>" as "Calculation",
"<span style='display: inline-block; border-radius: 25px; padding: 5px 10px; background: var(--color-accent); --link-color: var(--text-on-accent); font-size: 0.8em;'>" + link(file.path, "Open") + "</span>" as "Link"

FLATTEN sort(split(string(dur(date(now) - file.cday)), ",")[0]) as Age 
SORT Age desc
LIMIT 12
```
###### Grouped by age
```dataview
// ":LiGitCommit:" as "",
table without id
"<span style=' color: var(--color-green);'>+" + Age + " ago</span>" 
+ "<br><sup style='opacity: 0.5'>" + rows[0].file.cday + "</sup>" as "C",
  "&nbsp;<details close style=''><summary  style=' color: var(--color-green) font-size: 0.8em;'>Files</summary>" + "<ol>" + join(map(rows.file.link, (m) => "<li>" + m.file.link + "<br><sup style='opacity: 0.5'>" + m.file.folder + "</sup>" + "</li>"), "") + "</details>" as "Details"
group by sort(split(string(dur(date(now) - file.cday)), ",")[0]) as Age 
sort Age desc
```
%%
```dataview
table
rows.file.link
group by sort(date(today) - file.cday) as Age
sort Age desc
```
```dataview
table
file.mtime
// where... this query should only show a threshold of notes, from perhaps older than 4 months without mtime!
// we could also get very fancy and compute the ctime - mtime score to undersatnd which notes are most relavant!
sort file.mtime asc
```


```dataview
table without id

IMG as "",
"<span style='color: var(--color-green);'>+" + string(slice(split(string(dur(date(now) - date(file.mtime))), ","), 0, 1)) + " ago"
+ "<br></span>"
+ "<sup><span style='opacity: .3'>" + dateformat( file.mtime, "EEEE, MMMM dd" ) + " at </span><span style='color: var(--color-red);'>" + dateformat(file.mtime, "h:mm a") 
as "Activity",
file.link + "<br>" + "<small style='opacity: .3'>"+file.folder as "File Data"

flatten "<img src='https://img.notionusercontent.com/ext/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fpublic.notion-static.com%2F215ba286-1b27-410e-8d45-e5c9faccb901%2Fmy-notion-face-portrait.png/size/w=40' style='--cards-image-width: 1.5rem; border-radius: 50%; vertical-align: middle; float: right; --cards-image-height: 1.5rem;'>"  as IMG
sort file.mtime desc
limit 25
```
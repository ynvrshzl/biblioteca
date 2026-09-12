---
cssclasses:
  - tiny-imgs
---
###### Overview
```dataviewjs
const p = dv.pages().where(p=>p.file.mtime.toFormat('yyyy-MM-dd') === DateTime.now().toFormat('yyyy-MM-dd'))
dv.table(['Field', 'Value'], [
	[
		'Files modified today',
		p.length
	]
])
```

###### View by time

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
###### View by mod
```dataview
table without id

IMG as "",
"<span style='color: var(--color-green);'>+" + string(slice(split(string(dur(date(now) - date(file.mtime))), ","), 0, 1)) + " ago"
+ "<br>"
+ "<small style='opacity: .3'>" + file.mtime
as "Activity",
file.link + "<br>" + "<small style='opacity: .3'>"+file.folder as "25 Most recent..."

flatten "<img src='https://img.notionusercontent.com/ext/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fpublic.notion-static.com%2F215ba286-1b27-410e-8d45-e5c9faccb901%2Fmy-notion-face-portrait.png/size/w=40' style='--cards-image-width: 1.5rem; border-radius: 50%; vertical-align: middle; float: right; --cards-image-height: 1.5rem;'>"  as IMG
sort file.mtime desc
limit 25
```

 View as table
 View as cards
 View as tree
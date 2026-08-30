---
icon: ":LiClock2:"
cssclasses:
- tiny-imgs
---
###### recent files

```dataview
table without id

img + " edited " + file-link + " " + ago + flair as "Recent files/Activity"



flatten "<span style='float: right; color: var(--color-green);'>M</span>" as flair
flatten "<img src='https://img.notionusercontent.com/ext/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fpublic.notion-static.com%2F215ba286-1b27-410e-8d45-e5c9faccb901%2Fmy-notion-face-portrait.png/size/w=40' style='--cards-image-width: 1.5rem; border-radius: 50%; vertical-align: middle;'>"  as img
flatten "<span style='--link-color: var(--text-normal);'>" + file.link as file-link 
flatten "<span style='color: var(--color-green);'>+" + string(slice(split(string(dur(date(now) - date(file.mtime))), ","), 0, 1)) + " ago" as ago 
sort file.mtime desc
limit 12
```

###### Recent Files

```dataview
table without id

 "<span style='--link-color: var(--text-normal);'>" + file.link + 
 "<br>" + "<small style='opacity: .4'>" + file.folder  as "File",

"<span style='color: var(--color-green);'>+" + string(slice(split(string(dur(date(now) - date(file.mtime))), ","), 0, 1)) + " ago"
+"<br>"
+ "<sup style='opacity: .5'>" + dateformat(file.mday, "EEEE")
as "Modified"



flatten "<span style=''>M</span>" as flair
sort file.mtime desc
limit 12
```
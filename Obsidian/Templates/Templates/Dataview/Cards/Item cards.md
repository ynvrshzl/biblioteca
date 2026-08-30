---
links:
  - "[[mock]]"
cssclasses:
  - cards
---
###### Items

```dataview
table without id ":LiBox:", file.link, file.folder
where contains(file.inlinks, this.file.link)
```
<!--- template = templates/dtaview/cards ---->
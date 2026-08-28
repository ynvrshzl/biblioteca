---
cssclasses:
  - cards
---
###### Description
Intedad of gettinglost in teh filetree, workspaces atetmpt to construct a conehisve stody set of work to botrh jump back in (continiuty) and to organize effort (integration)+nav+ori

###### Recent workspaces

```dataview
table without id 
"<q style='color: var(--text-normal);'>" + file.name as "Workspace", 

"<span style='float: right'>" +
length( file.outlinks) + " Links" + "</span>"
+ split(string(dur(date(now) - file.mtime)), ",")[0] + " Ago" as "Recency", "<div style=' float: right;'><button class='mod-cta' >Open all</button> <button>Open in system</button>" as "Functions" where icontains(file.folder, this.file.name)
```
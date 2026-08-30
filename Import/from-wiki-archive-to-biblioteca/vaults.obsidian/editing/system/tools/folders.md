<div style='height: 25vh; display: flex; justify-content: center; align-items: center; font-size: 4rem; opacity: 0.1;'>:LiPackage:</div>

###### Directories

```dataview
// default(link(g + "/readme").description, "") as "Description",

table without id

choice(
	link(g + "/readme").file.mtime, 
	link(g + "/readme", g),
	"<span style='opacity:.5'>" 
	+ link(g + "/readme", g)
) as "Directories",


length(rows) as "Files"

flatten file.folder as Folders
flatten split(Folders, "/")[0] as g
where file.folder
group by g
```

###### 1st-depth 

```dataview
table without id

choice(
	link(g + "/readme").file.mtime, 
	link(g + "/readme", g),
	"<span style='opacity:.5'>" 
	+ link(g + "/readme", g)
) as "Directories",


length(rows) as "Files"

flatten file.folder as Folders
flatten split(Folders, "/")[1] as g
where file.folder
group by g
```

###### 2nd-depth 
<div style='padding: 25px; font-size: 0.8em; display: flex; justify-content: center; align-items: center;  opacity: 0.3;'>Directories at this level are top-level topics</div>


```dataview
table without id

choice(
	link(g + "/readme").file.mtime, 
	link(g + "/readme", g),
	"<span style='opacity:.5'>" 
	+ link(g + "/readme", g)
) as "Directories",


length(rows) as "Files"

flatten file.folder as Folders
flatten split(Folders, "/")[2] as g
where file.folder
group by g
```
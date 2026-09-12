```dataviewjs
await dv.view("@lib.dataviewjs/src/main", { template: "project" });
```

###### Pages
```dataview

table without id 

":LiFile:",
"<div style='display: flex; flex-direction: row; justify-content: space-between;'><span style='color:var(--text-normal); "  + "'><q>" + file.name + ".md</q></span><span style='float: right; height: .6em; width: .6em; border-radius: 50%; display: inline-block;" + BGP + "'>",

default(description, round(file.size / 1024) + " MB"),

CTA + link(file.path, "Open")

flatten "Book Project" as CLASS
flatten "hsl(" + truncate(string(hash(file.name, 3)), 3, "") + ", 50%, 60%);" as RANDRGB
flatten "<span style='display: inline-block; float: right; border-radius: 25px; padding: 5px 10px; box-shadow: 0 1px 5px var(--shadow); --link-color: var(--text-muted);'>" as BTN
flatten "color: " + RANDRGB as SGP
flatten "</span>" AS CSP
flatten "<span style='border-radius: 25px; padding: 5px 10px; box-shadow: 0 1px 5px var(--shadow);  display: inline-block; --link-color: var(--text-on-accent); float: right; background: " + RANDRGB + "'>" as CTA
flatten "background-color: " + RANDRGB as BGP

where 
	icontains(file.folder, this.file.name) 
	and icontains(file.path, "pages/")
```

###### Compiled 

###### Docs
```dataview

table without id 

":LiBookmark:",
"<div style='display: flex; flex-direction: row; justify-content: space-between;'><span style='color:var(--text-normal); "  + "'>" + file.name,

default(description, round(file.size / 1024) + " MB"),

CTA + link(file.path, "Open")

flatten "Book Project" as CLASS
flatten "hsl(" + truncate(string(hash(file.name, 3)), 3, "") + ", 50%, 60%);" as RANDRGB
flatten "<span style='display: inline-block; float: right; border-radius: 25px; padding: 5px 10px; box-shadow: 0 1px 5px var(--shadow); --link-color: var(--text-muted);'>" as BTN
flatten "color: " + RANDRGB as SGP
flatten "</span>" AS CSP
flatten "<span style='border-radius: 25px; padding: 5px 10px; box-shadow: 0 1px 5px var(--shadow);  display: inline-block; --link-color: var(--text-on-accent); float: right; background: var(--color-blue);'>" as CTA




where 
	icontains(file.folder, this.file.name) 
	and icontains(file.path, "docs/")
```
###### Drafts and Prototypes
###### Ideaverse
###### Subtasks
###### Supertasks

###### Footer

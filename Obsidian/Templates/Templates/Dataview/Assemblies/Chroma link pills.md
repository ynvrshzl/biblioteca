```dataview
// "<span style='align-self: middle; vertical-align: baseline; height: .7em; width: .7em; border-radius: 50%; display: inline-block; background-color: hsl(" + truncate(string(hash(file.name, 3)), 3, "") + ", 50%, 60%);'></span>&ensp;" + link(file.path, lower(file.name)) 
table without id 
"<small style='display: inline-block; border-radius: 25px; padding: 5px 10px; --text-faint: white; --link-color: white; background-color: hsla(" + truncate(string(hash(file.name, 3)), 3, "") + ", 50%, 60%);'>" + link(file.path, lower(file.name)) + "</span>" 
where file.folder = this.file.name sort file.name asc
```
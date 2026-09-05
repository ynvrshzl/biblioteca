```dataview
table where map(file.frontmatter, (f) => icontains(f, "http"))
```
---
cssclasses:
- cards
---

```dataview
table without id "!" + default(elink(image), elink(this.image)), file.link, default(description, file.name)
where icontains(file.folder, replace(this.file.path, ".md", ""))
```
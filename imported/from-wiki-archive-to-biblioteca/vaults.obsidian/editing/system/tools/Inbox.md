---
description: Helps organize writings you are currently editing/frequently access
---

```dataview
table without id file.link + "<br><small style='opacity: 0.3'>" + file.folder as "File", round(dur(date(now) - file.mtime).hours) as "Hours ago" where dur(date(now) - file.mtime).hours < 24
sort file.mtime desc
```
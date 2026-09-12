```dataview
list where dateformat(date(file.mday), "yyyy-WW") = dateformat(date(today), "yyyy-WW")
```
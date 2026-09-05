```dataviewjs
// obj: get files
const files = dv.pages().sort((a, b) => b - a.file.mtime).limit(50);
// 
```
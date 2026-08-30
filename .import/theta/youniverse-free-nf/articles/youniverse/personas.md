---
description: Personas are the characters of the Youniverse.
---

```js
const files = api.queryall((file) => file.path.includes("persona") && file.path.split("/").length === 3);
const map = files.map(file => [
    file.frontmatter.image, 
    file.path
]);
const table = components.table({rows: map, classes: ["grid"]});
document.querySelector("article").append(table);
```
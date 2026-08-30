Use this markdown file inside obsidian to debug the system and test features live. Note, that according to design, obsidian will only ever access the main template using 'dv.view'

```dataviewjs
await dv.view("./compile", {template: "debug"});
```

```dataviewjs
await dv.view("./src/main", {template: "debug"});
```

```dataviewjs
// to 'eval' code, it seems to not support nested async/await... meaning if the io.load script contains await, it son
const m = await dv.io.load("main.js");

// trying to capture async/await
const a = async () => await eval(m)

// print the result
dv.el('pre', a().then(p => p))
```
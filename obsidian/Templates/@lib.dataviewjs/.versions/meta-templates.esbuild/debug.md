Use this markdown file inside obsidian to debug the system and test features live. Note, that according to design, obsidian will only ever access the main template using 'dv.view'

```dataviewjs
await dv.view("@lib/runtime", {template: "debug"});
```

```dataviewjs
await dv.view("@lib/src/main", {template: "debug"});
```

```dataviewjs
const runtime = await dv.io.load("runtime.js");
console.log();
eval(runtime);
```
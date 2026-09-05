const Body = dv.el('section', null);
await dv.view("Section", { Text: "README.md", Body: Body, Open: 1 });
const Readme = Body.append(dv.el('div', (  dv.current().description ?? "No description")));

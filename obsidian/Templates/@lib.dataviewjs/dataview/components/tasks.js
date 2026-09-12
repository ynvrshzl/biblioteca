const Body = dv.el('section', null);
await dv.view("Section", { Text: "Tasks", Body: Body, Open: 1 });

const pages = dv.pages().where(p => p.file.folder.includes(dv.current().file.path.replace(".md", "")));
const docfiles = pages.filter(p => p.file.tasks.length === 0);
const tfiles = pages.filter(p => p.file.tasks.length > 0);


const Table = dv.el('table', null);
Table.classList.add("dataview", "table-view-table", "view-table");

const Tbody = dv.el('tbody', null)
Tbody.classList.add("table-view-tbody");

Body.append(Table);
Table.append(Tbody);
Body.style.cssText += "width: 100%; overflow-y: auto; margin: 0;"

tfiles.map((p, i) => {
    /** * Table row */
    const Tr = dv.el('tr', null);

    const tag = dv.el('span', 'Task');
    tag.style.cssText = `float:right; font-size: 0.8em;display: inline-block; border-radius: 25px; padding: 5px 10px; background-color: color-mix(in srgb, var(--color-green) 10%, transparent); color: var(--color-green); font-size: 0.7em;display: inline-block; border-radius: 25px; padding: 5px 10px; background-color: color-mix(in srgb, var(--color-green) 10%, transparent); color: var(--color-green); `;


    const checkbox = dv.el('input');
    checkbox.type = 'checkbox';

    const name = dv.el('span', p.file.name);
    name.style.cssText = 'color: var(--text-normal); ';
    name.append(tag)

    const prog = dv.el('progress');
		prog.max = p.file.tasks.length
		prog.value = p.file.tasks.filter(t=>t.completed).length
    

    const dsc = dv.el('span', p.description ?? "No description...");

    const blink = dv.el('a', "Open");
    blink.style.cssText = `padding: 5px 10px;--text-faint: white; --link-color: white; border-radius: 50px; vertical-align: middle; float: right; background: var(--color-green);`;
    blink.classList.add('internal-link');
    blink.setAttribute('data-tooltip-position', 'top');
    blink.setAttribute('aria-label', p.file.path);
    blink.setAttribute('href', p.file.path);
    blink.setAttribute('target', "_blank");
    blink.setAttribute('rel', "noopener");
    blink.setAttribute('rel', "nofollow");
    // blink.onClick = app.workspace.openLinkText(dv.current().file.path, "/", true)

    /** Appending cells to table row */
    Tr.append(
        dv.el('td', checkbox),
        dv.el('td', name),
        dv.el('td', prog),
        dv.el('td', dsc),
        dv.el('td', blink),
    );

    /** Add current row to body */
    Tbody.append(Tr);
});

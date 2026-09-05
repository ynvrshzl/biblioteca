const Body = dv.el('section', null);
await dv.view("Section", { Text: "Documents and Resources", Body: Body, Open: 1 });

const pages = dv.pages().where(p => p.file.folder.includes(dv.current().file.path.replace(".md", "")));
const docfiles = pages.filter(p => p.file.tasks.length === 0);



const Table = dv.el('table', null);
Table.classList.add("dataview", "table-view-table", "view-table", "cards");
Body.append(Table);

const Tbody = dv.el('tbody', null)
Tbody.classList.add("table-view-tbody");

Table.append(Tbody);
Body.style.cssText += "width: 100%; overflow-y: auto; margin: 0;"

if (docfiles.length === 0) {

    const empt = dv.el('div', "File has no docs");
    empt.style.cssText = 'height: 35vh; opacity: 0.3; width: 100%;  display: flex; justify-content: center; align-items: center;'
    Body.append(empt);

} else {
    docfiles.map((p, i) => {
        /** * Table row */
        const Tr = dv.el('tr', null);

        const tag = dv.el('span', 'Document');
        tag.style.cssText = `float:right; font-size: 0.8em;display: inline-block; border-radius: 25px; padding: 5px 10px; background-color: color-mix(in srgb, var(--color-blue) 10%, transparent); color: var(--color-blue); font-size: 0.7em;display: inline-block; border-radius: 25px; padding: 5px 10px; background-color: color-mix(in srgb, var(--color-blue) 10%, transparent); color: var(--color-blue); `;

        /** Thumbnail */
        const img = dv.el('img');
        img.src = 'https://img.notionusercontent.com/ext/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fpublic.notion-static.com%2F215ba286-1b27-410e-8d45-e5c9faccb901%2Fmy-notion-face-portrait.png/size/w=40';
        img.style.cssText = 'width: 1.5rem; border-radius: 50%; vertical-align: middle; height: 1.5rem;';

        const row1 = dv.el('span');
        row1.append(tag);
        row1.append(img);



        const name = dv.el('span', p.file.name);
        name.style.cssText = 'color: var(--text-normal); font-weight: 600;';


        const dsc = dv.el('span', 'Edited by @hazl');

        
        const blink = dv.el('a', "Open");
        blink.style.cssText = `padding: 5px 10px;--text-faint: white; --link-color: white; border-radius: 50px; vertical-align: middle; float: right; background: var(--color-blue);`;
        blink.classList.add('internal-link');
        blink.setAttribute('data-tooltip-position', 'top');
        blink.setAttribute('aria-label', p.file.path);
        blink.setAttribute('href', p.file.path);
        blink.setAttribute('target', "_blank");
        blink.setAttribute('rel', "noopener");
        blink.setAttribute('rel', "nofollow");

        /** Appending cells to table row */
        Tr.append(
            dv.el('td', row1),
            dv.el('td', name),
            dv.el('td', dsc),
            dv.el('td', blink),
        );

        /** Add current row to body */
        Tbody.append(Tr);
    });
}

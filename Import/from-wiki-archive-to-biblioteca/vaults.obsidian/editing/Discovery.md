---
description: "__File explorer context tool.__ Search for contexts across this vault to get started with local work. "
---

<div style='height: 25vh; display: flex; justify-content: center; align-items: center; font-size: 4rem; opacity: 0.1;'>:LiSearch:</div>




```dataviewjs
const footer = dv.el('section', '');

const rbtn = dv.el( 'button', 'Refresh', {cls: ['mod-cta']});
footer.style.cssText = "position: fixed; z-index: 9999; bottom: 25px; right: 25px; display: flex; gap: 5px; align-items: center; "

rbtn.onclick = () => app.commands.commands['dataview:dataview-rebuild-current-view'].callback();


const links = dv.el('small', `[[actions|See all actions]]`);

footer.append(links);
footer.append(rbtn);

dv.el('center', 'What are you working on?');
dv.el('p', '');
// const h = dv.header(2, "Good afternoon wikinaut");
// h.style.cssText = 'color: var(--color-accent-2);';



const c = dv.el('div', '');
c.classList.add('search-input-container');
c.style.margin = '5px';

const s = dv.el( 'button', 'Search', {cls: ['mod-cta']});
s.style.margin = '5px';
dv.el('button', 'Directories').style.margin = '5px';
dv.el('button', 'Text').style.margin = '5px';


const i = dv.el('input');
c.appendChild(i);

i.type = 'search';
i.placeholder = 'What are you working on?';

const tip = dv.el('div','');
tip.style.cssText = 'color: var(--color-blue); font-size: 0.7em; margin-block: 15px;';

const results = dv.el('div', '');
results.style.cssText = 'overflow-y: auto; max-height: 300px;';

const ie = (e) => {
	if('Enter' === e.key) {
		const r = i.value.trim().toLowerCase();
		
		const ps = r !== "" ? dv.pages().where(p => p.file.path.includes(r)) : null;
		
		const tipt = `Found ${ps.length} results for "${r}`
		tip.innerHTML = tipt;
		new Notice(tipt);
		results.innerHTML = ""
		
		const list = dv.el('ol', '');
		
		ps.map((f) => {
			const text = f.file.link + "<br><sup style='opacity: 0.3'>" + f.file.folder
			const li = dv.el('li', text)
			list.appendChild(li)
			results.appendChild(list)
		})
	}
};

i.removeEventListener('keydown', ie)
i.addEventListener('keydown', ie)
i.focus();
```
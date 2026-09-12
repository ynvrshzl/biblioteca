```dataviewjs
const c = dv.el('div', '');
c.style.cssText = `align-items: center; display: flex; flex-direction: row-reverse; justify-content: space-between; width: 100%; `;

const i = (i, e) => {
	const row = dv.el('div', '');
	row.style.cssText = `font-size: .5em;`
	
	const icon = dv.el('span', i);
	icon.style.cssText = `color: var(--color-base-35);`;
	
	const span = dv.el('sup', e);	
	span.style.cssText = `font-size: 1em; color: var(--text-muted);`;
	
	row.append(icon, ' ', span);
	c.append(row);
	return span;
};
i(':LiFolderClosed:', 'Routines')
i(':LiLink2:', '3 Links')
i(':LiAlarmClock:', 'Last edited 3h ago')
i(':LiClipboardList:', '4 Properties')
i(':LiArrowDownFromLine:', '38 Mentions')
```
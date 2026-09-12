
```dataviewjs
const a = [
	'stadio',
	'verso',
	'pre-coro',
	'coro',
	'verso',
	'pre-coro',
	'coro',
	'stadio'
];
a.map((a, i) => dv.el('button', a, {attr: {style: "font-size: 0.9em; padding: 3px 8px; border-radius: 25px;  cursor: pointer;"}}) + dv.el('small', " -> ", {attr: {style: "opacity: .3"}}));
```

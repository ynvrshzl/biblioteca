
```dataviewjs
const opts = {
	variant: 1,
}
const helper = dv.el('details', '');
helper.style.cssText = `position: fixed; font-size: 0.75em; max-height: 200px; max-width: 250px; top: 70px; right: 25px; padding: 15px 25px; border-radius: 15px; background: var(--color-base-30);`

helper.append(dv.el('div', '&nbsp;'));
helper.append(dv.el('div', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quis hic nemo tenetur blanditiis enim aperiam voluptatum rem, tempore dolor alias non eum sint nostrum. Provident quod corporis dolores fuga."))
```


```dataviewjs
const helper = dv.el('details');
const content = dv.el('div', dv.current().description);

helper.setAttribute("open", false);
helper.style.cssText = `position: fixed; font-size: 0.75em; max-width: 250px; bottom: 20px; right: 25px; padding: 5px;z-index: 9; `
content.style.cssText = 'padding: 15px; border-radius: 15px; background: var(--background-primary);max-height: 200px;  overflow-y: auto; '

helper.append(dv.el('summary', 'Summary'));
helper.append(dv.el('div', '&nbsp;'));
helper.append(content)
```

```dataviewjs
const helper = dv.el('details');
const content = dv.el('div', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quis hic nemo tenetur blanditiis enim aperiam voluptatum rem, tempore dolor alias non eum sint nostrum. Provident quod corporis dolores fuga.");

helper.style.cssText = `position: fixed; font-size: 0.75em; max-width: 250px; max-height: 200px; bottom: 70px; left: 25px; padding: 5px;z-index: 9;`

content.style.cssText = 'padding: 15px; border-radius: 15px; background: var(--color-base-40); max-height: 100px; overflow-y: auto;'
helper.append(dv.el('summary', 'Summary'));
helper.append(dv.el('div', '&nbsp;'));
helper.append(content)
```
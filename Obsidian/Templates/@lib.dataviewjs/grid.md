```dataviewjs
/** 
 * Grid component for dvjs/obsidian.lib
*/
const grid = HTML('div');
grid.style.cssText = 'display: flex; flex-direction; row; width: 100%; align-items: top; justify-content: space-between';
// Attach to dataview  codeblock container
dv.container.appendChild(grid)

/** HTML Library */
function HTML(tag, css, container){

	/** Element */
	const el = document.createElement(tag);
	
	// css
	el.style.cssText = css ?? '';
	
	if (container){
		container.appendChild(el)
		return el;
	} else {
		dv.container.append(el) 
	}
};
```

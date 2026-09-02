```dataviewjs
// this shaould be a plugin babe!
const github = await fetch('https://api.github.com/repos/ynvrshzl/biblioteca/commits');
// json
const json = await github.json();
//title
dv.el('h6', 'GitHub Changelog');

let gap = '10px';


// gui
const container = dv.el('div'); container.style.cssText = `display: flex; flex-direction: column; gap: ${gap}; justify-content: space-between; background-image: linear-gradient(90deg, var(--text-faint) 1px, transparent); background-size: 1px; background-position: .4em; background-repeat: repeat-y;`;

const widget = dv.el('button', 'Open on GitHub');
widget.classList.add('mod-cta');
widget.style.cssText = 'position: fixed; bottom: 25px; right: 25px;'


const slider = dv.el('input');
slider.type = 'range'
slider.max = 250;
slider.min = 10;
slider.oninput = (e) => { container.style.gap = e.target.value + "px" };
slider.style.cssText = 'position: fixed; bottom: 25px; left: 25px;'

container.append(slider, widget);
// gen
const output = Object(json).map((o, i) => {
	const title = dv.el('div');
	title.style.cssText = 'flex-direction: column; display: flex; align-items: start;'
	
	const img = dv.el('img')
	img.src = Object(json)[0].committer.avatar_url;
	img.style.cssText = 'height: 20px; width: 20px; object-fit: cover; vertical-align: middle; margin-inline-end: .7em;';
	
	const msg = dv.el('span', o.commit.message);
	msg.style.cssText = 'cursor: pointer;';
	msg.setAttribute('data-tooltip-position', 'right');
	msg.setAttribute('data-tooltip-delay', '300ms');
	msg.setAttribute('aria-label', DateTime.fromISO(o.commit.committer.date).toFormat('EEEE, MMMM dd y, h:mm a'));

	msg.insertAdjacentElement('afterbegin', img);
	
	const flair = dv.el('span', '&nbsp;#' + (json.length - i));
	flair.style.cssText = 'color: var(--text-faint); float: right;';
	msg.insertAdjacentElement('afterbegin', flair)
	
	// const url = dv.el('span', `[Open on GitHub](${o.commit.url})`);
	// url.style.cssText = 'float: right;';
	// msg.insertAdjacentElement('afterbegin', url)
	
	const sub = dv.el('span', Math.round(DateTime.now().diff(DateTime.fromISO(o.commit.committer.date), 'hours').hours) + "h ago");
	
	sub.style.cssText = 'margin-inline-start: 3em; color: var(--text-muted); font-size: 0.7em;';
	
	title.append(msg, sub);
	
	container.append(title)

  });

```

<div style='height: 25vh; display: flex; justify-content: center; align-items: center; font-size: 4rem; opacity: 0.1;'>:LiGithub:</div>

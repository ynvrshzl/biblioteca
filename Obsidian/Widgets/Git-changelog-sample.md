```dataviewjs
// this shaould be a plugin babe!
const github = await fetch('https://api.github.com/repos/ynvrshzl/biblioteca/commits');
// json
const json = await github.json();
//title
dv.el('h6', 'GitHub Changelog');
// gui
const container = dv.el('div'); container.style.cssText = 'background-image: linear-gradient(90deg, var(--text-faint) 1px, transparent); background-size: 1px; background-position: .4em; background-repeat: repeat-y;';
// gen
const output = Object(json).map((o, i) => {
	const title = dv.el('div');
	title.style.cssText = 'flex-direction: column; display: flex; align-items: start;'
	
	const msg = dv.el('span', "<span style='color: var(--color-accent-2);'>C</span> " + o.commit.message);
	msg.style.cssText = 'cursor: pointer;';
	msg.setAttribute('data-tooltip-position', 'right');
	msg.setAttribute('data-tooltip-delay', '300ms');
	msg.setAttribute('aria-label', DateTime.fromISO(o.commit.committer.date).toFormat('EEEE, MMMM dd y, h:mm a'));
	
	
	const flair = dv.el('span', '&nbsp;#' + (json.length - i));
	flair.style.cssText = 'color: var(--text-faint); float: right;';
	msg.insertAdjacentElement('afterbegin', flair)
	
	// const url = dv.el('span', `[Open on GitHub](${o.commit.url})`);
	// url.style.cssText = 'float: right;';
	// msg.insertAdjacentElement('afterbegin', url)
	
	const sub = dv.el('span', Math.round(DateTime.now().diff(DateTime.fromISO(o.commit.committer.date), 'hours').hours) + "h ago");
	
	sub.style.cssText = 'margin-inline-start: 1.8em; color: var(--text-muted); font-size: 0.7em;';
	
	title.append(msg, sub);
	
	const br = dv.el('br');
	
	container.append(title, br)

  });

```

<div style='height: 25vh; display: flex; justify-content: center; align-items: center; font-size: 4rem; opacity: 0.1;'>:LiGithub:</div>

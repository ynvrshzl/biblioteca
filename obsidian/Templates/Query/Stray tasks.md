---
description: These are stray tasks throughout the vault, that are __not projects__ or __dailies__ ... like a secondary set of notifications for catching forgotten, unscheduled tasks.
aliases:
  - Tasks that are not projects or daily
ignorelist:
  - projects
  - "202"
  - routine
  - youtube
  - arcadium
  - singing
  - templates/
  - office/linux
  - copies
  - youniversity/touch-typing
image: https://images.pexels.com/photos/8386688/pexels-photo-8386688.jpeg?w=900
---

```dataviewjs
const g = dv.el('img');
g.src = dv.current().image;
g.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 200px; object-fit: cover; filter: brightness(0.3); pointer-events: none; z-index: 0; border-radius: 0;';

dv.el('div', '').style.height = '200px';

const x = dv.el('img');
x.src = dv.current().image;
x.style.cssText = 'position: absolute; top: 50px; left: 25px; width: 120px; height: 120px; object-fit: cover;';

const h = dv.header(1, dv.current().file.name);
h.style.cssText = 'position: absolute; top: 50px; right: 25px; color: white';

const d = dv.el('sub', dv.current().description);
d.style.cssText = 'position: absolute; top: 100px; width: 200px; font-size: 0.7em; max-height: 70px; overflow-y: auto; right: 25px; color: white';
```

```dataview
list
rows.file.link
flatten any(map(this.ignorelist, (m) => icontains(file.folder, m))) as f
where file.tasks and length(file.tasks) != length(filter(file.tasks, (t) => t.completed)) and !f
sort length(file.tasks) desc
group by split(file.folder, "/")[0] as g
```

```dataview
table without id
choice(length(filter(file.tasks, (t) => t.completed)) != length(file.tasks), "<input type='checkbox'/>", "<input type='checkbox' checked/>") as ":LiCheck:",
split(file.folder, "/")[0] as "Group",
file.link + "<br><sup style='opacity: .5'>" + file.folder as "File",
"<progress max='" + length(file.tasks) + "' value = '" + length(filter(file.tasks, (t) => t.completed)) + "'></progress>" as "Progress",
length(file.tasks) as "T"


flatten any(map(this.ignorelist, (m) => icontains(file.folder, m))) as f
where 
file.tasks
and length(file.tasks) != length(filter(file.tasks, (t) => t.completed))
and !f
sort length(file.tasks) desc
```

%%


```dataviewjs
const helper = dv.el('details', '');
helper.style.cssText = `position: fixed; font-size: 0.75em; max-height: 200px; max-width: 250px; bottom: 35px; right: 25px; padding: 15px 25px; border-radius: 15px; background: var(--color-base-30);`

helper.append(dv.el('div', '&nbsp;'));
helper.append(dv.el('div', "These are stray tasks throughout the vault, that are __not projects__ or __dailies (2025/\*)__ ...Like a secondary set of notifications for catching forgotten, unscheduled tasks."))
helper.append(dv.el('div', '&nbsp;'));

helper.append(dv.el('div', 'This is ignoring specific folder paths, excluded from query results, using YAML frontmatter property'));
helper.append(dv.el('div', '&nbsp;'));
helper.append(dv.el('div', dv.current().ignorelist.map(i => "<code style='color: var(--color-red); background: color-mix(in srgb, var(--color-red) 5%, transparent);'>" + i + "</code>").join(' ')))

```
---
aliases:
- Complexity size analysis
description: Note that this does not recursively consider files, it only assumes files at folder level. This is a tool/database view which counts the file-count of each folder in this vault. Essentially, the more mature a project or folder becomes, the more files are counted. Maybe we could count file outlinks aswell to determine complexity-maturity! To gain insight on this vaults biggest sectors to manage and stuff.
---

```dataviewjs
// chartjs config
const s = dv.el('script');
const a = dv.el('div', '');
const ctx = dv.el('canvas');
const root = getComputedStyle(document.body);
const acc = root.getPropertyValue('--color-accent').trim();

const folders = new Set();
const pages = dv.pages();


// chartjs config
ctx.id = 'myChart';
s.src = 'https://cdn.jsdelivr.net/npm/chart.js';

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: [ 12, 19, 12, 19, 3, 19, 3, 30, 5, 30, 5,  50,  3, 19, 3, 30, 5, 30, 5,  2, 3 ],
      datasets: [{
        label: 'Items in folder',
        data: [12, 19, 12, 19, 3, 19, 3, 30, 5, 30, 5,  50,  3, 19, 3, 30, 5, 30, 5,  2, 3],
        borderWidth: 1,
        backgroundColor: acc,
        borderColor: acc,
        tension: 0,
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
```

```dataview
table without id
":LiFolderArchive:" as "",
g + "<br><sub>" + choice(icontains(meta(link(g)).path, ".md"), link(g), "<sup style='opacity: 0.3'>No folder as file") as "Folder",
length(rows) as "F"
flatten file.folder as g
group by g
sort length(rows) desc
limit 3
```
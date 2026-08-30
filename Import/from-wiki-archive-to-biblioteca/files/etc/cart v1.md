```dataviewjs

const items = {
	"🗞️ Towel (Angel Soft)": 5.15,
	"🗞️ Towel (Publix)": 2.09, 
	"🍱 Sushi": 10.00,
    "🥛 Milk (2)": 5 + 6,
    
};

const red = () => "<span style='color: var(--color-red);'>"

const tot = Object.values(items).reduce((a, b) => a + b);
const tax = 0.07;

const map = [
[
    "Tax %", red() + tax + "%"
],
[
    "Tax", red() + `-$${String(tot * tax).slice(0, 5)}`
],
[
    "Total (before tax)",
    `$${String(tot).slice(0, 5)}`
],
[
    "Grand total",
    `$${String(tot + (tot * .07)).slice(0, 5)}`
]
];
dv.table(["Type", "Value"], map);

dv.list([items]);
```
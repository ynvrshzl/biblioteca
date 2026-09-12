---
images: 
- "https://images.pexels.com/photos/681335/pexels-photo-681335.jpeg"
- https://i.pinimg.com/736x/31/24/a4/3124a44f6b23fe5d03bca9d5432470fe.jpg
- https://images.pexels.com/photos/31726564/pexels-photo-31726564.jpeg
- https://images.pexels.com/photos/31726547/pexels-photo-31726547.jpeg
---

```dataviewjs
const imgs = dv.current().images;
const rand = Math.floor(Math.random() * imgs.length)
const img = imgs[rand];
dv.table(0, [[ `![](${img})`, dv.current().file.link, `[${DateTime.now().toFormat('MMMM d, yyyy')}]()`, 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.' ]])
```
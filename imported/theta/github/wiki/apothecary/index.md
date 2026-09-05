---
title: "Apothecary"
description: "A place for the broken human to find medicine."
---

Here, I share what saved my life. Knowledge, wisdom, and the most important things i've ever learned. This is a virtual garden, for all of us broken souls, finding a reason to exist.

```js
const src = database.filter(file => file.folder.includes("apothecary") && file.file === "index.md");

/** store this home article, as "this" reference */
const self = heap.article;

// define table rows for query
const table = src.map(file => [
    // icon
    create("i").content("note").css("material-symbols-rounded").inlinecss("position: absolute; top: 15px; right: 15px; height: 45px; width: 45px; z-index: 1; font-size: 2rem; color: white;"),

    // create an image
    create("img")
        .image(file.assets.image ?? self.assets.image )
        .css("cover"), 

    // create thumbnail
    create("img")
        .image(file.assets.image ?? self.assets.image)
        .inlinecss("position: absolute; top: -30px; left: 40%; height: 45px; width: 45px;"),     
       
    // create a link to the article 
    create("a").url(file.folder).content("Click to Read"), 

    
    // title of each article card
    create("b").content(`${file.frontmatter.title ?? file.name}`),

    // description of article in card.
    create("span")
        .css("description")
        .content(file.frontmatter.description ?? file.name),

]);

// final table
// query("table").css("grid").matrix([[1], [2], [3]]).in(article);
component("table").css("grid").matrix(table).in(article);
```
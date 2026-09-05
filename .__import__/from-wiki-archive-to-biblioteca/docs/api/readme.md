# API for database
When accessing this Wiki through a server, or external interfaces, the database provides a fast-access, static record of data for the wiki.

## Schema reference
The basic anatomy of a file's database

- path
- name
- folder: the folder of the current file as "String" 
- outlinks: an [Array] of external links

```json
[
    {
        path: "string",
        name: "string",
        folder: "string",
        outlinks: [],
        date: [
            modified: "UTC",
            created: "UTC",
            edited: "UTC",
            accessed: "UTC",
        ],
        assets: [
            script: "main.js",
            css: "styles.css",
            html: "index.html",
        ],
        frontmatter: [],
    }
]
```
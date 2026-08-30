**"code-vis"**
a visualizer for code files to reduce cognitive suffering

- [core-features](core-features.md)
- [program-vision-and-purposs](program-vision-and-purpose.md)


### Data flow conveyor belt
Example: 

```rust
Watcher ──> Debounce ──> Compiler ──> "file.json" ──> Sync ──> Remote Site
```

### Layered Views
Instead of all code looking the same, we should separate each part of the code by it's responsibility. This would clarify sections of code by it's purpose, increasing readability & reducing the cluttered nature of textual code.

- 🟦 Logic flow
- 🟥 Error handling
- 🟨 Parsing/FS operations
- 🟩 Testing paths
- 🟪 Comments/annotations

### Comments
Instead of comments as passive green text, they become documentation nodes in the visual map. Again, reducing the need to create extensive documentation, when comments are directly linked to their code-parts.

### Logs
An experimental feature to show the steps at which logs are executed in the code. For example, when ...
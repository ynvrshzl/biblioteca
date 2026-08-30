```javascript
new Program("Main").thread("min").output().to().thread("max")


new Thread("min").input("y").input("x")
    .switch("logic").output("x")
        .if().input("x").is("Less than").input("y")
        .otherwise().output("y")

new Abstract("y").describes("A number for calculation.").is("Integer").sample(5)

new Abstract("x").describes("A number for calculation.").is("Integer").sample(10)

new Try("min").input("x").as(9).input("y").as(9).output("console")
```
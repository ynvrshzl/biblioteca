here's a conceptual basic program in mlang! essentially we are exploring how we naturally express ideas and think in problem-solving terms... and figuring out how to model that in a block-based world...

-v1.0 

```js
new Program("fibonacci sequence").threads("input", "enumlogic", "output")
new Thread("input")
new Thread("enumlogic")
new Thread("output")
new Ruleset("fibonacci rules").rule("on end").executes("console: Finished fibonacci with exit code 0")
new Sequencer("logic").chain("input -> enumlogic -> output")
Program("fibonacci sequence").apply("ruleset: fibonacci rules").access("input").input(5).output("console").start()
```

v2.0

```java
new Program("fibonacci sequence")
	.note("the Program defines the abstract flow of the program. But the actual values are set when the program is executed, later.")
	.thread("input").accepts("number").store("program stack")
	.thread("enumlogic").type("i-based loop").input("thread: input")
    	.define.loop("enumlogic").iterator("i").apply("math: fibonacci")
    .thread("output").returns("console").data("enumlogic: output")
Program("fibonacci sequence").input(2).execute()
```
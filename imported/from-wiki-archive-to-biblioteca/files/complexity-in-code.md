arguably code is simple when it is a single scope. as soon as we introduce the concept of scopes, we introduce different dimensions. 

but not only do Scopes add complexity, archery we must understand what problems Scopes are solving, what benefits do Scopes offer, that genuinely solves a limitation in the code, and in human cognition. 

but at a general rule of thumb, code is simple when it can be memorized. a few variables, a single screen set worth of information. a few functions, essentially what can fit on a single screen, is most of human working memory. once we start adding depth to the system, nesting, data structures, dependencies, we start forming high dimensional structures. and because we cannot visualize this with modern code tools, we often navigate through sophisticated systems, using primitive methods. 

code may be playing text, but plain text has limitations at the structural level. even if it can compress information and structure, that does not mean it is humanly optimal. 

several propositions have been made in this area, because we feel that we could be doing better.... computer science pioneers new we could, we most certainly can!

here is an illustrated example of the stage where code becomes fundamentally unreadable without static analysis. 

```
"<i>" + choice(a, b, c) + "</i>"
```

```
flatten choice(a,b,c) as cc
e(i) + cc
```

or

```
flatten choice(a, b, c) as cc
ccat(e(i), cc)
```

this case we see the utility of programming, as a language but also an explanatory interface. when we structure code we are also explaining the concept of the code, what the code is doing. usually we express comments to define why we are choosing a specific design model of code over another, however comments are not part of the code, they are not a serious tool for inquiry.

notice that at each stage complexity is increasing, but the type of complexity is hidden complexity. there is complexity within the complexity. what this means is that several domains are interacting at once. logic, strings, data structures, and more systems. other fields solve this by introducing boundaries. programming is powerful because those boundaries are integrated and intersect, synchronously, often in parallel. but this creates a parallel sequencing issue, and we human beings cannot process systems in parallel. this is why we don't express code AS nonlinear space, we must fundamentally work with the system linearly, like literature. because the law of complexity expansion, showcases a phenomenon, we can express things linearly, and they can unfold sequentially, in parallel, to create nonlinear complexity. [citation needed]()

## Where documentation is useful and when documentation fails 
documentation is useful when the system needs to be stringed together narratively, like touring a system. documentation is not useful when it tries to explain the code, because this knowledge is tacit for programmers. the whole reason we learn programming is so we can read it express it like a language. the highest performing engineers sparingly used comments, very rarely. because comments simply add a visual cognitive clutter to a system. 

the solution points towards more literative programming; programming that emphasizes itself as a language. this is how mathematics works. because often ideas are  more effectively expressed symbolically than literally... mathematics exploits this. however mathematics also showcases the point where complexity exceeds human working capacity. and this is when we introduce fundamental units of complexity information management, but as applied to computer space; 

- extraction 
- abstraction 
- compression 
- linking 
- communication 

we start to see these fundamental units build into higher orders of units
- interfaces 
- variables 
- functions 

just like Lambda calculus starts math before numbers, our computer model starts programs before generic keyword operators, that we use today. I believe it is fundamental to understand why we are using these units, where do they originate, what problem do they solve, what idea do they represent, and how do we think of programming, when we change these units and shapes? 

a proposed model is metaling's "interface class prototype"

```JS
Transformer
```
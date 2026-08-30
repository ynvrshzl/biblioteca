if a primary, perhaps fundamental issue we face with software engineering, is choice overload (so many designs, so many models, so many options, future -oriented upstream/downstream analysis...)

sourcing from our studies of choice overload / analysis paralysis, one of the principles is reducing boundary space. however, artificial constraints feel optional, unless they are the substrate itself. what this means is, we can combine the principle of artificial constraints, with the principle of interface, to construct an interface for the work we are focusing on, with a bounded search space of constraint. 

that has its own implications we can study separately. 

but for example, if we break down our recent prototype code, something that is fully functional, but cognitively incoherent, far less than it should be. (the fact that code can execute while still being poorly implemented, is really a discussion of its own, for principia cybernetica) 

grammatica is proposed as an interface blueprint solution for authoring code, because if the main issue we face is choice overload, then perhaps the problem is more fundamental than analysis paralysis, perhaps it is different environmental headspaces, different cognitive functions. for example, when we are building prototype code, we are focusing on a product, we are not thinking about systems or models or optimizations or life cycles, we are mostly working with grammar, and that is when programming behaves like a language. however, a secondary headspace is when we are constructing a system, architecture. this headspace has two subsets, architecture out of necessity, and architecture of design. I believe we got stuck in the architecture of design...
... grammatica aims to solve this area, not the whole of programming, which is important. because a tool that does too much, risks becoming too complex to be useful, just like General systems languages! we have to impose our own constraints. our own vocabulary.... so in that case, why not use a separate interface for thinking? a blueprint surface for testing ideas, sketching, building schematics, without being forced to look at an output...

... and that is the fundamental issue we observe, it is a problem with headspaces. 
...

let's break down some of the common design choice overload issues we face in code, and build little grammar units of it.

we can also define the building blocks of language itself, to more cohesively shape this grammar model interface for building code. vocabulary, grammar, syntax, lexica, alphabet, etymology, pragmatics, semantics, these are the building blocks of language. perhaps integrated into grammatica a language for designing languages, but specific to code.

## Principles of Design
the principles of design for grammatica, are to solve the original corset of problems: **choice overload, designing programs while expecting output.** in essence, grammatica decouples the process. 

- **Composable units:**, rather than choosing arbitrary symbols, letters,
- **Transportable:** the purpose of grammatica is to be able to transport one to one, to a real-world program.
- **Memorizable:** arguably one of the most important building blocks of any language, is its ability to be memorized by the human.
- **Ergonomic vs. Intuitive:**  this is parts of a larger case study, but in essence, 

## design guidelines 
building an alphabet of the scale, will require peer review and referencing from real life software engineering phenomenology. 

for example, a litmus test for this language, will be reconstructing a real world working prototype, from a small function, to an api. to showcase the flexible, real world use cases of this interface language. 

## Connection 
what's fascinating ontologically, is that these ideas were not born arbitrarily; the idea for a notation language designed for coding, actually came from inspiration from other complex fields. 

it's fascinating because, programming is already a language, introducing another language on top may seem optional, but as programs scale, so do our choices, design implications, and almost every complex field implements a schematic, an environment for safe prototyping.

code is volatile for prototyping, because the substrate combines execution with human cognitive processing. that is the headspace's problem.

## Prototype construction roadmap 

for this prototype sample, we will construct the alphabet by reconstructing from first principles, problems we faced while building a prototype in code. primarily, the biggest problem with this prototype, was 
- Choice overload
- JavaScript language oddities (for example, an object cannot reference itself, but a class can)

Those are language specific nuances which we will focus on afterward. 

## Litmus test
can this grammar both: 
- Represent the prototype (so that we can build and test without code fragmentation)
- Reassemble to prototype (so that the language remains a one-to-one mapping between the code, and the symbolic ideas)

## Prototype alphabet 
**"Grametes"** are the smallest units of ideas, from a code, represented as symbolic notation sets.

operators, units, symbols, characters, lexica, grammar,

### $+$
The "+" input gramete, represents a single channel of input. this is a single chunk of ontology. notice, different from information theory, which treats information as bits, here, we treat information as ontological chunks.

### $-$
The "-" output gramete, is the polar bear of the input. an output is ontologically what returns.

### $\{a/b/c\}$
a branching segment sequence of code, this does not necessarily represent if/els, rather, it represents multiple choices within the same shared line.

### $+(F(+N-))-$
A network operation


### $+[F]-$
The $+[F]-$ alphabet represents a file. A file in Grammatica terms, is synonymous with a "m" module

it is worth noting that the file Grammy contains multiple symbols, each with significant compose meaning. these symbols are actually composed from smaller primitives

### $\{x\}$
The "{x}" gramete represents a model for a variable. it's name is not known. only it's relationship in the xodespace is known. 




### $[c^c_c]$ or $:$
The "c" class

### $.?(y)$
Property of 

### Pretest
```
f     file
i/o   
{x}   variable
```
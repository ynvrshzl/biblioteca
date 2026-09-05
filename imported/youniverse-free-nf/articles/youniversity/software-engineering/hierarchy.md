# How code is structured: from binary to video games
Software is essentially these 3 parts: Data, Logic, UI.

1. Number systems
   1. [Binary]()
   2. [Hexadecimal]()
   3. [Octal]()
2. Language abstraction
   1. [Machine code]()
   2. [Assembler]()
   3. [Compiler]()
3. Building blocks
   1. [Symbols, operators, comparison, logic]()
   2. [Keywords]()
   3. [Statements]()
   4. [Variables & memory]()
4. Software organization
    1. [Functions]()
    2. [Objects]()
    3. [Classes]()
    4. [Data structures]()
    5. [Modules / Packages]()
    6. [Libraries / APIs]()
    7. [Frameworks]()
5. Structural software
   1. [Middleware, platforms, firmware]()
   2. [Operating systems]()

6. Binary (1s and 0s) – raw data representation in hardware.
7. Machine code (opcodes + operands) – CPU instructions encoded in binary.
8. Assembly language – human-readable mnemonics for machine code.
9.  Low-level language constructs (keywords, operators, variables, statements).
10. Procedures / Functions – grouping instructions into reusable blocks.
11. Data structures (arrays, lists, maps).
12. Objects – encapsulated state + behavior.
13. Classes – blueprints for objects.
14. Modules / Packages – groupings of classes and functions.
15. Libraries / APIs – reusable collections of modules.
16. Frameworks – opinionated, structured environments built on libraries.
17. Applications / Programs – end-user software built from frameworks & libraries.
18. Operating Systems – software platforms that manage hardware and apps.
19. Middleware / Platforms (browsers, databases, cloud runtimes).


---

🗺️ The Map of Abstraction Levels
1. Physics / Hardware

Electrons, transistors, voltage.

No software here, just raw physics.

Most humans never think about this, but it’s the foundation.

2. Binary / Machine Code

Instructions the CPU executes (10101000 style).

Simple operations: load, store, add, jump.

Almost nobody writes this by hand (except reverse engineers/security researchers).

3. Assembly

Human-readable mnemonics for binary.
Example: MOV AX, 1 instead of 10111000.

Still very close to the CPU, architecture-specific.

Useful when performance or hardware control is critical.

4. Low-Level Languages

C, C++, Rust at its lowest.

You manage memory directly.

Gives you speed and power but requires discipline.

Operating systems and performance-critical apps live here.

5. High-Level Languages

Python, JavaScript, Java, C#, etc.

Memory is managed for you.

Rich standard libraries for common tasks.

You can focus on problems instead of memory/registers.

6. Frameworks & Libraries

Prebuilt solutions you plug into your app.

Example: React for UI, Express for web servers, Tauri for cross-platform apps.

Save you from reinventing wheels.

At this point, you’re more of a “composer” than a “builder of bricks.”

7. Application / Program

The product a human interacts with.

Menus, buttons, notifications, workflows.

The place where UI/UX lives.

This is where your Life-OS project sits — tying abstractions together into meaningful experience.

8. Human Experience

The why.

Does the app reduce distraction? Help you focus? Save you time?

If this layer is wrong, everything below it doesn’t matter.

This is where you were reflecting earlier — the human purpose of software.
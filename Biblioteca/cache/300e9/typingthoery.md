# Typing theory


## Typing is a timeless ability
From Programming to Writing, Typing is worth investing.
## Objective
Increase underlying understanding of Ergonomics and Technical of typing
## Language for typing
If every key on the keyboard is arranged in a matrix, each with a position and coordinate, and they coincide directly with typically 10 of the anatomical (fingers) of the Human hand... then the langauge itself can abstract common patterns and perhaps calculate closer and more precise than abstract WPM or complex key-trackingb algorithms.

Below is the methodology for constructing such a language

Clasically, the keyboard is divided into rows, not columns. However, each finger itself traverses a column on the keyboard

We see two sections emerge from the "Matrix": Rows: (number, top, home, bottom, other) and Columns. Assuming the number row is "1"...

```
rows = [1,2,3,4]
cols = [[1,2,3,4,5],[5,4,3,2,1]]
```
## Design

A first design problem emerges: there are two hands and they are mirrored in the column matrix

## Syntax variations

Data-oriented
```
a=[1,3[1]]
```

Tactilce
```
a=[R1,L3]
```

## Micro-granular inspection
Now that the keybaord has been divided into secondary divisions (rows, columns) Each key can be assigned it's corresponding finger column (vertical) and it's row (horizontal). This results in a coordinate-like syntax:

```
a=[1,3[1]]
```
```
a=[R1,L3]
```
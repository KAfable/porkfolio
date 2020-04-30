---
title: "Yet Another Closures Post"
date: "4/22/2020"
published: true
---

## Closures

First off, why are closures important to know? The best answer to this so far in my eyes is because it's a common interview question.  

## The Basics: Lexical Scope

Let's start with what we already know and build up from there.

JS Functions have access to:

1. variables outside of the function
2. variables on the same level of the function

For example take the following code:

```javascript
let outside = "fishbowl";

const checkScope = () => {
    let inside = "goldfish";
    console.log(outside);
    console.log(inside);
};

checkScope(); //logs fishbowl and goldfish
```

JavaScript functions have access to variable in the environment of where it was defined, not where it is called.

# Node instances benchmarks
## Which is the faster method to declare 1 million of objects instances in a simple array?

The methods used in this test are: 
- Factory method using function with arguments and closures, see this [link](https://www.theodinproject.com/lessons/node-path-javascript-factory-functions-and-the-module-pattern#factory-function-introduction) for more informations
- Prototype method using prototype inheritance, as the same as Javascript does for methods like push for arrays, see this [link](https://www.w3schools.com/js/js_object_prototypes.asp) for more informations
- Class method using the keyword class that creates a special function, see this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) for more informations
- Factory method with Object.assign + Object.create, another method but similar to the first but different in terms of performance, see this [link](https://medium.com/javascript-scene/3-different-kinds-of-prototypal-inheritance-es6-edition-32d777fa16c9) for more informations

---

### This is the result of these benchmarks in the terminal:

![benchmark on terminal](benchmark-terminal-v2.jpg)

---

### This is the representation of the same data in a column chart, just to display better the comparison

![benchmark on terminal](benchmark-graph.jpg)

---

# The winners in terms of performance are the class method and the prototype method that have the same performance

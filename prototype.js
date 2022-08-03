function Person (name, age) {
  this.name = name ;
  this.age = age;
}
  
Person.prototype.sayHello = function () {
  console.log('hello!')
}
  
let test = []
console.time("performance prototype for 1 million")
for(let i = 0; i < 1000000; i++) {
  test.push(new Person('jeff', 27));
}
console.timeEnd("performance prototype for 1 million")

const used = process.memoryUsage();
for (let key in used) {
  console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
}

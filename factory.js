const personFactory = (name, age) => {
  const sayHello = () => console.log('hello!');
  return { name, age, sayHello };
};
  
const test = []
console.time("performance factory for 1 million")
for(let i = 0; i < 1000000; i++) {
  test.push(personFactory('jeff', 27))
}
console.timeEnd("performance factory for 1 million")

const used = process.memoryUsage();
for (let key in used) {
  console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
}

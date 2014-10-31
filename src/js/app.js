console.log('win!');

var [a, [b], c, d] = ['hello', [', ', 'junk'], ['world']];
console.log(a + b + c); // hello, world

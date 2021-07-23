const names = "Dewa Gede Agung Ari".split();

const namesUpper = names.map(value => value.toUpperCase());

console.log(namesUpper)

const namesReduce = names.reduce((before, value) => before + " " + value);
console.log(namesReduce);

const namesRight = names.reduceRight((before, value) => before + " " + value);
console.log(namesRight);
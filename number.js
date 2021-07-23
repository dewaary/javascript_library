const input = "12345";

const number = Number(input);

console.log(typeof input);
console.log(typeof number);
console.log(number);

console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

//Number Static Method

const data = Number("12345");
console.log(Number.isInteger(data));

// Number Instance Method
const value = Number(12345);
console.log(value.toString(2));
console.log(value.toLocaleString("id-ID"));
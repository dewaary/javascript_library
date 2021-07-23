// Array Loop
const array = ["Dewa", "Gede", "Agung", "Ari"];

// Anonymous Function
array.forEach(function (value, index) {
    console.log(`${index} : ${value}`);
});

//Arrow Function
array.forEach((value, index) => console.log(`${index} : ${value}`));


// Manghapus index
array.forEach(value => console.log(value));
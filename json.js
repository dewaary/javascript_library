const person = {
    firstName: "Dewa Gede Agung Ari",
    lastName: "Septiyadi",
    age: 23,
    address: {
        country: "Indonesia",
        city: "Bali"
    },
    hobbies: [
        "Coding", "GYM", "Vollyball"
    ]
};

const json = JSON.stringify(person);
console.log(json);

// Conversi to Javascript Object

const jsonObject = JSON.parse(json);
console.log(jsonObject);
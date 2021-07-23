// Object Freeze & Seal

const person = {
    firstName: "Dewa Gede Agung",
    lastName: "Ari Septiyadi"
};

Object.freeze(person);
Object.seal(person);

person.firstName = "Budi";
person.middleName = ""
delete person.lastName;

console.log(person);
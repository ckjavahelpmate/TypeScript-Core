// Array
const numbers: number[] = [1, 2, 3, 4, 5];
console.log(`numbers : ${numbers}`);
for (let num of numbers) {
    console.log(num);
}
console.log("--------------------------------------");

// Set
const names = new Set<string>();
names.add("Sheela");
names.add("Allen");
names.add("Miller");
names.add("Leela");
names.add("Leela");
console.log(names);
for (const name of names) {
    console.log(name);
}
console.log("--------------------------------------");

//Map
const mobiles = new Map<string, number>();
mobiles.set("Samsung", 15);
mobiles.set("Apple", 3);
mobiles.set("Oppo", 8);
mobiles.set("Vivo", 10);
console.log(mobiles);
for (const [mobile, quantity] of mobiles) {
    console.log(`${mobile}=${quantity}`);
}
console.log("--------------------------------------");


//Object
const user = {
    "id": 101,
    "name": "sheela",
    "age": 24,
    "salary": 23500.00
}
console.log( user );
for (const [key, value] of Object.entries(user)) {
    console.log(`${key} : ${value}`);
}
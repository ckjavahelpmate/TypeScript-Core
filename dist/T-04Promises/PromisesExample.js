"use strict";
console.log("Program started");
const promise = () => {
    console.log("promise called");
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("data Loaded");
        }, 3000);
    });
};
promise().then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});
console.log("Program ended");

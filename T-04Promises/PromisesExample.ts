
console.log("Program started");
const promise = (): Promise<string> => {
    console.log("promise called");
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve("data Loaded");
        }, 3000)
    })
}

promise().then((data) => {
    console.log(data);

}).catch((error) => {
    console.log(error);
});
console.log("Program ended");


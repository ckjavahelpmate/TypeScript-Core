console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise 1");
});

Promise.resolve().then(() => {
    console.log("Promise 2");
});

console.log("End");


//------------------------------------------------------------
console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise 1");
});

Promise.resolve().then(() => {
    console.log("Promise 2");
});

console.log("End");

//------------------------------------------------------------
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");

//--------------------------------------------------------------
Promise.resolve()
    .then(() => {
        console.log("A");

        Promise.resolve().then(() => {
            console.log("B");
        });
    })
    .then(() => {
        console.log("C");
    });

//------------------------------------------------------------------
async function test() {
    console.log("A");

    await Promise.resolve();

    console.log("B");
}

console.log("C");

test();

console.log("D");

//---------------------------------------------------------------------
async function test() {
    console.log("1");

    await Promise.resolve();

    console.log("2");

    await Promise.resolve();

    console.log("3");
}

console.log("4");

test();

console.log("5");   

//---------------------------------------------------------------------------
Promise.resolve()
    .then(() => {
        console.log("A");
        return "B";
    })
    .then((value) => {
        console.log(value);
        return "C";
    })
    .then(console.log);

//-------------------------------------------------------------------------
Promise.resolve()
    .then(() => {
        console.log("A");
        throw new Error("Oops");
    })
    .catch(() => {
        console.log("B");
    })
    .then(() => {
        console.log("C");
    });

//------------------------------------------------------------------------
Promise.resolve("Success")
    .finally(() => {
        console.log("Finally");
    })
    .then(console.log);

//----------------------------------------------------------------------

async function test() {
    const result = await 100;

    console.log(result);
}

console.log("A");

test();

console.log("B");

//----------------------------------------------------------------------
async function test() {
    console.log("1");

    await Promise.resolve();

    console.log("2");
}

Promise.resolve().then(() => {
    console.log("3");
});

test();

console.log("4");

//-----------------------------------------------------------------------
setTimeout(() => {
    console.log("A");

    Promise.resolve().then(() => {
        console.log("B");
    });

}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");

//------------------------------------------------------------------------
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve()
    .then(() => {
        console.log("Promise1");
    })
    .then(() => {
        console.log("Promise2");
    });

console.log("End");

//--------------------------------------------------------------------------
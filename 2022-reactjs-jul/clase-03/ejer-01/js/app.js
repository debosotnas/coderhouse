const myArray = [1,2,3,4,5];

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

console.log('-------------------------')

let ii = 0;
while (myArray[ii]) {
    console.log(myArray[ii]);
    ii++; 
} 

console.log('-------------------------')

myArray.forEach( (i) => {
    console.log(i);
});

console.log('-------------------------')

for (let i of myArray) {
    console.log(i);
}

//+++++++++++++++++++++++++++++++

// const a = 5
// let b = a > 18 ? 'algo' : 'otra cosa';

if (a > 18) {
    b = 'algo';
} else {
    b = 'otra cosa';
}


b = a || c;

if (a) {
    b = a
} else {
    b = c;
}


const abc = 'abc: ' + b;
const def = `abc: ${b}`;


class Auto {
    //...
}


// +++++++++++++++++++++++++

const miArray2 = [1,2,3];
const miArray3 = [2, ...miArray2];
// miArray3 ---> [2, 1,2,3];

const id = 5; 
const obj = { 
    foo: "bar", 
    [ "baz" + id ]: 42 
}

/*
obj = { 
    foo: "bar", 
    baz5: 42 
}
*/

// const { a: val } = { a : 2 };
console.log(val);

// ++++++++++++++++

const [ a = 1, b = 2, c = 3, d ] = [ 4, 5 ];


if (!Array.forEach) {
    Array.forEach = () => {

    }
}
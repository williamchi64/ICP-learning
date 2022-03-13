// 4 function
// 4.1 define a function
function abs(x) {
    if (x >= 0) {
        return x;
    }
    return -x;
}
let abs2 = function (x) {
    if (x >= 0) {
        return x;
    }
    return -x;
}
// invoke function
let rand = Math.random();
let out = (rand < 0.5 ? rand: -rand) * 100; console.log(out);  
let round = Math.round(out);
console.log(abs(round)); // work
console.log(abs()); // NaN
console.log(abs(round,round)); // work
// constraint param number
let abs3 = function (x) {
    if (arguments.length > 1) {
        throw 'Parameter over one';
    }
    if (typeof x !== 'number') {
        throw 'Not a Number';
    }
    if (x >= 0) {
        return x;
    }
    return -x;
}
// console.log(abs3()); // error
// console.log(abs3(round,round)); // error
console.log(abs3(round)) // work
// use rest
console.log('abs4');
let abs4 = function (x,...rest) {
    if (rest.length > 0) {
        throw 'Parameter over one';
    }
    if (typeof x !== 'number') {
        throw 'Not a Number';
    }
    if (x >= 0) {
        return x;
    }
    return -x;
}
// console.log(abs4()); // error
// console.log(abs4(round,round)); // error
console.log(abs4(round)) // work

// 4.2 scope
let aFunc = function () {
    let x = 1;
    x += 1;
    var y = 1;
    y += 1;
}
// x += 2; // x is not defined
// y += 2; // y is not defined
// ** closure let variable be useful out of scope
// variable visibity of an inner function
let aFunc2 = function() {
    let x = 1;
    let aFunc21 = function() {
        let y = x + 1;
        console.log(y);
    }
    aFunc21();
}
aFunc2();
// varibale shadowing
let aFunc3 = function() {
    let x = 'A';
    let aFunc3 = function() {
        let x = 'B';
        console.log("inner", x);
    }
    aFunc3();
    console.log("outer", x);
}
aFunc3();
// js executor state variable before execute, and assign it as code order arrange.
let aFunc4 = function () {
    var x = 'x' + y;
    console.log(x);
    var y = 'y'; // state before execution
}
aFunc4();
// global variable
let x = 1;
let aFunc5 = function(){
    x = 5;
    console.log(x);
}
aFunc5();
console.log(x);
// windows contain all global variable by default (var only)
console.log('global:' + x);
console.log('global:' + window.x); // let do not affect window
var y = 2;
console.log('global:' + y);
console.log('global:' + window.y); 
// function used as variable
// var z = 'xxx';
// window.alert(z);

// z = 'yyy';
// var old_alert = window.alert;
// window.old_alert(z);

// window.alert = function() {}; // let original function uneffect
// window.alert('zzz');
// conclusion: global scope uniqueness

// ** JS standard, use a global variable and fields to limit variable effect on window scope.
var global_variable = {};
global_variable.name = 'ChiChi';
global_variable.aFunc = function(x) {
    return x;
}
// var vs let
// var scope visibility problem
let aFunc6 = function () {
    for (var index = 0; index < 10; index++) {
        console.log(index);
    }
    console.log(index + 1);
}
aFunc6();
// let solve the problem
let aFunc7 = function () {
    for (let index = 0; index < 10; index++) {
        console.log(index);
    }
    // console.log(index + 1); // not visible
}
aFunc7();
// const
const PI = 3.14; console.log(PI);
// PI = 3; // error, Assignment to constant variable.

// 4.3 method, function in object
let chi = {
    name: 'Chi',
    birth: 1996,
    age: function() {
        let now = new Date().getFullYear();
        return now - this.birth;
    }
}
console.log(chi.age());
// this = the executor of the function, 
function getAge() {
    let now = new Date().getFullYear();
    return now - this.birth;
}
let chi2 = {
    name: 'Chi2',
    birth: 1997,
    age: getAge
}
console.log(chi2.age()); // chi2 as executor
console.log(getAge()); // window as executor
// apply, change this reference
console.log(getAge.apply(chi2));
"use strict";
// alert('hello world');
// 1. define a variable
var aVar = 'A variable';
console.log(aVar);
// cannot use number as var start
// var 1err = 'sth';
var $var = '$ start'; console.log($var);
var _var = '_ start'; console.log(_var);
// 1.1 ES6 suggest using let to claim a variable 
let i = 0;

// 3. type
// 3.1 number
console.log('3.1 number');
var aNumber = 123.123; console.log(aNumber);
var aNumber = 123; console.log(aNumber);
var aNumber = 1.23e3; console.log(aNumber);
// NaN, not a number
var notANumber = NaN; console.log(notANumber);
// Infinity, an extremely large number
var infinity = Infinity; console.log(infinity);

// 3.2 string
console.log('3.2 string');
var aStr = 'abc'; console.log(aStr);
var aStr = "abc"; console.log(aStr);
var aStr = `one line 
another line`; console.log(aStr);
// special string
console.log('special string');
var aStr = "\'"; console.log(aStr);
var aStr = "a\nb"; console.log(aStr);
var aStr = "a\tb"; console.log(aStr);
var aStr = "\u4e2d"; console.log(aStr);
var aStr = "\x41"; console.log(aStr);
// string concat
console.log('string concat');
var conStr = 'a c' + 'c b'; console.log(conStr);
var conStr = `hello ${conStr}`; console.log(conStr);
// string method
var aStr = 'asdFCv';
var len = aStr.length; console.log(len);
var up = aStr.toUpperCase(); console.log(up);
var low = aStr.toLowerCase(); console.log(low);
var ind = aStr.indexOf('d'); console.log(ind);
var subStr = aStr.substring(1,3); console.log(subStr);
// string immutable
var aStr = 'asdfghj'; console.log(aStr[0]);
// aStr[0] = 'b'; console.log(aStr[0]); // mutate a string cause error

// 3.3 boolean
console.log('3.3 boolean');
var aBool = true; console.log(aBool);
var aBool = false; console.log(aBool);
// logical operator
console.log('logical operator');
var logicOp = true && false; console.log(logicOp);
var logicOp = true || false; console.log(logicOp);
var logicOp = !true; console.log(logicOp);
// comparison operator 
console.log('comparison operator');
var compOp = 1 == '1'; console.log(compOp);
var compOp = 1 === '1'; console.log(compOp);
// right way to check NaN
console.log('right way to check NaN');
var compOp = NaN === NaN; console.log(compOp);
var compOp = isNaN(NaN); console.log(compOp);
// right way to do float opt
console.log('right way to do float opt');
var compOp = (1/3) === (1-2/3); console.log(compOp);
var compOp = Math.abs((1/3)-(1-2/3)) < 1e-16; console.log(compOp);

// 3.4 null & undefined
console.log('3.4 null & undefined');
var aNull = null; console.log(aNull);
var aUndefined = undefined; console.log(aUndefined);

// 3.5 array
var arr = [1,2,null,'abc',true]; console.log(arr);
var arr = Array(1,2,null,'abc',true); console.log(arr);
// get by index
var arr1 = arr[0]; console.log(arr1);
var arr1 = arr[5]; console.log(arr1);
// change length of array
arr.length = 10; console.log(arr);
arr.length = 2; console.log(arr);
arr[4] = 'sth'; console.log(arr);
// get index by content
var arr = [1,2,3,'1','2','3']; 
var ind = arr.indexOf(1); console.log(ind);
var ind = arr.indexOf('1'); console.log(ind);
// get slice
var subArr = arr.slice(1,3); console.log(subArr);
// add, cut content 
var push = arr.push('4'); console.log(arr, 'index:', push);
var pop = arr.pop(); console.log(arr, pop);
var unshift = arr.unshift(0); console.log(arr, 'index:', unshift);
var shift = arr.shift(); console.log(shift, arr);
// sort
var arr = ['B', 'b', 'a', 'A', null, [1, 2], 3, ['c', 'a']];
var sort = arr.sort(); console.log(arr, sort);
// reverse
var reverse = arr.reverse(); console.log(arr, reverse);
// concat array, immutable
var arr1 = arr.concat([9,'8']); console.log(arr, arr1);
// join
var str = arr.join('-'); console.log(str);
// multi dimension
var arr = [[1,2],[3,4],[5,6]]; console.log(arr, arr[2][1]);
var find = arr.find(e => e.find(f=>f > 2)); console.log(find);

// 3.6 Object
var aPerson = {
    name: 'Chi',
    age: 3,
    tags: ['js','java','frontend']
};
console.log(aPerson);
// get by name
var personField = aPerson.name; console.log(personField);
var notAField = aPerson.sth; console.log(notAField);
// delete a field
delete aPerson.name; console.log(aPerson, aPerson.name);
// add new field to a obj
aPerson.sth = 'sth'; console.log(aPerson);
// if a field or function in a obj
var bool = 'age' in aPerson; console.log(bool);
var bool = 'toString' in aPerson; console.log(bool);
// if a field or function are own properties of a obj, not a prototype
var bool = aPerson.hasOwnProperty('age'); console.log(bool);
var bool = aPerson.hasOwnProperty('toString'); console.log(bool);

// 3.7 Map & Set
var map = new Map([['Tom', 100],['Jack', 90],['Sean', 80]]);
var score = map.get('Jack'); console.log(score);
var setting = map.set('admin', 129); console.log(map, setting);

var set = new Set([1,2,1,2,1]); console.log(set);
var bool = set.has(3); console.log(bool);
var adding = set.add(3); console.log(set, adding);

// iterate
// for (const key in map) {
//     console.log(key);
// } // not affect
for (const iterator of map) {
    console.log(iterator);
}
// for (const key in set) {
//     console.log(key);
// } // not affect
for (const iterator of set) {
    console.log(iterator);
}
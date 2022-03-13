"use strict";
// 2 process controll
// 2.1 if else
var score = Math.random() * 100;
if (score >= 60 && score < 70) {
    console.log('D');
} else if (score >= 70 && score < 80) {
    console.log('C');
} else if (score >= 80 && score < 90) {
    console.log('B');
} else if (score >= 90) {
    console.log('A');
} else {
    console.log('F');
};
// 2.2 loop - while
var score = Math.round(Math.random() * 60);
while(score < 60) {
    score ++;
    console.log(score, 'F');
}
console.log(score, 'D');
// 2.3 loop - for
var arr = [1,2,3,'4',5,'6','7',null,[9]];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
}
for (const key in arr) {
    const element = arr[key];
    console.log(element);
}
for (const iterator of arr) {
    console.log(iterator);
}
arr.forEach(element => {
    console.log(element);
});
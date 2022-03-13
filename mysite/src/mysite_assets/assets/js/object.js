// 5 useful object
console.log(typeof 123);
console.log(typeof '123');
console.log(typeof true);
console.log(typeof NaN);
console.log(typeof []);
console.log(typeof {});
console.log(typeof Math.abs);
console.log(typeof undefined);
// 5.1 Date
let now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

console.log(now.getTime());
console.log(new Date(1));
console.log(now.toLocaleString());
console.log(now.toGMTString());
// 5.2 JSON, object {}, array[], key:value
// JSON <-> js object
let user1 = {
    name: "Chi",
    age: 26,
    gender: "male"
};
console.log(user1);
let JSONstr = JSON.stringify(user1);
console.log(JSONstr);
let obj = JSON.parse(JSONstr);
console.log(obj);
// 5.3 Ajax
/*
    original: <xhr> async request
    jQuery: $("#name").ajax("")
    axios
*/
// 6 object programing
// 6.1 what is OOP
/*
    class: template
    object: instance
    **different in javascript
    
    prototype: template
*/
let user2 = {
    name: "Chi2",
    age: 25,
    gender: "female",
    run: function() {
        console.log(this.name + " is running");
    }
};
let user3 = {
    name: "Chi3"
};
// js inheritance, old way
user3.__proto__ = user2;
user2.run();
user3.run();
// prototype user3 <- user2 <- object
console.log(user3);

// js class, before ES6
function Student(name) {
    this.name = name;
}
Student.prototype.writeHW = function() {
    console.log(this.name + " is writing HW");
}
let stu1 = new Student("Chi4");
console.log(stu1);
stu1.writeHW();
console.log(Student.prototype);
// js class, after ES6
class Student2{
    constructor(name) {
        this.name = name;
    }
    writeHW() {
        console.log(this.name + " is writing HW");
    }
}
let stu2 = new Student2("Chi5");
console.log(stu2);
stu2.writeHW();
console.log(Student2.prototype);
// js inheritance, new way
class Pupil extends Student2 {
    constructor(name, grade) {
        super(name);
        this.grade = grade;
    }

    play() {
        console.log(this.name + " is playing");
    }
}
let pup = new Pupil("Chi6");
console.log(pup);
pup.writeHW();
pup.play()
console.log(Pupil.prototype);
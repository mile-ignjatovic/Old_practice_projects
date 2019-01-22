// function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calcAge = function() {
    console.log(2018 - this.yearOfBirth);
}

var john = new Person('John', 1990, 'teacher');

var jane = new Person('Jane', 1993, 'striper');
var mark = new Person('Mark', 1969, 'retired');

john.calcAge(); 
jane.calcAge();
mark.calcAge();
*/

// Object.create
/*
var personProto = {
    calcAge: function() {
        console.log(2018 - this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 1990;
john.job = 'striper';

var jane = Object.create(personProto, {
    name: {value: 'jane'},
    yearOfBirth: {value: 1993},
    job: {value: 'striper'},
})
*/

// primitives vs objects

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i< arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calcAge(el) {
//     return 2018 - el;
// }

// console.log(arrCalc(years, calcAge));

// function isFullAge(el) {
//     return el >= 18;
// }

// console.log(arrCalc(arrCalc(years, calcAge), isFullAge));

// function game() {
//     var score = Math.floor(Math.random() *10);
//     console.log(score>=5);
// } 
// game();

// (function(param) {
//     var score = Math.floor(Math.random() *10);
//     console.log(score>=5 - param);
// })(3); // 3 je param i ovo je IIFE funkcija koja se samopoziva i koja je anonimna
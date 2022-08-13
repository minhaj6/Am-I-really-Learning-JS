console.log("hello");
// alert('yooooo');


var b = "smoothie";
console.log(b);

var someNumber = 45;
console.log(someNumber);


document.getElementById('someText').innerHTML = "Hey there! Why I am being \
    inconsistent in using single quotes and double qoutes?";

// var age = prompt("Insert a number");
var age = 45;
document.getElementById('promptNumber').innerHTML = 'Inserted number: ' + age;

// numbers in js

someNumber++;
console.log(someNumber);


// function definition

function greetings(whatname) {
    var result = "Hello " + whatname;
    console.log(result);
}

// var whatname = prompt("Whats you name bruh?");
var whatname = "Minhaj"
greetings(whatname);


// Loops

num = 0;
const nums = [];
while (num < 100) {
    num++;
    if (num % 20 == 0) {
        console.log(num);
    }
}

for (let i = 0; i < 100; i++) {
    nums.push(i);
}
console.log(nums);


// dictionary is called just "object" in javascript
let obj = {first: "minhaj", last: "shovon"};
console.log(obj);
console.log(obj.first);
console.log(obj['last']);


console.log("------------------------")



let fruits = new Array("banana", "apple", "mango", "pineapple", "jackfruit");

for (let i=0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("------------------------")


let student = {
    first: "Cherlotte",
    last: "Ahmad", 
    age: 23,
    studnetInfo: function() {
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};

console.log(student.studnetInfo());

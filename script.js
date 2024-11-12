console.log('Hello!');


// 'use strict';



var myName = "Mustapha";
var myNumber = 5;
var myBoolean = true;
var myArray = [1, "hb", "nokia", ["a", "p", "c"], 5];
var myObject = {
  name: "Mustapha",
  age: 25,
  isStudent: true,
  hobbies: ["reading", "coding", "gaming"],
  showName: function () {
    console.log("Mustapha");
  }
};





function printName(nameToPrint) {
  console.log(nameToPrint);
}

printName(myName);

myName = "Ali";
printName(myName);

var idNumber = 1;

let secondNumber = 5;

const thirNumber = idNumber + secondNumber;

idNumber = idNumber;

console.log(idNumber);

// const myName = "Mustapha";

const greeting = "Hello, ";


// greeting = "Hi, ";

console.log("Welcome, " + myObject.name);

let name = "Mustapha", age = 25, isStudent = true;


// Create a function that takes an object as an argument and prints out the bio of the person

"Mustapha is 25 years old and he is a student. He loves reading, coding, and gaming."

// {
//   name: "Mustapha",
//   age: 25,
//   hobbies: "reading, coding, gaming",
//   isStudent: true
// }


// Class task: create a bio from a person object
function myBio(obj) {
  // "Mustapha is 25 years old and he is a student. He loves reading, coding, and gaming."
  console.log(obj.name + " is " + obj.age + " years old and he is" + (obj.isStudent ? " a student " : " not a student.") + " He loves " + obj.hobbies + ".");
}

myBio({
  name: "Boris",
  age: 45,
  hobbies: "fighting, sleeping",
  isStudent: false
});










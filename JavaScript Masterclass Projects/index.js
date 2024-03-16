// when we are writing Javascript, the strategy is to think about what steps we need(Algorithm) and then convert those steps into code



// variable
// var firstname = "Oluwasegun";
var lastname = "Ayodeji";
var address = "7, New-Jerusalem street, Alakuko";

// data types as object

var userdetails = {
    firstname: "Oluwasegun",
    lastname: "Ayodeji",
    age: 10
}; 

console.log(userdetails.firstname);     
userdetails.newProperty = true;
console.log(userdetails);
delete userdetails.newProperty;
console.log(userdetails);
// in js object we have two types of notations which are 1. DOT NOTATION & 2. BRACKET NOTATION: its used when dot notation cannot be used, i.e
console.log(userdetails['first-boy']);

// we can have an object inside an object as object is also a value
// we can also have a function inside an object, its called method, a function is also another type of value
const username = {
    firstname: "Oluwasegun",
    lastname: "Ayodeji",
    year: 10,
    rating: {
        power: 20,
        shooting: 30

    },
    lenz: function ayolenz() {
        console.log('function inside object')
    }
};
console.log(username.rating.power);
username.lenz();

// destructuring: its an easier way to take properties out of an object 
// const firstname = username.firstname;
const {firstname, year} = username;
console.log(firstname);
console.log(year);

// built-in objects are objects provided by the language, e.g; console and math....when used with the log or random functions approximately then they also becomes a method


// two built-in objects to consider are: 1. JSON and 2. Local storage


// JSON object is basically a syntax similar to javascript object but with less features i.e -JSON doesnt support single quote strings, only double quote, it also doesnt support functions

// JSON syntax is universal, can be understood by almost every programming language while javascript syntax is only undestood by javascript. therefore, JSON is used when we send data btw computer and also when we store data

// JSON built-in object.. to convert to JSON object
console.log(JSON.stringify(username));
// to convert back to Javascript object
const jsonString = JSON.stringify(username);
console.log(JSON.parse(jsonString));

// Local Storage is used to save values more permanently unlike variables which are temporary, in Local storage values doesnt get deleted when u refresh the page unlike variables.. it only uses strings
console.log(localStorage.getItem('result'));

// data types as array

var shoppingitems = ["bag", "shoe", "shirts", "pen", "book"];



// index of items in an array is the position of items in the array
console.log(shoppingitems[2]);

// each array in js has associated methods with them
// the lenght method: the size of the array of number of items in the array
console.log(shoppingitems.length);
// push method
shoppingitems.push("paper");
console.log(`this is my arrays ${shoppingitems}`);
// unshift method
shoppingitems.unshift("cake");
console.log(shoppingitems);
// pop method
shoppingitems.pop();
console.log(shoppingitems);
// shift method
shoppingitems.shift("shoe");
console.log(shoppingitems);
// splice method
/*splice is use to remove a value from an array and it has two numbers
- the first is the index we wan to remove
- the second is the no of values to remove*/
shoppingitems.splice(0, 1);
console.log(shoppingitems);
// arithemetic operations in js
var a = 2;
var b = 6;

a + b
console.log(a + b);
// alert, confirm, prompt  
var message = confirm("welcome to nigeria");
// console.log(message);

const d = 5;
const e = 10;

d + e
console.log(d + e);

let result = b + 2
console.log(result);

a = 5;
console.log(a);

a = a + 10
console.log(a);

// logical operators

// and operator
console.log(0.2 >= 0 && 0.2 < 1/3)

// or operator
console.log(true || false);

// not operator
console.log(!true);

// a scope limits where a variable exists

// date 'get method'

const da = new Date();

console.log(da);

if (new Date().getHours() < 18) {console.log('good morning')}




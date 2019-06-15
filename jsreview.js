var names = ["Ben", "Naziia", "Roger", "Maurice", "Helena"];
console.log(names)
for (let i=0; i<names.length; i++) {  //(let i=names.length -1; i>=0; i--)
  console.log(i)
  console.log(names[i]);
  var child = document.createElement('div');
  child.innerHTML = names[i];
  child = child.firstChild;
  document.getElementById('test').appendChild(child);
}

function printName(name) {
  console.log(`Hello! My name is ${name}. How are you?`)
  return `Hello! My name is ${name}. How are you?`
}

var greeting = printName("Ben")
printName("Naziia")
printName("Roger")
console.log(greeting)

//Take an array of names and print out a greeting for each name
for (let i=names.length -1; i>= 0; i--) {
  var greeting = printName(names[i]);
  var child = document.createElement('div');
  child.innerHTML = greeting;
  document.getElementById('test').appendChild(child);
}

function printName(name) {
  console.log(` ${name} was greeted`)
  return `${name} was greeted`
}

/* Exercise 2 */
function addNumbers(num1, num2) {
  return num1 + num2
}
 var totalNum= addNumbers(10, 85);
console.log(totalNum);

var totalNum= addNumbers(22, 1456);
console.log(totalNum);

var totalNum= addNumbers(2, 5);
console.log(totalNum);

/* Exercise 3  part -1 */
var multiplyNumbers = function(num1, num2) {
return num1 * num2
}
var total = multiplyNumbers(5, 25);
var total = multiplyNumbers(22, 1456);
var total = multiplyNumbers(2, 5);

/* part - 2 */
var subtractNumbers = (num1, num2) => {    //=> Arrow function
  return num1 - num2
}
var total = subtractNumbers(10,5);
console.log(total);
var total = subtractNumbers(1325,323);
console.log(total);
var total = subtractNumbers(222,49);
console.log(total);

/* part -3 */
var changedNum = (num) => {
  return num * 5
}
let newNum = changedNum(10)
console.log(newNum)

var changedNum2 = num => num * 5;
let newNum2 = changedNum2(8);
console.log(newNum2)

//run changedNum2 with 15
//run changedNum2 with 22
var changedNum2 = num => num * 5;
let newNum2 = changedNum2(15);
console.log(newNum2)
//run changedNum2 with 50
var changedNum2 = num => num * 5;
let newNum2 = changedNum2(22);
console.log(newNum2)

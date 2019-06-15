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
 var num1 = 10;
 var num2 = 85;
 result = num1 + num2;

addNumbers(num1, num2);

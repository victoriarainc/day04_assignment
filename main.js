// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(number1, number2){
  if (number1 > number2) {
  return number1;
}
else {
  return number2;
}
}
console.log(max(3, 7));



// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(x, y, z){
  if (x > y || x > z) {
    return x;
  }
else if (y > z) {
  return y;
}
else {
  return z;
}
}
console.log(maxOfThree(1, 2, 3));


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
  if (char === 'a' || 'e' || 'i' || 'o' || 'u' || 'y') {
    return true;
  }
  else {
    return false;
  }
}
console.log(isVowel('g'))


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(param1, param2){
  return param1 + param2
}
console.log(sum(4, 5));

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(para1, para2, para3){
  return (para1 + para2 + para3)/3
}
console.log(avg(6, 4, 9));

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(string){
  return string.length
}
  console.log(getLength('thisisastring'));


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(param1, param2){
  if (param2>param1) {
    return true;
  }
  else {
    return false;
  }
}
console.log(greaterThan(1, 2));


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(firstName) {
  return 'Hello' + ' ' + firstName + '!';
}
console.log(greet('Victoria'));



// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib(adjective, color, animal, noun) {
  return (adjective + ' ' + color + ' ' + animal + ' ' + 'jumps over the' + ' ' + noun);
}

console.log(madlib('slow', 'blue', 'jellyfish', 'moon'));

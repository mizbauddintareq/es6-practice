/* 1) Write an arrow function that will take 3 parameters, will multiply
the parameters and will return the result. */

/* const multiply = (num1, num2, num3) => num1 * num2 * num3;
console.log(multiply(3, 2, 6)); */

/* 2) Write the following sentence in three lines and print the result:
I am a web developer. I love to code. I love to eat biryani. */

/* const first = "I am a web developer.";
const second = "I love to code.";
const third = "I love to eat biryani.";

const result = `${first + " " + second + " " + third}`;
console.log(result);
 */

/* 3) Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result. */

/* const add2Numbers = (num1, num2 = 0) => num1 + num2;
console.log(add2Numbers(60, 90)); */

/* Write an arrow function where it will do the following:

a) It will take an array where the array elements will be the
name of your friends. 
b) Check if the length of each element is even, push elements
with even length to a new array and return the result. */

/* const namesOfFriends = ["abu", "babuul", "kabul", "cabuul", "dabul", "faabul"];

const evenName = (names) => {
  const bestFriends = [];
  for (const name of names) {
    if (name.length % 2 === 0) {
      bestFriends.push(name);
    }
  }
  return bestFriends;
};
console.log(evenName(namesOfFriends)); */

/* Write an arrow function where it will do the following:

a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result. */

/* const numbers = [12, 13, 14, 15, 16, 17, 18, 19, 20];

const simpleMath = (numbers) => {
  let total = 0;
  for (const num of numbers) {
    const square = Math.pow(num, 2);
    total += square;
  }
  const average = (total / numbers.length).toFixed(2);

  return parseFloat(average);
};

console.log(simpleMath(numbers)); */

/* Write an arrow function where it will do the following:

a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the result */

/* const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [12, 13, 14, 15, 16, 117, 18, 19, 20];

const combineArray = (first, second) => {
  const newArr = [...first, ...second];
  const max = Math.max(...newArr);
  return max;
};
console.log(combineArray(arr1, arr2));
 */

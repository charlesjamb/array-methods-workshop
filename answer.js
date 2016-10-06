// Write a function called printPositives that takes an array and uses the 
//forEach method to print only the positive numbers.

var positiveAndNegativeNumbers = [2, -4, 3, -5, 100, -Infinity];

function printPositives(array) {
    var n = [];
    array.forEach(function(number, idx) {
        if (number > 0) {
            n.push(number);
        }
    })
    return n;
};

var onlyPositiveEach = printPositives(positiveAndNegativeNumbers);
// console.log(onlyPositiveEach);

// Similar to the previous exercise, write a function called getPositives that takes an array 
// and uses the filter method to return a new array with only the positive numbers.

function getPositives(number) {
    return number > 0;
}

var onlyPositiveFilter = positiveAndNegativeNumbers.filter(getPositives);
// console.log(onlyPositiveFilter);

// Re-do exercise 1 by first filtering the input array, and then printing the numbers from the filtered array.
// Your code will look something like: return arr.filter(...).forEach(...).



/* Write a function called filterArray that takes a callback function and an array as arguments. 
Your filterArray function should return a new array that contains only the elements where the callback 
function returns true.
NOTE: This is a trick question. The answer is a one-liner and you are allowed to use array.filter :)*/

var trickQuestion = [true, 0, false, 1];

function filterArray(number) {
	return number == true;
}

var answerTrickQuestion = trickQuestion.filter(filterArray);
console.log(answerTrickQuestion);


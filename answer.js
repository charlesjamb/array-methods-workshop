
// Write a function called printPositives that takes an array and uses the forEach method to print only the positive numbers.

var positiveAndNegativeNumbers = [2, -4, 3, -5, 100, -Infinity];

function printPositives(number, idx) {
    return number[idx] > 0;
};

var onlyPositiveEach = positiveAndNegativeNumbers.forEach(printPositives);
console.log(onlyPositiveEach);

// Similar to the previous exercise, write a function called getPositives that takes an array 
// and uses the filter method to return a new array with only the positive numbers.

function getPositives(number) {
    return number > 0;
}

var onlyPositiveFilter = positiveAndNegativeNumbers.filter(getPositives);
console.log(onlyPositiveFilter);
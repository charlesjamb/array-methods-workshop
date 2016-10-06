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
//console.log(onlyPositiveFilter);

// Re-do exercise 1 by first filtering the input array, and then printing the numbers from the filtered array.
// Your code will look something like: return arr.filter(...).forEach(...).

function x(arr) {
	arr.filter(getPositives).forEach(function(ele) {
		console.log(ele)
	})
}
//x(positiveAndNegativeNumbers)

/* Write a function called filterArray that takes a callback function and an array as arguments. 
Your filterArray function should return a new array that contains only the elements where the callback 
function returns true.
NOTE: This is a trick question. The answer is a one-liner and you are allowed to use array.filter :)*/

var trickQuestion = [true, 0, false, 1];

function filterArray(number) {
	return number == true;
}

var answerTrickQuestion = trickQuestion.filter(filterArray);
//console.log(answerTrickQuestion);

/*Write a function called longestWord that takes a string as argument, and returns the longest word in the string. 
You should use Array.prototype.reduce to do your work.
Hint: You can use String.prototype.split to split the string into an array of words.*/

function longuestWord(str) {
	var stringSplitted = str.split(' ');
	console.log(stringSplitted);
	var word = stringSplitted.reduce(function(previousValue, currentValue) {
		return previousValue.length > currentValue.length ? previousValue : currentValue;
	}, 0);
	console.log(word);
}

//longuestWord('This is a sentence to be split');

/* Write a function called countVowels that takes a string and returns the number of vowels in the string. 
You should use Array.prototype.reduce to do your work.
For the string "The quick brown fox", the output should be 5 because there is one e, one u, one i and two os.
Hint: You can use String.prototype.split again. 
	There is a way to use it to split a string by character. Try to Google it :)
Hint 2: You can create an array of vowels and use Array.prototype.indexOf to check if the current letter is a vowel.*/

var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

function countVowels(str) {
	var splitByLetters = str.split('');
	return splitByLetters.reduce(function(counter, ele){
		if(vowels.indexOf(ele) > -1) {
			counter += 1;
		}

		return counter;
	}, 0);
}

//console.log(countVowels('This is a string'));
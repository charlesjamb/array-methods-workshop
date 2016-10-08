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

/*Write a function called highLow that takes an array of numbers,
 and returns an object with a property highest containing the highest number,
  and a property lowest containing the lowest number, using Array.prototype.reduce.
For example, starting with [1, -10, 20, 40, 5], your function should return {highest: 40, lowest: -10}.
Hint: Javascript has a special value called Infinity, which is higher than any other number. 
See if you can initialize your reduce accumulator with Infinity and -Infinity :)*/

var arrayOfNumber = [Infinity, 4, -Infinity, 2, 1];

function highLow(array) {
	
	var resultObject = array.reduce(function(obj, num) {
		if (num > obj.highest) {
			obj.highest = num;
		}
		else if (num < obj.lowest) {
			obj.lowest = num
		}
		return obj;

	}, {highest: -Infinity, lowest: Infinity})

	return resultObject;
}


// console.log(highLow(arrayOfNumber));

/*Expanding on exercise 6, write a function called highLowTwo that takes an array of numbers, and returns the higest,
 second highest, lowest, and second lowest numbers.*/

function highLowTwo(array) {
	
	var resultObject2 = array.reduce(function(obj, num) {
		if (num > obj.secondHighest) {
			obj.secondHighest = num;
			if (num > obj.highest) {
				obj.secondHighest = obj.highest;
				obj.highest = num;
			}
		}

		if (num < obj.secondLowest) {
			obj.secondLowest = num;
			if (num < obj.lowest) {
				obj.secondLowest = obj.lowest;
				obj.lowest = num;
			}
		}

		return obj;
		//console.log(obj);

	}, {highest: -Infinity, secondHighest: -Infinity, lowest: Infinity, secondLowest: Infinity})

	return resultObject2;
}

//console.log(highLowTwo(arrayOfNumber));

/*Write a function called countChars that takes a string, and returns an object 
where the keys are letters, 
and the value is the number of times that letter appears.*/

function splitByLetters(str) {
	var onlyLetters = str.replace(/\W/g, '').toLowerCase();
	return onlyLetters.split('');
}

function splitFilter(arr) {
	return arr.reduce(function(obj, letter) {
		if(obj[letter]) {
			obj[letter] += 1
		} else {
			obj[letter] = 1
		}
		return obj;
	}, {})
}

//console.log(splitFilter(splitByLetters('Hello, world!')));

/*
For this exercise, we want to use `Array.prototype.reduce` to transform 
our array of people into an object, keyed with the unique ID.

The end result should look like this:

```json
{
  "KeXoYg92is": {
    "id": "KeXoYg92is",
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@smith.com"
  },
  "NkALmSWtUp": {
    "id": "NkALmSWtUp",
    "firstName": "Donald",
    "lastName": "Duck",
    "email": "don@disney.com"
  },
  "m7LPbJYSUg": {
    "id": "m7LPbJYSUg",
    "firstName": "John",
    "lastName": "Vader",
    "email": "vader@darkside.com"
  }
}
*/

var people = [
  {
    id: "KeXoYg92is",
    firstName: "John",
    lastName: "Smith",
    email: "john@smith.com"
  },
  {
    id: "NkALmSWtUp",
    firstName: "Donald",
    lastName: "Duck",
    email: "don@disney.com"
  },
  {
    id: "m7LPbJYSUg",
    firstName: "John",
    lastName: "Vader",
    email: "vader@darkside.com"
  }
]

function uniqueID(arr) {

	var buildingTheObj = arr.reduce(function(obj, person) {
		if (!obj[person.id]) {
			obj[person.id] = person;
		}
		return obj;	
	}, {});
	return buildingTheObj;
};

//console.log(uniqueID(people));

/*
## Exercise 10
Expanding on the previous exercise, this time we are going to create an index on **first names**.
Notice how in the previous exercise, each ID was unique. 
In this case, two people have the same first name.

We want to create a function called `peopleByFirstName` 
that will take an array of people and return something that looks like this:
*/

function peopleByFirstName(arr) {

	var construction = arr.reduce(function(obj, person) {
		if (!obj[person.firstName]) {
			obj[person.firstName] = [person];
		}
		else if (obj[person.firstName]) {
			//console.log([person]);
			obj[person.firstName].push(person);
		 }
		return obj;
	}, {});
	return construction;
};

console.log(peopleByFirstName(people));
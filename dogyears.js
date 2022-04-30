// creating a variable and assigning my age (30) to it. 

const myAge = 30;

// creating a variable and assigning it the number 2

let earlyYears = 2;

earlyYears *= 10.5;

// creating a variable and assigning it the value of myAge - 2

let laterYears = myAge - 2;

laterYears *= 4;

// console.log(earlyYears);
// console.log(laterYears);

//creating a variable and assigning it the value of earlyYears + laterYears;

let myAgeInDogYears = earlyYears + laterYears;

// creating a variable and assigning it a string of my name.  calling the toLowerCase method to make all lowercase letters

const myName = ('Ryan').toLowerCase();

// printing to the console a string of my name, age, and age in dog years. 

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)


/*
let js = 'amazing';
if(js === 'amazing') alert('javaScript is FUN!!');
console.log(8 + 34 + 21 - 12);
*/

/* Assignments : 
   Chapter : Values And Variables 

let country = 'India';
let continent = 'Asia';
let population = 1406631776;
console.log(country, continent, population);
*/

/********** Coding Challenge #1 ****************

let marksWeight = 78;
let marksHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;
let marksBMI = marksWeight / (marksHeight ** 2);
let johnBMI = johnWeight / (johnHeight ** 2);
let markHigherBMI = marksBMI > johnBMI;
console.log(marksBMI, johnBMI, markHigherBMI);


marksWeight = 95;
marksHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;
marksBMI = marksWeight / (marksHeight ** 2);
johnBMI = johnWeight / (johnHeight ** 2);
markHigherBMI = marksBMI > johnBMI;
console.log(marksBMI, johnBMI, markHigherBMI);
*/

/* Template String */
const firstName = "Sushil";
const birthYear = 1990;
const job = "Programmer";
const now = 2022;

const nameStr = "I'm " + firstName + ", a " + (now - birthYear) + " years old " + job + "!!";
console.log(nameStr);

//Template String
const newNameStr = `I'm ${firstName}, a ${now - birthYear} years old ${job}!!`;
console.log(newNameStr);

//Multi line string
console.log("Strings with \n\
Multiple \n\
lines");

//Multiple line string with string template
console.log(`Strings with
multiple
lines`);



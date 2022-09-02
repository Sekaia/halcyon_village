const getRandomNumber = (lower, upper) => Math.floor(Math.random() * (upper - lower + 1)) + lower;

const combineString = (string1, string2) => string1 + " " + string2;

const getArea = (width, length, unit) => `${width * length} ${unit}`;

console.log(getRandomNumber(10, 20));

console.log(combineString("Arrow", "Syntax!"));

console.log(getArea(12, 4, "px"));
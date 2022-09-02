/**
 * Provides a random number within the given range of numbers
 * 
 * @param {number} lower The lower value of the range
 * @param {number} upper The higher value of the range
 * @returns a random number within the given range
 */
const getRandomNumber = (lower, upper) => {
    if (typeof lower !== "number" || typeof upper !== "number") {
        return "Not a valid range.";
    }
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};


/**
 * Combines 2 strings or numbers into 1
 * 
 * @param {*} string1 The first string to combine
 * @param {*} string2 The second string to combine
 * @returns The combination of the 2 strings
 */
const combineString = (string1, string2) => {
    if (typeof string1 === "number") {
        string1 = `${string1}`;
    } else if (typeof string2 === "number") {
        string2 = `${string2}`;
    }

    if (typeof string1 === "string" && typeof string2 === "string"){
        return string1 + " " + string2;
    }

    return "Not a valid string combination, must be a string or a number!"
};




// Test Cases
console.log(getRandomNumber(10, 20));
console.log(getRandomNumber("ten", 20));
console.log(getRandomNumber(-11.32, Math.abs(-20001)));
console.log(getRandomNumber(true, true));

console.log(combineString("Java", "Script!"));
console.log(combineString(23, "is my favorite number"));
console.log(combineString("just kidding it's", 23.7));
console.log(combineString("this statement is", true));

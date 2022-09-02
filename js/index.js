const getRandomNumber = (lower, upper) => {
    const randomNumber = Math.floor(Math.random() * (upper - lower + 1)) + lower;
    return randomNumber;
};

const combineString = (string1, string2) => string1 + " " + string2;

const getArea = (width, length, unit) => {
    const area = width * length;
    return `${area} ${unit}`;
};

num = getRandomNumber(10, 20);
console.log(num);

string = combineString("Arrow", "Syntax!");
console.log(string);

area = getArea(12, 4, "px");
console.log(area);
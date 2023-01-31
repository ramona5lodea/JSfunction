
//exercise 1

function findSquare (a)  {
    return  a**2};

console.log(findSquare(5));
console.log(Math.pow(5,2));

//exercise 2

function getRandom(start,end) {
    return Math.random() * (end - start) + start;
};

console.log(getRandom(3,5));

//exercise 3

function letterCount(letter,str) {
    let letters = 0;
    const char = letter;

for (let character of str) {
  if (char.includes(character)) {
    letters ++;
  }
}
return letters;
};



console.log(letterCount('u' , 'Buna ziua!'));
console.log(letterCount('r' , 'Vreau să lucrez în IT'));
console.log(letterCount('a' , 'Îmi place programarea'));



//exercise 4
 const arr = [1, 2, 3, 4, 5, 6]
function addNumber(arr) {
    const initialValue = 0;
    return arr.reduce((acc , currentValue) => acc + currentValue, initialValue);
}

console.log(addNumber(arr))




// 1. Counting Sheep

// function countingSheep(numOfSheep) {
//     if(numOfSheep === 0) {
//         return console.log('All sheep jumped over the fence')
//     }
//     console.log(`${numOfSheep}: Another sheep jumps over the fence`)
//     return countingSheep(numOfSheep - 1)
// }

// countingSheep(3)

// 2. Power Calculator

// function powerCalculator(base, exponent) {
//     if(exponent <= 0) {
//          console.log('exponent should be >= 0');
//         return 1;
//     }

//     return base * powerCalculator(base, exponent - 1);

// }

// console.log(powerCalculator(10, 2));

// 3. Reverse String

// function reverseString(string) {
//     if(string.length === 0) {
//         return '';
//     }

//     return reverseString(string.slice(1)) + string[0];
// }

// console.log(reverseString('ciffart'));

// 4. Nth Triangular Number

// function triangular(number) {
//     if(number === 1) {
//         return 1;
//     }

//     return number + triangular(number - 1);
// }

// console.log(triangular(5));

// 5. String Splitter

// function stringSplitter(string) {

//     if(string.indexOf('/') === -1) {
//         return [string];
//     }

//     let end = string.indexOf('/');
//     let stringy = string.slice(0, end);
//     return [stringy, ...stringSplitter(string.slice(end+1))];


// }

// console.log(stringSplitter('02/20/2020'));

// 6. Fibonacci

// function fibonacci(number) {
//     if(number < 2) {
//         return number;
//     }

//     return fibonacci(number - 1) + fibonacci(number - 2);
// }

// console.log(fibonacci(5));


// 7. Factorial

// function factorial(number) {
//     if(number === 0) {
//         return 1;
//     }

//     return number * factorial(number - 1);
// }

// console.log(factorial(5));



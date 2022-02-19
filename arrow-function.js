//simple arrow function 

// const sum = (num1, num2) => num1 + num2;
// const numbers = sum(29, 40);
// console.log(numbers)

//multipaly three numbers with

// const multiply = (num1, num2, num3) => num1 * num2 * num3;
// const numbers = multiply(20, 30, 40);
// console.log(numbers);

// jodi amra akti parameter pas kori taholay parameter ay () ay bracket dou ar dor kar nai 

// const oneParamete = num => num * 10;
// const number = oneParamete(4);
// console.log(number);

//jodi parameter pas na kori taholay parameter ar jaigai akti faka braket () dity hobay

// const noParameter = () => 'Md Shihab Uddin';
// const faka = noParameter();
// console.log(faka);


/****************** amra ay porjonto joto gulo arroe functiion likay sob kintu akl line function amra jodi multiline function likty chai taholay {} bracket use koary sadaron function ay jay vabay sob jisu likr=tam ay functio ay say vaby ku=ikty hobay ****************/

const solveMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const numbers = solveMath(30, 20);
console.log(numbers)
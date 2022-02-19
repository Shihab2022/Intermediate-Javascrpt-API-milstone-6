//amra jodi kono array ar modday kar sokol upaddan dakty chai taholy spread operator ... ti baboha rkorbo

/* const numbers = [2, 3, 34, 4, 4, 3, 2, 4, 444, 4, 4, 33, 3, 555];
console.log(numbers) //du vaby console korlay dakty pabo spread operator babor korlay kinhoy
console.log(...numbers) */

// ay array ar moddokar max value jodi pai ty chai taholay

/* const numbers = [2, 3, 34, 4, 4, 3, 2, 4, 444, 4, 4, 33, 3, 555];
// const maxNum = Math.max(numbers); //ay vabay dilay error diaby tai spread operator babor korbo
const maxNum = Math.max(...numbers);
console.log(maxNum) */

//array modday spread operator babohar koray push pop

const numbers = [2, 3, 34, 4, 4, 3, 2, 4, 444, 4, 4, 33, 3, 555];
numbers.push(500, 5000000); //ay vbay korty pari 
// const numbers2 = [...numbers];
const numbers2 = [57, ...numbers, 5909503]; //ay vaby push korty pari kub sohojay
console.log(numbers2)


//bistarto daky nity hobay
/* ১.কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্ লেয়ার করতে হয় সেটা তো মাকে জানতেই হবে। তুমি নিজে নিজে একটাconst দিয়ে আরেকটাlet দিয়েভেরিয়েবল ডিক্ লেয়ার করে ফেলো। */

//jokon amra kono variable ar man nishay kotuo rasign korbo na say son chatray amra const use korbo
//ar jodi nichay cotu variable arman reasign korty hoy taholay amra let use korbo


/* let name = 'shihab'; //ay khany const use korlay error dibay 
name = 'shiraj'
console.log(name); */


/* 
২.টেম্ পলেট স্ ট্ রিং দিয়ে একটা স্ ট্ রিং তৈরি করো। সেটার মধ্ যে উপরে ডিক্ লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ ট ডিক্ লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ ট এর দুইটা প্ রপার্ টি এর মান তো মার টেমপ্ লেট স্ ট্ রিং এর মধ্ যে বসাও। */
//templay string diay amra semicolon ar moto kaj kora jai kintu template string diay ay kaj aro dai namicaly kora somvab 
//templay te strin ay amra kono  man dainamicaly bosaity pari

/* const name = 'shihab'
const versity = 'Rajshahi University'
    // const restlt = `${name} is a 22 years old . He reads in ${versity} . His university length ${versity.length}`
    //ay vany liklou kono somosa nai kintu [''][""]ay gulo diay lika jato na 
const restlt = `${name} is a 22 years old .  
 He reads in ${versity} . 
 His university length ${versity.length}`

console.log(restlt); */

/* ৩.১একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্ লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কো ন ইনপুট দিলে সেই ইনপুট সংখ্ যাকে৫ দিয়ে ভাগ করে আউটপুট দিবে। */

/* const arrowfunction = num => num / 5;
console.log(arrowfunction(10)) */


/* ৩.২তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে২ যো গ করবে তারপর যো গফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্ তা করে বের করার চেষ্ টা করো */
/* const sumTowParameter = (num1, num2) => {
//jokon arrow function ay akdik calculation korty hoby ba akdik sorto dity hoy taholy {} use kory sob kisu ager sadaron function ar moto likty hobay
    const one = num1 + 2;
    const tow = num2 + 2;
    const multiply = one * tow;
    return multiply;
}
console.log(sumTowParameter(10, 20)); */

/* ৩.৩এইবার তিনটা প্ যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্ লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ ট রিটার্ন করবে। */

/* // const threeParameter = (num1, num2, num3) => num1 * num2 * num3;
//othoba
// const threeParameter = (num1, num2, num3) => {
//     const multiply = num1 * num2 * num3;
//     return multiply
// }
console.log(threeParameter(20, 30, 40)) */



/* ৪.[হোম ওয়ার্ক] একটু গুগলে সার্ চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা আর্ টিকেল পড়ে বুঝার চেষ্ টা করো। */

/* ৪.৫.[এক্সট্রা আরেকটা হোমওয়ার্ক। এইটা ভিডিওতে বলা নাই]: জাভাস্ক্রিপ্ট এর var,let,const এর মধ্ যে প্ রার্ থক্ য কি ? */



/* ৫.অনেকগুলা সংখ্ যার একটা array হবে। তারপর তো মার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। */

// const numbers = [20, 40, 2, 10, 50, 40, 39, 100];
// const multiplyBy5 = numbers.map(num => num * 5);
// const square = numbers.map(num => num * num);

// console.log(multiplyBy5);
// console.log(square);



/* ৬.[চ্ যালেঞ্ জিং। গুগলে সার্ চ দিয়ে বের করো] অনেকগুলা সংখ্ যার একটা array থেকে শুধু বিজো ড় সংখ্ যা বের করে নিয়ে আসার জন্ য filter ইউজ করো */


/* const numbers = [2, 5, 4, 6, 494, 303, 03, 405, 4058, 03, 2, 4, 3, 6, 7, 9, 65, 4, 4, 33, 33, 10]
const oddNumber = numbers.filter(num => num % 2 != 0) //for odd numbers
    // const evenNumber = numbers.filter(num => num % 2 == 0) //for even numbers
console.log(oddNumber); */

/* ৭.একটা array এর মধ্ যে অনেকগুলা অবজেক্ ট আছে। সেখানে যেই অবজেক্ ট এর price আছে৫০০০ টেক্কা সেই অবজেক্ টকে find দিয়ে বের করো। */

/* const products = [
    { name: 'samsung', price: 25000, color: 'black' },
    { name: 'mi', price: 20000, color: 'gaygreen' },
    { name: 'watch', price: 5000, color: 'black' },
    { name: 'iphone watch', price: 5500, color: 'marun' }
]
const price5000 = products.find(pro => pro.price == 5000);
console.log(price5000) */

/*৭.৫[এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। */


/* //comon object
const products = [
    { name: 'samsung', price: 25000, color: 'black' },
    { name: 'mi', price: 20000, color: 'gaygreen' },
    { name: 'watch', price: 5000, color: 'black' },
    { name: 'iphone watch', price: 5500, color: 'marun' },
    { name: 'oppo', price: 20000, color: 'green' },
    { name: 'itel', price: 15000, color: 'black' }
] */

/* //use map

//map use korlay amder sompurno list tai diay diby aykany amra kono sorto use korty parbo na 
const useMap = products.map(pro => pro.name);
const useMap = products.map(pro => pro.price);
const useMap = products.map(pro => pro.color);
// console.log(useMap) */

/* // use filter

//filter use korlay amra amader sorto motabak jay aro kay chai taholay filter ay sroto use koray korty pari 

const priceUp10000 = products.filter(pro => pro.price > 10000); //jay sib product ar ddam 10000 ar basi say sob product kay dakabay
const balckProduct = products.filter(pro => pro.color == 'black')  //jader color black tader dakaby
console.log(priceUp10000);
console.log(balckProduct); */


/* //use find 


//find use korlay jay product kujty chai taholay similar jodi kono product thaaky taholay takay print na koray jakay say potom ay pabay takay agay prind korby tar poray ar thaklay takay ar print korbay na
const samsung = products.find(pro => pro.name == 'samsung'); //samsung namy product thaklay

const findBlak = products.find(pro => pro.color == 'black'); //black color ar kono product thakly
console.log(samsung);
console.log(findBlak);
const price = products.find(pro => pro.price == 20000); //20000 ar kono product thaklay potom  product print korbay
console.log(price) */



/* ৮.সিম্ পল একটা জাভাস্ ক্ রিপ্ ট অবজেক্ ট এর কো ন একটা প্রোপার্ টিকে ভেরিয়েবল হিসেবে ডিক্ লেয়ার করার জন্ য destructuring ইউজ করো। */

/* const fish = { name: 'Hilsha', price: 1200, id: 333, home: 'chadpur' }
const home = fish.home;
const id = fish.id;
console.log(fish)
console.log(home)
console.log(id) */

/* ৯.[চ্ যালেঞ্ জিং] array এর destructuring করবে আর সেটা করার জন্ য তুমি এরে এর থার্ ড পজিশন এর উপাদান কে destructuring করে 'three'
নামক একটা ভেরিয়েবল এ রাখবে। */

/* ১০.তিনটা প্ যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্ যারামিটার নিয়ে সেই তিনটা প্ যারামিটার এর যো গ করে যো গফল রিটার্ ন করবে। আর থার্ ড প্ যারামিটার এর একটা ডিফল্ ট ভ্ যালু থাকবে। সেটা হবে৭। */






/* //[অপশনাল]

১১.একটা nested অবজেক্ ট ডিক্ লেয়ার করো(অর্ থাৎ একটা অবজেক্ ট এর প্ রপার্ টি এর মধ্ যেও যে অবজেক্ ট থাকতে পারে। আবার সেই অবজেক্ ট এর প্ রপার্ টি এর মধ্ যেও সে অবজেক্ ট থাকতে পারে। সেই রকম একটা অবজেক্ ট ডিক্ লেয়ার করো। এবং যেকো ন একটা প্ রপার্ টি এর মান একটা array হবে। জাস্ ট এমন একটা অবজেক্ ট) */

/* ১২.উপরের অবজেক্ ট এ ডট এর আগে যে প্ রশ্ নবো ধক চিহ্ ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্ রাকটিস করো। */
// -----------------------------Advance ES6------------------------------------------------------

// --------------------------------Optinal Chaining---------------------------------------

// optional chaining hocche kuno nested object e nested obj name wrong dilew jeno error na diye tar akta process.Ai jonno Object value access korar somoy obj name er shesh e ?(question mark) used korle ta shudu undefine dibe kuno error dibe na

const person = {
  name: "tariqul",
  age: 21,
  roll: 676819,
  institute: {
    name: "kpi",
    departement: "cst",
    time: {
      shift: "first",
    },
  },
};

// console.log(person.institute.timing.shift);  //person object e kuno timing naam e kuno nested object naii.tai error dichhe
// console.log(person.institute.timing?.shift); //ekane nested obj name er sathe ? use koraii error dicche na shudu undefine dicche

// -----------------------------------Bracket notation and dot notation-------------------------------------------

// Bracket Notaition is more powerful than dot Notaition

// Bracket notation is works in some exceptional case.These are : if a obj ,property name started with number(1,2,3,4) and boolean value true/false.

const person1 = {
  name: "tariqul",
  age: 21,
  roll: 676819,
  institute: {
    name: "kpi",
    1: "firstboy",
    true: "you passed",
    departement: "cst",
    time: {
      shift: "first",
    },
  },
};

// console.log(person.institute.1); its not working
console.log(person1["institute"][1]); //its working
console.log(person1["institute"]["true"]);

// dot notation
console.log(person1.institute.time.shift);
// bracket notation
console.log(person1["institute"]["time"]["shift"]);

// ------------------------------Array map to do one-line loop magic------------------------------------------------------------

// Map hocche kuno akti particular array er upor loop through kore kuno kaj kore array[] er vitor value return kore

// ****nicher code ti numbers array er every value ke 1,1 kore increment kore newnNumbers array te return kore. Aii kaj ti map() method use kore easily kora jay
const numbers = [1, 2, 3, 4, 5, 6, 7];
let newNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  const sum = element + 1;
  newNumbers.push(sum);
}
console.log(newNumbers);

// *****nicher code ti uporer code gulu r alternative and so easy way map() method

const newNumbers1 = numbers.map((element) => element + 1);
console.log(newNumbers1);

// map() method e multiple parameter dewa jay.jemon element akta paramenter sathe , diye onno parameter o dewa jabe

// ---------------------------------------------------------------

const newNumbers2 = numbers.map((element) => console.log(element));
// amra element ke console log kore dekte pacchi eti numbers array sokol value return korche. Ar mane numbers.map() method ti numbers er upor loop chalacche and element variable er vitor numbers er sob value ekti ekti kore store korche

const newNumbers3 = numbers.map((element) => element + 1);
// ekane element=> arrow function er vitor element+1 dewa hocche ete element er vitor store howa every element  1 kore increment hocche
console.log(newNumbers3);

const newNumbers4 = numbers.map((element) => {
  return element + 1;
}); //ekane arrow fuction multi line e ashay ta must be return korte hobe
console.log(newNumbers4);

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8];
const squareArray = numbers1.map((element) => element * element); // ekane numbers1.map() dewaii numbers1 array er upor hocche and numbers1 er value gule element e store hocche .Then element array te => arrow function diye element*element deway element er value  multiply hoye squareArray te store hochhe .Akn square array ke console log korle numbers1 er value gulu [[1, 4, 9, 16, 25, 36, 49, 64] aivabe pabi
console.log(squareArray);


const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];
const squareArray2 = numbers1.map((element, index) => {
  console.log(element);
  console.log(index);//eti index value return kore
});
//ekane map() method e multiple parameter dewa jay. ekane index dewa te index value return korche



// ------------------------------foreach, filter, find, and differences between them----------------------------------------------


const products = [
    { id:1, name:'iphone', color:'black',price:1200, brand:'iphone'},
    { id:2, name:'xaiomi', color:'gold',price:100, brand:'xaiomi'},
    { id:3, name:'samsung', color:'gold',price:1500, brand:'sam'},
    { id:4, name:'iphone', color:'gold',price:1000, brand:'iphone'},
    { id:4, name:'xaiomi', color:'black',price:1100, brand:'xiaomi'}
];

// forEach loop  kuno object er upor loop through kore but kuno value RETURN KORE NA tai sob output console kore nite hoy 
products.forEach(product =>{
    if(product.color === 'gold'){
        console.log(product)
    }
})

// filter() method kuno ekti object er upor condition onujayii loop chaliye element khuje niye array[] er vitor value return kore. FILTERING KORE 
// condition na mille empty array[] return korbe
const newProducts= products.filter(product => product.price > 1000);
console.log(newProducts)


// find: eti kuno object theke condition onujayii loop chaliye element khuje only 1st element ke object{} e return kore
// condition na mille undefined return korbe
const product1= products.find(ponno => ponno.id === 4);
console.log(product1);


// kuno ekti element(s) BAAD diye ekti notun array[] pete holew filter() use kora jay
const newProducts1=products.filter(p => p.id !== 3);
console.log(newProducts1)


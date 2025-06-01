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

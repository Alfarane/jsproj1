// const myVariable = "alpha v rane";
//         console.log("alpharane".length);
//         console.log("alpharane".toUpperCase());
//         console.log("alpharane".includes("rane"));
//         console.log("alpharane".slice(0,5)); // does not return the 5 th char
//         console.log("alpharane".split(" "));

// const num = 42;
// const num1 = "42";
//     console.log(Number(num1) === num); // converts string into a number
//     console.log(Number("alpha"));   // gives a NaN
//     console.log(Number.isInteger(42.01)); // checks if it is integer 
//== checks just the var === also checks the datatype  
    //console.log(Math.floor(1.1));

    const myName = "Alpha";
    console.log(myName.charAt((Math.floor(Math.random()*myName.length))));
    // var let const
    // let can be reassigned a value
    // data types
    // String nUmbers Boolean null undefined

    const name ='alpha';
    const age = 30;
    const x=undefined;

    //console.log(typeof age);
    const hello =`my name is ${name} of age ${age}`;
    //console.log(hello);
    //Arrays variable that hold multiple values

    const nums = new Array(1,2,3,4,5);
    const num =[1,2,3,4,5]; //differ data types allowed
     
    //object literals
    const person = {
        firstname: 'alpha',
        lastname: 'rane',
        hobbies: ['read','dance','paint'],
        address:{
            street :'lt road',
            state:'maharashtra'
        }
    }
console.log(person);
console.log(person.hobbies[0]);
console.log(person.address.state);

person.mail = 'alpha@gmail.com'; // adding direct property

//array of objects
const todos = [
    {
        no:1,
        name:'workout',
        status: false
    },
    {
        no: 2,
        name: 'cook',
        status: true

    },
    {
        no: 3,
        name: 'dance',
        status: false
    }
];

// high order array methods
//for each loop   its parameter is a function
// todos.forEach(function(todo){
//     console.log(todo.name);
// });

//map fn returns array of data
const taskName = todos.map(function(todo){
    return todo.name;
});

console.log(taskName);

//filter fn returns specific objects satisfy the given cond
const todoCompleted = todos.filter(function(todo){
    return todo.status == true;
});
console.log(todoCompleted);

// returns just the task name by using both filter and map
const Completetask = todos.filter(function(todo){
    return todo.status == true;
}).map(function(todo){
    return todo.name;
});  

console.log(Completetask);

//functions
function addNum(num=1,num2=2){
    return num+num2;
}

//arrow functions
const addnums = (num1,num2) => console.log(num1+num2);
const subnums = (num1,num2) => num1-num2;  //no need of return
const singlePara = num3 =>num3 + 2;

//Constructor function
function Person(firstname,lastname,dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);
}

//prototype heps to not display the functions when we print the obj
Person.prototype.getFullname = function(){
    return `${this.firstname} ${this.lastname}`;
}

//instantiate an object
const person1 = new Person('alpha','rane','4-22-2004');//month-date-yr

console.log(person1.dob);
console.log(person1.getFullname());

// //class
// class Person{
//     constructor(firstname,lastname,dob){
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.dob = new Date(dob); 
//     }

//     getFullname(){
//         return `${this.firstname} ${this.lastname}`;
//     }
// }







//ES Exercises ------------------------------>>>

// 1-  Use the let keyword in an example function

// let num1=10; //global variable for sum function
// let num2=20;

// function sum(){
//     let num1=30; //local varibale
//     return num1+num2;
// }

// console.log('Sum: ',sum());

// ----------------------------------------------------------

// 2- Use the const keyword in an example function

// const PI=3.14;
// PI=45.9;

// console.log('Value of PI: ', PI);

// ----------------------------------------------------------

// 3- Create an arrow function that finds the square of a number

// const squareOfNum=(num)=>{
//    return num*num;
// }

// console.log('Square of 4: ',squareOfNum(4));

// --------------------------------------------------------------------------

// 4- Create an arrow function that adds two numbers

// let num1=3,num2=4;

// const sumOfTwoNum=(num1,num2)=>{
//    return num1+num2;
// }

// const result=sumOfTwoNum(num1,num2);
// console.log(`Sum of ${num1} & ${num2} = ${result}`);

// --------------------------------------------------------------------------

// 5- Create a multi-line string and then split the string into the corresponding lines and print the lines

// let str=`
//     Hello ,World !
//     Javascript is good Programming Lanugage,
//     It is very popular for Web development.
// `
// let sentences=str.split('\n');
// console.log(sentences);

// sentences.forEach((sentence)=>{
//   if(sentence){
//     console.log(sentence);
//   }
// })

// --------------------------------------------------------------------------

/* 6- Create a function that calculates the area of a circle.
 If the radius of the circle is not provided assume that the default radius is 5.
 Use the JavaScript default parameter feature to implement the function
 */

//  const areaOfCircle=(radius=2)=>{

//     return (Math.PI*radius*radius).toFixed(2);
//  }

// console.log('Area of Circle for 4 : ',areaOfCircle(4));
// console.log('Area of Circle  : ',areaOfCircle());

// --------------------------------------------------------------------------

/*7- Create a string that prints the name and location of the person in below format:
   "Harry Potter is located in London."  
using template literals
*/

// let person = {
//     name: 'Harry Potter',
//     location: 'London'
// }

// const str=`${person.name} is located in ${person.location}.`

// console.log(str);

// ----------------------------------------------------------------------------------------

// 8- Show an example where an array is destructured using destructuring assignment

// let ages=[12,24,10,40];

// let [rahulAge,shyamAge,akashAge,ramAge]=ages; //destructuring ages array

// console.log(`Rahul's age is ${rahulAge} `);
// console.log(`Shyam's age is ${shyamAge} `);
// console.log(`Akash's age is ${akashAge} `);
// console.log(`Ram's age is ${ramAge} `);

// ----------------------------------------------------------------------------------------

//9 - Show an example where an object is destructured using destructuring assignment in the function body

// let person={
//     name:'Akash',
//     age:23,
//     role:'Software Developer'
// }

// function showInfo(person){

//     let {name,age,role}=person; //destructuring the person object

//     console.log(`${name} is ${age} yr old and He works as ${role}.`);
// }

// showInfo(person);

// ----------------------------------------------------------------------------------------

//10 - Show an example where a function argument which is an object is destructured inside the parantheses of the function

// let keyboard ={

//    brandName:'Logitech G915 TKL',
//    isWireless:true,
//    isMechanical:true,
//    isBacklit:true,
//    color:'black'
// }

// function getSpecification({brandName,isWireless,isMechanical,isBacklit,color}){

//      const backlit=isBacklit?'backlit':'no backlit';
//      const mechanical=isMechanical?'mechanical':'no mechanical';
//      const wireless=isWireless?'wireless':'no wireless';

//     const info=`${brandName} is ${color} keyboard that comes with ${backlit} , ${mechanical} ,${wireless}.`;
//     return info;
// }

// console.log(getSpecification(keyboard));

// ----------------------------------------------------------------------------------------

//11- Show an example where enhanced object literals is used.

// let name='Ram';
// let experience=5;
// let role='Software Developer';

// let showInfo=function (){
//    console.log(`${this.name} has ${this.role} experiece of ${this.experience} yrs.`);
// }

// let person1={name,experience,role,showInfo}; //using enhanced object literals to combine all varibales into person1 object
// person1.showInfo();

// ----------------------------------------------------------------------------------------

/* 12 - Create a function sum that takes any number of numbers as arguments and 
calculates the sum of the input numbers using the rest parameter syntax
*/

// function sum(...args) {
//   console.log('Args :' ,args);
//   const result = args.reduce((prevSum, curValue) => {
//     return (prevSum = prevSum + curValue);
//   });
//   return result;
// }

// console.log('Sum of 2 & 3 : ', sum(2, 3));
// console.log('Sum of 2, 3 & 4 : ', sum(2, 3, 4));
// console.log('Sum of 2,3,4 & 5 : ', sum(2, 3, 4, 5));

// ----------------------------------------------------------------------------------------

/* 13- Use the spread syntax to expand an array of numbers and 
pass the elements of the array as arguments to the sum function created in the previous example
*/

// function sum(num1,num2){
//     return num1+num2;
// }
// function sum(num1,num2,num3=0){
//     return num1+num2+num3;
// }
// let nums1=[1,2];
// let nums2=[1,2,3];

// console.log('Sum of 1 & 2 : ',sum(...nums1)); //spreading array into individuals num
// console.log('Sum of 1,2 & 3 : ',sum(...nums2));

// ----------------------------------------------------------------------------------------

// 14- Use the for..of loop to iterate through all values in an array

// let names=['ram','shyam','sohan','manish'];

// for(let name of names){
//     console.log(name);
// }

// ----------------------------------------------------------------------------------------

// 15- Iterate through all keys of an object using Object.keys

// let person={
//     name:'Akash',
//     age:23,
//     role:'Software Developer',
//     address:'ShuklaGanj Kanpur'
// }
// const personKeys=Object.keys(person);

// console.log('Keys of Person object :');
// personKeys.forEach((key)=>{
//     console.log(key);
// })

// ----------------------------------------------------------------------------------------

//16- Iterate through all values of an object using Object.values

// let person={
//     name:'Akash',
//     age:23,
//     role:'Software Developer',
//     address:'ShuklaGanj Kanpur'
// }

// const personValues=Object.values(person);

// console.log('Values of Person object :');

// personValues.forEach((value)=>{
//    console.log(value);
// })

// ----------------------------------------------------------------------------------------

//17- Iterate through all the key / value pairs of an object using Object.entries

let person = {
  name: 'Akash',
  age: 23,
  role: 'Software Developer',
  address: 'ShuklaGanj Kanpur',
};

const personKeyValuesPair = Object.entries(person);
console.log('All the keys / values of Person object : ');

personKeyValuesPair.forEach((property) => {
  const [key, value] = property; //destructuring into key and value

  console.log(`${key} : ${value}`);
});

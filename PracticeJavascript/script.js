// const product = {
//     Name: "pen",
//     rating: 3,
//     price: 30,
//     Discount: true,

// };
// console.log(typeof product);

//arthemeatic operators-----------------------------------------------------------------------------------------------------------

// let a = 2;
// let b = 3;
// console.log("a =", a, "& b =", b);
// console.log("sum = ", a+b);
// console.log("sub = ", a-b);
// console.log("mul = ", a*b);
// console.log("div = ", a/b);
// console.log("mod = ", a%b);
// console.log("exp = ", a**b);

//unary operator-------------------------------------------------------------------------------------------------------------------

// a++;
// console.log("increment operator = ", a);
// b--;
// console.log("decrement = ", b);

//Assignment operator +=, -=, %=, **= ---------------------------------------------------------------------------------------------

// let a = 3;
// let b = 2;

// a +=4;
// console.log("a = ", a);

//comparison operator----------------------------------------------------------------------------------------------------------------
// let a = 2;
// let b = 3;
// console.log("a==b", a==b);
// console.log("a!=b", a!=b);
// console.log("2<3", a<b);

//Logical operator--------------------------------------------------------------------------------------------------------------------
// let a = 2;
// let b = 3;
// let condition1 = a < b;
// let condition2 = a ==2;
// console.log("condition1 && condition2 =", condition1 && condition2)

//Conditional statement---------------------------------------------------------------------------------------------------------------
// let age = 10;
// if(age >= 18){
//     console.log("can vote");
// }
// if(age < 18){
//     console.log("can not vote");
// }

// let score = prompt("enter your score");
// if(score >=90 && score <=100){
//     console.log("placed in grade A");
// }else if(score >=70 && score <=89){
//     console.log("placed in grade B");
// }else if(score >=60 && score <=79){
//     console.log("placed in grade C");
// }else if(score >=50 && score <=59){
//     console.log("placed in grade D");
// }else if(score >=0 && score <=49){
//     console.log("placed in grade F");
// }

//for loop-----------------------------------------------------------------------------------------------------------------------
// let sum = 0;
// for(let i = 1; i<=10; i++){
//     sum = sum + i;

// }
// console.log("sum is", sum);

//infinite loop
//while loop----------------------------------------------------------------------------------------------------------------------
// i = 1;
// while(i<=5){
//     console.log("i = ", i);
//     i++;

// }

//do-while loop---------------------------------------------------------------------------------------------------------------------
// i = 1;
// do{
//     console.log("i = ", i);
//     i++;

// }while(i<=5);

//for-of loop---------------------------------------------------------------------------------------------------------------------------
// let str = "hi";
// let size =0;
// for (let i of str){
//     console.log("i is ", i);
//     size++;
// }
// console.log("total size of characters is: ",size)

//for in loop----------------------------------------------------------------------------------------------------------------------
// let std = {
//     name: "anabia",
//     age: 23,
//     gpa: 3.3,
//     isPass: true
// }
// for(let key in std){
//     console.log("key =", key, "value =", std[key]);
// }

//Print numbers from 0-100---------------------------------------------------------------------------------------------------------

// for(i= 0; i<=100; i++){
//     console.log(i);
// }

//Print even numbers from 0-100------------------------------------------------------------------------------------------------------
// for(i= 0; i<=100; i++){
//     if(i%2==0){
//         console.log("num =", i);
//     }
// }

//guess number game----------------------------------------------------------------------------------------------------------------
// let gameNum = 20;
// let userNum = prompt("Guess the number: ");
// while(userNum !=gameNum){
//     userNum = prompt("Youve entered the wrong number try again");

// }
// console.log("yoo! You entered the right number");

//strings in js and template literals-------------------------------------------------------------------------------------------------
// let str = "anabia";
// console.log(str.length);

// let obj = {
//     item:"pen",
//     price:10
// }
// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

//Methods in strings--------------------------------------------------------------------------------------------------------------------
// let fullName = prompt("enter your fullname without spaces");
// let userName = "@"+ fullName  + fullName.length;
// console.log(userName);

//Arrays in JS---------------------------------------------------------------------------------------------------------------------------
// let subjects = ["maths", "english", "urdu", "islamiat"];
// for(i = 0; i< subjects.length; i++){
//     console.log(subjects[i]);
// }
// for(let sub of subjects){
//     console.log(sub.toUpperCase());
// }

// let marks = [20, 30, 45, 50, 78];
// let sum = 0;
// for (let val of marks){
//     sum = sum + val;
// }
// let avg = sum / marks.length;
// console.log(`average marks of the class = ${avg}`)

//Practice question--------------------------------------------------------------------------------------------------------------

// let items = [250, 349, 300, 50];
// for(let i = 0; i< items.length; i++){
//     let offer = items[i] / 10;
//     items[i] -= offer;

// }
// console.log(items);

// let foodItems = ["soup", "vegetables", "burger"];
// foodItems.push("chips", "coke");
// console.log(foodItems);

// let foodItems = ["soup", "vegetables", "burger"];
// console.log(foodItems);
// let deletedItem = foodItems.pop();
// console.log(foodItems);
// console.log("deleted item is = ",deletedItem );

// let marvelHeroes = ["thor", "spiderman", "batman"];
// let favHeroes = ["spiderman", "hellman"];
// let heroes = marvelHeroes.concat(favHeroes);
// console.log(heroes);

// let heroes = ["batman", "superman"];
// let favHeroes = ["ironman", "thor"];
// heroes.unshift("antman");
// console.log(favHeroes);
// let deletedVal = favHeroes.shift();
// console.log("deleted value is = ", deletedVal);

// let heroes = ["batman", "superman", "ironman", "thor"];
// console.log(heroes.slice(1, 3));

// let arr = [2, 3, 4, 5, 6];
// arr.splice(1, 1, 20, 40);

// let companies = ["Bloomberg", "Microsoft", "Uber", "IBM", "Netflix"];
// companies.shift();
// companies.splice(2, 1, "Ola");
// companies.push("amazon");

//functions in JS--------------------------------------------------------------------------------------------------------------------
// function sum(a, b){
//     return a + b;
// }
// const arrowSum = (a, b) => {
//     console.log(a+b);

// }

// function mul(a, b){
//     return a * b;
// }

// const arrowMul = (a, b) =>{
//     console.log(a*b);
// }

// function countVowels(str){
//     count = 0;
//     for(const char of str){
//         if(char ==="a" || char ==="e" || char ==="i" || char ==="o" || char ==="u"){
//             count ++;
//         }

//     }
//     console.log(count);
// }

// const countVow = (str) =>{
//     count = 0;
//     for(const char of str){
//         if(char ==="a" || char ==="e" || char ==="i" || char ==="o" || char ==="u"){
//             count ++;
//         }

//     }
//     console.log(count);

// }

// let nums = [2, 3, 4, 5, 6];

// let calcSquare = (num) =>{
//     console.log(num*num);
// }
// nums.forEach(calcSquare);

// let nums = [23, 34,45];
// let newArr = nums.map((val) =>{
//     return val*2;
// });
// console.log(newArr);

// let marks = [23,45,69,96,56];
// let toppers = marks.filter((val) =>{
//     return val > 90;
// });
// console.log(toppers);

// let n = prompt("enter a number: ");
// let arr = [];
// for(let i= 1; i<=n; i++){
//     arr[i-1] = i;
// }
// console.log(arr);
// let factorial = arr.reduce((res, curr) =>{
//     return res * curr;
// })
// console.log("the factorial is = ", factorial);

//---------------------------------------------------------------------------------------------------------------------------------------

//DOM  lecture 6

//---------------------------------------------------------------------------------------------------------------------------------------
// let paras = document.getElementsByTagName("p");
// console.log(paras);
// let heading = document.querySelector("h1");
// console.log(heading);
// let headings = document.querySelectorAll("h1");
// console.log(headings);

// console.dir(document.body.firstChild);
// console.log(document.querySelector("h1").children);

// console.dir(document.querySelectorAll("div"));

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText =h2.innerText + "For you";

// let para = document.querySelector("p");
// console.log(para).setAttribute("class", "newClass");

// let div = document.querySelector("div");
// console.log(div);
// div.style.backgroundColor = "blue";
// div.style.visibility = "visible";
// div.innerText = "hi";

// let btn = document.createElement("button");
// btn.innerText = "click here";
// console.log(btn);
// btn.style.backgroundColor = "red";
// btn.style.color = "black";
// document.querySelector("body").prepend(btn);

// let heading = document.createElement("h1");
// heading.innerHTML = "<i>hi, i am anabia</i>";
// document.querySelector("body").prepend(heading);

// let h1 = document.querySelector("h1");
// h1.remove();

//Events------------------------------------------------------------------------------------------------------------------------------
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//   console.log("btn1 was clicked");
//   let a = 25;
//   a++;
//   console.log(a);
// };
// let div = document.querySelector("div");
// div.onmouseover = (evt) => {
//   console.log("you are inside the div box");
//   console.log(evt.type,evt.target,evt.clientX,evt.clientY);
// };

// btn1.addEventListener("click", () => {
//   console.log("button was clicked-handler1");
// });
// btn1.addEventListener("click", () => {
//   console.log("button was clicked-handler2");
// });
// const handler3 = ()=>{
//     console.log("button was clicked-handler3");
// };

// btn1.addEventListener("click",handler3 );
// btn1.addEventListener("click", () => {
//   console.log("button was clicked-handler4");
// });

// btn1.removeEventListener("click", handler3);

//-----------------------------------------------------------------------------------------------------------------------------------

// let modeBtn = document.querySelector("#mode");
// let currMode = "light";
// modeBtn.addEventListener("click", ()=>{
//     if(currMode==="light"){
//         currMode= "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     }
//     else{
//         currMode= "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
//     console.log(currMode);
// });

//-------------------------------------------------------------------------------------------------------------------------------------
// let number1 = 44;
// let number2 = 12;
// let number3 = 44;
// if (number1<number2){
//     console.log(number1,"is less  than",number2)
// }
// else if(number1==number3){
//     console.log(number1,"is equal to",number3)
// }
// else if(number1>number3){
//     console.log("jhfgdfsd")
// }
// else{

// }

// for(let number = 0; number<20; number+=2){
//     console.log(number+2);
// }

// let myname = "Anabia";
// console.log(myname);
// console.log(typeof(myname));
// console.log(myname.toUpperCase());
// console.log(myname.toLowerCase());
// // console.log(myname.replace(0,  "c"));
// console.log(myname.slice(0, 3));
// console.log(myname.concat(23));

//------------------------------------------------------------------------------------------------------------------------

// lecture 11) classes, objects

//-------------------------------------------------------------------------------------------------------------------------

// class ToyotaCar {
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brandName = brand;
//     }
// }
// let fortuner = new ToyotaCar();
// let lexus = new ToyotaCar();
// fortuner.setBrand("fortuner");
// lexus.setBrand("lexus");

//----------------------------------------------------------------------------------------------------------------------

//inheritance

//----------------------------------------------------------------------------------------------------------------------

// class Person{
//     constructor(){
//         this.species = "homo sapiens";
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
//     work(){
//         console.log("work");
//     }
// }
// class Engineer extends Person{
//     work(){
//         console.log("hard at work");
//     }
// }
// let anabiaObj = new Engineer();

//----------------------------------------------------------------------------------------------------------------------------

//practice inheritance

//----------------------------------------------------------------------------------------------------------------------------

// let data = "secret data";

// class User{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData(){
//         console.log(data);

//     }
// }
// class Admin extends User{
//     constructor(name, email){
//         super(name, email);
//     }
//     editData(){
//         data = "edited secret data";
//     }
// }

// let std1 = new User("anabia", "anabia@gmail.com");
// let admin = new Admin("baig", "baig@gmail.com");

//---------------------------------------------------------------------------------------------------------------------

//lecture 12) callbacks, promises, Async Await
//callbacks examples

//---------------------------------------------------------------------------------------------------------------------

// console.log("anabia");
// console.log("anabia");
// console.log("anabia");

// setTimeout(() =>{
//     console.log("hello")
// }, 5000);

// console.log("anabia");

// function getData(dataId){
//     setTimeout(() =>{
//         console.log("data", dataId )
//     }, 2000);
// };

//-------------------------------------------------------------------------------------------------------------
//callback hell
//--------------------------------------------------------------------------------------------------------------

// function getData(dataId, getNextData){
//     setTimeout(() =>{
//         console.log("data", dataId );
//         getNextData();
//     }, 2000);
// };
// getData(1, () =>{
//     console.log("getting data 2...");
//     getData(2, () =>{
//         console.log("getting data 3..");
//         getData(3, () =>{
//             console.log("getting data 4...");
//         });
//     });
// });

//----------------------------------------------------------------------------

//promises and promises chaining
//used to overcome callback hell problem
//----------------------------------------------------------------------------

// let promise = new Promise((resolve, reject) =>{
//     console.log("this is a promise");
//     reject("error occured");
// });
//  function getData(dataId, getNextData){
//    return new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         // console.log("data", dataId );
//         reject("error");
//         if(getNextData){
//             getNextData();

//         };

//     }, 8000);

//     });

// };

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1");
//       resolve("success data1");
//     }, 2000);
//   });
// };
// const getPromise2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data2");
//       resolve("success data2");
//     }, 2000);
//   });
// };
// console.log("fetching data 1...");
// getPromise().then((res) => {
//   console.log("fullfilled data 1", res);
//   console.log("fetching data 2...");
//   getPromise2().then((res) => {
//     console.log("fullfilled data 2", res);
//   });
// });

//------------------------------------------Async/ Await-----------IIFE-------------------------------------------------

// function api(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             console.log("weather data retrived");
//             resolve(200);
//         }, 5000);
//     });
// };
// (async function(){
//     await api();
//     await api();

// })();

//------------------------------------------------------------fetch Api-----------------------------------------------------

// async function getData() {
//   let myURL = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   let data = await myURL.json();
//   console.log(data);
// }




// let URL = "https://cat-fact.herokuapp.com/facts";
// let para1 = document.querySelector("#para");
// let btn = document.querySelector("#btn");



// const getFacts = async () => {
//     console.log("getting data");
//     let response = await fetch(URL);
//     let data = await response.json();
//     para1.innerText = data[2].text;
// };
// btn.addEventListener("click", getFacts);


//=======================================================================================================================================

//--------------------------------------------------------Practice-set chapter 1---------------------------------------------------------

//=======================================================================================================================================

// //practice Q1
// let  str = "anabia";
// let num = 2;
// console.log(str+num);
// //practice Q2
// console.log(typeof(str+num));
// //practice Q3
// const obj = {
//     firstName: "Anabia",
//     lastName: "Baig",
//     age: 23

// }
// console.log(obj);
// //practice Q4
// obj['firstName'] = "ehtisham";
// console.log(obj.firstName);


//-------------------------------------------------conditional statements-----------------------------------------------------------------

// let a = prompt("Enter your age");
// a = parseInt(a);
// if(a >0){
//     alert("valid");
// }else{
//     alert("invalid age");
// }


// let age = 30;
// console.log("you", age>18? "can vote": "cannot vote")


//=====================switch statements===========================================================================================

// let expr = "grapes"
// switch (expr) {
//     case "grapes":
//       console.log("Oranges are $0.59 a pound.");
//       break;
//     case "grapes":
//       console.log("Apples are $0.32 a pound.");
//       break;
//     case "grapes":
//       console.log("Bananas are $0.48 a pound.");
//       break;
//     case "Cherries":
//       console.log("Cherries are $3.00 a pound.");
//       break;
    
//     case "Papayas":
//       console.log("Mangoes and papayas are $2.79 a pound.");
//       break;
//     default:
//       console.log(`Sorry, we are out of ${expr}.`);
//   }
  
//   console.log("Is there anything else you'd like?");



//======================================================================================================================================
//=========================================================Chapter 2 practice set=======================================================
//======================================================================================================================================


//question1
/*let age = prompt("What is your age");
age = parseInt(age);
if(age>10 && age<20){
    console.log("yes the age lies between 10 and 20");
}else{
    console.log("age doesnt lies between 10 and 20 ");
}
*/

//question2
/*let age = prompt("What is your age");
age = parseInt(age);
switch(age){
    case 12:
        console.log("your age is 12");
        break;
    case 13:
        console.log("your age is 13");
         break;
    case 14:
        console.log("your age is 14");
        break;
    default:
        console.log("not applicable");
}*/

//question 3
/*let num = prompt("What is the number");
num = parseInt(num);
if(num%2==0 && num%3==0){
    console.log("number you entered its divisible by 2 and 3");
}else{
    console.log("no the number you have entered is not divisible by 2 and 3");
}*/

//qestion4
/*let num = prompt("What is the number");
num = parseInt(num);
if(num%2==0 || num%3==0){
    console.log("number you entered its divisible by 2 or 3");
}else{
    console.log("no the number you have entered is not divisible by 2 or 3");
}*/

//question5
/*let age = prompt("What is your age");
age = parseInt(age);
console.log(age>18? "you can drive":"you cant drive");*/


//-------------------------------------------------------loops---------------------------------------------------------------------
//-----------------------------------------------for loop
/*let sum = 0;
let n = prompt("Enter natural numbers")
for (let i=0; i<n; i++){
    sum+= i+1;
}
console.log("sum of ", n, "is", sum)*/

//----------------------------for in loop ------used if we want key in an object

/*let obj = {
    fullName : "Anabia Baig",
    fatherName: "Aslam khan",
    age: 23

}
for(let a in obj){
    console.log(a, "is" , obj[a]);

}*/

//----------------------------for of loop ------used if we want  values and is iterable

// for(let a of "Anabia"){
//     console.log(a);
// }


//------------------------------while and do-while loop
/*let n = prompt("Enter a number");
n = parseInt(n);
i= 10;

do{
    console.log(i);
    i++;

}while(i<n)*/


//-----------------------------------functions in javascript------------------------------------------------------------------

/*function sum(){
    return 8+6;
}
console.log(sum());*/

/*const sum = (a,b)=>{
   return  a+b;
}
console.log(sum(2,2));*/





/*const hello = ()=>{
    console.log("hello");
    return "hi"
}
let v = hello()
console.log(hello());*/



//========================================================================================================================================
//======================================================Practice set chapter 3============================================================
//========================================================================================================================================


//Question 1

/*let marks = {
    "harry":45,
    "rohan":43,
    "ali":34


}
for(let i=0; i<Object.keys(marks).length;i++){
    console.log(" The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]] );
}*/

//Question 2
/*let marks = {
    "harry":45,
    "rohan":43,
    "ali":34
}

for(let key in marks){
    console.log("the marks of "+ key + " are " + marks[key])
}*/

//Question 3

/*let number = 20;

let i;
while(i!= number){
    i = prompt("Enter a number")
}
console.log("you entered correct number")*/

//Question 4
/*const mean = (a,b,c,d)=>{
    return (a+b+c+d)/4
}
console.log(mean(1,2,3,4));*/

//-------------------------------------------------------------- strings in js----------------------------------------------------
/*let name = "anabia";
console.log(name.length);

let a= "ana\rbia"
console.log(a)*/

/*let name = "anabia";
let friend = "noreen";
let name2 = "       fatima       "
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2, 3))
console.log(name.slice(3))
console.log(name.replace("ana", "nana"))
console.log(name.concat(" is a friend of ", friend))
console.log(name2.trim())

for(let i=0; i<friend.length; i++){
    console.log(friend[i])
}*/


//========================================================================================================================================
//======================================================Practice set chapter 4============================================================
//========================================================================================================================================

//Question1
/*let str = "ana\""
console.log(str.length);*/

//Question 2
//includes function
/*const sentence = "My name is anabia";
const word = "anabia";
console.log(`the word ${word} ${sentence.includes(word)? `is`: `is not`} in the sentence`)*/

//ends with and starts with function
/*let str2 = "noreen is my friend?";
console.log(str2.length);
console.log(str2.endsWith("?", 20));
console.log(str2.startsWith("anabia"))*/

//Question 3
/*let str = "ANABIA BAIG";
console.log(str.toLocaleLowerCase());*/

//Question4
/*let str = "please give me 1000";
let amount = str.slice("please give me".length);
console.log(amount);*/

//Question 5
/*let str = "anabia"
console.log(str.replace("b", "d"))*/


//---------------------------------------------------------Arrays----------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------

/*let arr = [23, 34, 45, 67, 56];
console.log(arr.length);
console.log(arr[2]);
arr[0] = 90;
console.log(arr);

for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}*/

//-------------------------------------------------------Array methods
// let arr = [2, 3, 4, 5, 6];
// console.log(arr.toString())
// console.log(arr.join("e"))
/*console.log(arr.push(23));
console.log(arr);
console.log(arr.pop());
console.log(arr)
console.log(arr.shift());
console.log(arr)
console.log(arr.unshift(23));
console.log(arr)
delete arr[3];
console.log(arr);
let arr2 = [1, 7, 8, 9];
console.log(arr.concat(arr2));
const compare = (a, b)=>{
    return a-b;
}
let arr3 = [3, 5, 6, 0, 77, 11]
arr3.sort(compare)
console.log(arr3);
console.log(arr3.reverse());

let arr4 = [77, 66, 55, 44, 33, 22]
// console.log(arr4.splice(2, 2,444,555))
console.log(arr4);
console.log(arr4.slice(2, 4));
console.log(arr4);*/

//-------------------------------------------------------------------Using loops with arrays 
 /*let num = [23, 34, 45, 56, 67, 78];
  for(let i=0; i<num.length; i++){
    console.log(`The number with index ${i} in the above array named num is ${num[i]}`);
  }*/

  /*let num = [23, 34, 45, 56, 67, 78];
  num.forEach((element, index)=>{
    console.log(`The elements with the index ${index} of the above array is: ${element}`);
  });*/

  //Array.from
  /*let name = "Anabia";
  let arrName = Array.from(name);
  console.log(arrName);*/

  //for of and for in 
  /*let myName = "Anabia Baig";
  for(let i of myName){
    console.log(`${i}`);
  }
  for(let i in myName){
    console.log(`${i}`);
  }*/

  //some advance array methods
  //1)Map method
  /*let arr = [23, 43, 54, 65, 67];
  let modifiedArray = arr.map((value, index, array) =>{
    console.log(value, index, array);
    return value + 1;
  })
  console.log(`the modified array is ${modifiedArray}`);*/

  //filter method
  /*let arr = [1,2,3,4,5];
  let arr2 = arr.filter((value)=>{
    // console.log(value);
    return value < 10;
  })
  console.log(arr2);*/

  //reduce method
  /*let arr = [1,2,3,4,5];
  let arr2 = arr.reduce((h1, h2) =>{
    return h1+h2;

  })
  console.log(arr2);*/


//========================================================================================================================================
//======================================================Practice set chapter 5============================================================
//========================================================================================================================================

//Question 1
/*let arr = [1,2,3,4,5];
let a = prompt("enter a number");
a = parseInt(a);
arr.push(a);
console.log(arr);*/

//Question 2

/*let arr = [1,2,3,4,5];
let a;
do{
    a = prompt("enter a number");
    a = parseInt(a);
    arr.push(a);


} while(a!=0);
console.log(arr);*/

//Question 3
/*let arr = [1,29,350,4,5,10,20,30,230,400];
let arr2 = arr.filter((value)=>{
    return value %10==0 ;
})
console.log (arr2);*/

//Question 4
/*let arr = [1,2,3,4,5];
let arr2 = arr.map((element) =>{
    return element * element;
})
console.log(arr2);*/

//Question 4
/*let arr = [1,2,3,4,5];
let arr2 = arr.reduce((x1, x2) =>{
    return x1 * x2;
})
console.log(arr2);*/

//--------------------------------------------guess the number--------------------------------------------------------------
//--------------------------------------------Exercise 1--------------------------------------------------------------------

//solution 1
/*const originalNumber = Math.floor(Math.random() * 100) + 1;

let userGuess;
let numberOfGuesses = 0;


function checkGuess() {
  if (userGuess === originalNumber) {
    console.log(`Congratulations! You guessed the correct number in ${numberOfGuesses} guesses.`);
    return true;
  } else if (userGuess < originalNumber) {
    console.log('Too low! Try again.');
  } else {
    console.log('Too high! Try again.');
  }
  return false; 
}


while (true) {
  
  userGuess = parseInt(prompt('Guess the number between 1 and 100:'));
  numberOfGuesses++;
  
  if (checkGuess()) {
    break;
  }
}


console.log(`Your final score is: ${numberOfGuesses}`);*/

//solution 2
/*let num = Math.random()*100;
num = parseInt(num);
let guess;
let trials = 100;

while(guess !== num){
    trials -= 1;
    guess = prompt("enter the number : ");
    if(guess == num){
        console.log("congrats youve guessed the right number");
        console.log(`you have guessed the number in ${100-trials} chances`);
    }
    else if(guess > num && guess < 100){
        console.log("Your guessed number is greater than the actual number ")
    }
    else if(guess < num && guess > 0){
        console.log("Your guessed number is smaller than the actual number ")

    }
    else{
        console.log("Enter number between 1-100 ");


    }
}*/


//-------------------------------------------------------javascript alert, prompt, confirm-----------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------
/*alert("your script is working properly");
alert("you have to enter a number");
let a = prompt("enter a number here", "23");
a = parseInt(a);
alert("enter a number of type:"+ (typeof(a)));
let write = confirm("do you want to write it on the document");
if(write){
    document.write(a);
    
}
else{
    document.write("please allow me to write");
}*/



//-------------------------------------------------------DOM, BOM and windows object-----------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------



//========================================================================================================================================
//======================================================Practice set chapter 6============================================================
//========================================================================================================================================

let age = prompt("Enter your age");































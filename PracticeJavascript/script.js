// const product = {
//     Name: "pen",
//     rating: 3,
//     price: 30,
//     Discount: true,

// };
// console.log(typeof product);

//arthemeatic operators

// let a = 2;
// let b = 3;
// console.log("a =", a, "& b =", b);
// console.log("sum = ", a+b);
// console.log("sub = ", a-b);
// console.log("mul = ", a*b);
// console.log("div = ", a/b);
// console.log("mod = ", a%b);
// console.log("exp = ", a**b);

//unary operator

// a++;
// console.log("increment operator = ", a);
// b--;
// console.log("decrement = ", b);

//Assignment operator +=, -=, %=, **=

// let a = 3;
// let b = 2;

// a +=4;
// console.log("a = ", a);

//comparison operator
// let a = 2;
// let b = 3;
// console.log("a==b", a==b);
// console.log("a!=b", a!=b);
// console.log("2<3", a<b);

//Logical operator
// let a = 2;
// let b = 3;
// let condition1 = a < b;
// let condition2 = a ==2;
// console.log("condition1 && condition2 =", condition1 && condition2)

//Conditional statement
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

//for loop
// let sum = 0;
// for(let i = 1; i<=10; i++){
//     sum = sum + i;

// }
// console.log("sum is", sum);

//infinite loop
//while loop
// i = 1;
// while(i<=5){
//     console.log("i = ", i);
//     i++;

// }

//do-while loop
// i = 1;
// do{
//     console.log("i = ", i);
//     i++;

// }while(i<=5);

//for-of loop
// let str = "hi";
// let size =0;
// for (let i of str){
//     console.log("i is ", i);
//     size++;
// }
// console.log("total size of characters is: ",size)

//for in loop
// let std = {
//     name: "anabia",
//     age: 23,
//     gpa: 3.3,
//     isPass: true
// }
// for(let key in std){
//     console.log("key =", key, "value =", std[key]);
// }

//Print numbers from 0-100

// for(i= 0; i<=100; i++){
//     console.log(i);
// }

//Print even numbers from 0-100
// for(i= 0; i<=100; i++){
//     if(i%2==0){
//         console.log("num =", i);
//     }
// }

//guess number game
// let gameNum = 20;
// let userNum = prompt("Guess the number: ");
// while(userNum !=gameNum){
//     userNum = prompt("Youve entered the wrong number try again");

// }
// console.log("yoo! You entered the right number");

//strings in js and template literals
// let str = "anabia";
// console.log(str.length);

// let obj = {
//     item:"pen",
//     price:10
// }
// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

//Methods in strings
// let fullName = prompt("enter your fullname without spaces");
// let userName = "@"+ fullName  + fullName.length;
// console.log(userName);

//Arrays in JS
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

//Practice question

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

//functions in JS
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

//DOM  lecture 6
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

//Events
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








 
// var maths = +prompt("Your maths marks")

// var eng = +prompt("Your eng marks")

// var urdu = +prompt("Your urdu marks")

// console.log(typeof maths)

// console.log(typeof urdu)

// console.log(typeof eng)

// var result = (maths + eng + urdu) /300*100

// document.write("Your percentage is " + result + "%")

// let size = "S"

// if(size === "XL"){
//     console.log("Price is 400rs")
// }else if(size === "L"){
//     console.log("Price is 400rs")
// }else if(size === "M"){
//     console.log("Price is 300rs")
// }else{
//     console.log("Price is 200rs")
// }

// let str = "good string"

// if(str[0]==="a" && str.length > 3){
//     console.log("true");
// }
// else{
//     console.log("false");
// }

// let day = 9

// switch(day){
//     case 1:
//         console.log("Monday")
// break;
// case 2:
//     console.log("Tuesday")
// break;
// case 3:
//     console.log("Wedday")
// break;
// case 4:
// console.log("Thursday")
// break;
// case 5:
//     console.log("Friday")
// break;
// case 6:
// console.log("Saturday")
// break;
// case 7:
//     console.log("Sunday")
// break;
// default:
//     console.log("Not Confirmed")
// }

// let age = +prompt("Enter age");
// let name = prompt("Enter name")

// console.log(`${name} is ${age} years old`)



// let give = "     help!      ";

// let msg = console.log(give.trim().toLocaleUpperCase());

// let str = "apnacollege";

// console.log(str.slice(4).replace("l","t"));
// console.log(str.replace("l","t"))

// let start = ["jan", "june", "march", "august"];

// start.splice(0,1,"july");
// console.log(start)


// let arr = ['c' , 'c++', 'html', 'js' , 'j', 'python', 'c#', 'css']

// console.log(arr.reverse().indexOf("js"));

// let arr = [7,9,0,-2];
// console.log(arr.slice(1))

// let arr = "";
// console.log(arr[0])

// let arr = [];
// console.log(typeof arr)

// let myArray = [
//     ["mango", "banana", "orange"],
//     ["olpers", "milkpak", "nurpur"]
//   ];
  
//   for (let i = 0; i < myArray.length; i++) {
//     console.log(i, myArray[i].length);
//     for (let j = 0; j < myArray[i].length; j++) {
//       console.log(`j=${j}  ${myArray[i][j]}`);
//     }
//   }


// let todo = [];
// let cmd = prompt("Enter command! ");

// while (true){
//   if (cmd == "quit"){
//     console.log("Leaving")
//     break;
//   }
//   if (cmd == "add"){
//    let task = prompt(`Enter todo`)
//    todo.push(task)
//    console.log("task added")
//   }
//   else if (cmd == "list"){
//     console.log(`----------------`)
//   for(let i=0; i< todo.length; i++){
//     console.log(i, todo[i]);
//   }
// }
//   else if(cmd == "delete"){
//     let idx = prompt("Enter number to delete a todo");
//     todo.splice(idx,1);
//     console.log("task deleted");
//   }
//   else{
//     console.log("Wrong cmd")
//   }
// }

// let arr = [1,2,3,4,5,6,2,3]
// let num = 2

// for (let i = 0; i< arr.length; i++){
//   if(arr[i] == num){
//     arr.splice(i, 1)
//   }
// }
// console.log(arr)

// let number = 287152;
// let count = 0;

// let copy = number;

// while(copy>0){
//   count++
//   copy = Math.floor(copy/10); 
// }
// console.log(count);

// const userInput = +prompt("Enter number")
// const randomNumber = Math.floor(Math.random() * 100 + 1)

// if (userInput == randomNumber){
//   console.log("Answer is correct")
// }
// else{
//   console.log("Wrong answer")
// }

// const carDetails = {
//   car : "City",
//   model : 2016,
//   color : "Silver"
// };
// carDetails.month = "December"
// document.write(carDetails)

// function add(a,b){
//   return a + b
// }
// let sum = add(7,9)
// console.log(sum)

// const value = (a,b) =>{
//   return a + b
// } 
// let sum =  value(6,8)
// console.log(sum)

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let num = 3;

// function greaterNumber (arr,num){
//     for (let i=0; i<arr.length; i++){
//         if (arr[i] > num){
//             console.log(`numbers: ${arr[i]}`)
//         }
//     }
// }

// greaterNumber(arr,num);

// let str = "abcdabcdefgggh";

// function getUnique(str) {
//     let ans = "";
//     for (let i = 0; i < str.length; i++) {
//         let currChar = str[i];
//         if (ans.indexOf(currChar) === -1) {
//             ans += currChar;
//         }
//     }
//     console.log("Unique characters:", ans);
// }
// console.log("Original string:", str);
// getUnique(str);

// function Countries() {
//     let country1 = prompt("Enter 1st country name");
//     let country2 = prompt("Enter 2nd country name");
//     let country3 = prompt("Enter 3rd country name");

//     // Assume the first country is the largest initially
//     let largestCountry = country1;

//     // Compare with country2
//     if (country2.length > largestCountry.length) {
//         largestCountry = country2;
//     }

//     // Compare with country3
//     if (country3.length > largestCountry.length) {
//         largestCountry = country3;
//     }

//     console.log(`The country with the longest name is: ${largestCountry}`);
// }

// Countries();

// let str = "sarim";

// function vowels(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {  // Fixed typo 'lenght' to 'length'
//         if (
//             str.charAt(i) == "a" ||
//             str.charAt(i) == "e" || 
//             str.charAt(i) == "i" || 
//             str.charAt(i) == "o" || 
//             str.charAt(i) == "u"
//         ) {
//             count++;
//         }
//     }
//     console.log(count);  // Moved outside the loop to print the final count
// }

// vowels(str);


// function generateNumber() {
//     let number = Math.floor(Math.random() * 10 + 1);
//     console.log(number);
// }
// generateNumber();


// const car = {
//     make: "Honda",
//     model: 2016,
//     varient: "1.3 ivtec",
//     color: "Silver",
//     getinfo() {
//         console.log(this.color);
//     }
// }

// function getModel(){
//     console.log(this.model)
// }
// getModel()

// const square = (n) => n**n;
// console.log(square(2));

// setInterval(()=>{
//     console.log(`Hello World`)
// },2000)


// const average = (arr) => {
//     let sum = 0;
//     for (let number of arr){
//         sum += number;
//     }
//     return sum / arr.length;
// };

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(average(arr));


// const Num = (n) => {
//     if (n % 2 == 0){
//         return `${n} is even`
//     }
//     else{
//         return `${n} is odd`
//     }
// }

// console.log(Num(60));

// let lenght = 4 ;
// function callBack(){
//     console.log(this.message);
// }
// const object = {
//     lenght: 5,
//     method(callBack) {
//         callBack();
//     },
// };

// object.method(callBack, 1,2);

// let num  = [10,20,30,40,50,65];

// let multiples = num.every((el) => el % 10 == 0)
// console.log(`answers ${multiples}`)

// let arr = [1,4,8,7,9,95,0,6,5]

// let minimum = arr.reduce((min, el) => {
//     if( el< min){
//         return el
//     }else{
//         return min
//     }
// })
// console.log(minimum)

// let arr = [1,2,3,4,5,6,7,8,9,10];

// let sum = arr.reduce((acc,el) => (acc+el))
// console.log(`sum = ${sum}`)

// let multiply = arr.reduce((acc,el)=> (acc*el))
// console.log(`output = ${multiply}`)

// let avg = arr.reduce((acc,el)=> (acc+el/10))
// console.log(`avg = ${avg}`)

// let arr = [1,2,3,4,5,6,7,8,9,10];

// let newArr = arr.map((arr) => arr + 5)
// console.log(`Output = ${newArr}`)

// let arr = ['hello'];

// let capital = arr.map((arr) => console.log(arr.toUpperCase())
// );

// const doubleAndReturnArgs = (arr, ...args) => [
//     ...arr,
//     ...args.map((v) => v * 2),
// ];

// doubleAndReturnArgs([1,2,3], 4, 4);
// doubleAndReturnArgs([2],10,4);

// const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
// mergeObjects({a:1, b:2}, {c:3, d:4});

// let newBtn = document.createElement('button');
// newBtn.innerText = 'Click me!'
// newBtn.style.backgroundColor = 'red'
// document.body.appendChild(newBtn)

// newBtn.setAttribute('id', 'btn')
// const newElement = document.querySelector('#btn');
// newElement.innerHTML = 'username'
// newElement.style.backgroundColor = 'blue';
// newElement.style.color = 'white';

// let heading = document.createElement('h1');
// heading.innerText = 'DOM PRACTISE';
// document.body.appendChild(heading);
// heading.style.color = 'purple';
// heading.style.textDecoration = 'underline';

// let para = document.createElement('p');
// para.innerHTML = '<b>Practising</b> JS DOM';
// document.body.appendChild(para)

// let box = document.getElementById("box")

// box.addEventListener("dblclick", function(){
//     box.style.backgroundColor = "red"
// })

// let newBtn = document.getElementById("btn")

// newBtn.addEventListener("click", function(){
//     newBtn.style.backgroundColor = "green"
// })

// let h2 = document.getElementById("heading");

// let bar = document.getElementById("search");

// bar.addEventListener("input", function(event){
//     h2.innerText = bar.value
// });
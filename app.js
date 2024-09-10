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


const car = {
    make: "Honda",
    model: 2016,
    varient: "1.3 ivtec",
    color: "Silver",
    getinfo() {
        console.log(this.color);
    }
}

function getModel(){
    console.log(this.model)
}
getModel
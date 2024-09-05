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

let number = 287152;
let count = 0;

let copy = number;

while(copy>0){
  count++
  copy = Math.floor(copy/10); 
}
console.log(count);
var maths = +prompt("Your maths marks")

var eng = +prompt("Your eng marks")

var urdu = +prompt("Your urdu marks")

console.log(typeof maths)

console.log(typeof urdu)

console.log(typeof eng)

var result = (maths + eng + urdu) /300*100

document.write("Your percentage is " + result + "%")
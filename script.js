const mydetail = {
    name: "Harshit", //string
    age: 20, //number
    city: "Mumbai", //string
    isStudent: true, //boolean
    hobbies: ["coding","gaming"] // Array of hobbies
};

console.log(mydetail);

// //Operator
// //Arithmetic oprators
// let a = 5;
// let b = 10;
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)

// //Assignment operator
// console.log(a += 5) // a = a + 5
// console.log(a -= 2) // a = a - 2
// console.log(a *= 2) // a = a * 2
// console.log(a /= 2) // a = a / 2

//Conditional operator
// //if statement
// let age = 20
// if (age > 18){
//     console.log("Allow to Vote");
// }else{
//     console.log("Not Allow to Vote");
// }
// let marks = 75;
// if (marks >= 90) {
//     console.log("Grade A");
// }else if (marks >= 75) {
//     console.log("Grade B");
// }else if (marks >= 50) {
//     console.log("Grade C");
// }else {
//     console.log("Grade D");
// }

// age = 19 ? "adult": "minor";
// console.log(age);

prompt("Enter your age: ");
let userAge = parseInt(prompt("Enter your age: "));
if (userAge >= 18) {
    console.log("You are eligible to vote.");
}
else {
    console.log("You are not eligible to vote.");
}
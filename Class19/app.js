// Awitch Syntax
// switch (expression){
//     case 1:
//         break;
//     case 2:
//         break;
//     case 3:
//         break;
//     case 4:
//         break;
//     default:
//         break
// }

// // Examploe 01

// var a = 5;
// var b = 0;

// switch (a + b) {
//     case 5:
//         alert("The Value is five");
//         break;
//     case 10:
//         alert("The Value is Ten");
//         break;
//     default:
//         alert("The Value is neither five or ten");
//         break;

// }

// // Example 2

// var a = 5;
// var b = 10;

// switch (a+b){
//     case 5:
//         alert("The Value is five");
//         break;
//     case 10:
//         alert("The Value is Ten");
//         break;
//     default:
//         alert("The Value is neither five or ten");
//         break;

// }

// // Examploe 03

// var a = 5;
// var b = 5;

// switch (a + b) {
//     case 5:
//         alert("The Value is five");
//         break;
//     case 10:
//         alert("The Value is Ten");
//         break;
//     default:
//         alert("The Value is neither five or ten");
//         break;

// }

// const weight = 102;

// switch( weight){
//     case 156:
//         alert("Height is 86");
//         break;
//     case 107:
//         alert("Height is 96");
//         break;
//     case 102:
//         alert("Height is 56");
//         break;
//         default:
//         alert("by default");
// }

const weight = +prompt("Enter weight");

// const weight = 156;

switch (weight) {
  case 156:
    alert("Height is 86");
    break;
  case 157:
    alert("Height is 70");
    break;
  case 107:
    alert("Height is 96");
    break;
  case 158:
    alert("Height is 86");
    break;
  case 188:
    alert("Height is 72");
    break;
  case 102:
    alert("Height is 56");
    break;
  default:
    alert("Default Value");
}

const randomNumber = Math.random() * 100 + 1;

console.log(randomNumber);

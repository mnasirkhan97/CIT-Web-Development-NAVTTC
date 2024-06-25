for (i = num; i > 1; i--) {}

// Method 01
var num = +prompt("Enter a number");

var factorial = 1;

for (i = num; i > 1; i--) {
  factorial = factorial * i;
}

document.write("Factorial value is " + factorial);

//Method 02

// var num = +prompt("Enter a number for Factorial");

// for (var i = num; i > 1; i--){
//     num = num * (i - 1)
// }

// document.write("Factorial value is " + num)

/// while loop

// var i = 1;

//     while (i <= 10){
//         document.write(i);

//         i++;
//     }

//     var a = 5;
//     var b = 7;

//     while (a < b){
//     document.write(b);
//     a++;
// }

// var x = 10;
// var y = 12;

// while ( x < y ){
//     document.write(y)
//     x++;
// }

//     var a = 5;
//     var b = 7;

//     while (b+2 > a){
//     document.write(b);
//     a++;
// }

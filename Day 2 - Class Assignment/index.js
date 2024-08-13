

// let n = 5;
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // creating spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += "  ";
//   }
//   // creating numbers
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     string += k+" ";
//   }
//   string += "\n";
// }
// console.log(string);
// Q2.)
const n = 5;
let str = '';
for (let i = 1; i <= n; i++) {
    
    for (let j = 1; j <= n; j++) {
        if (j <= n - i) {
            str += '  ';
        } else {
            str += j+' ';
        }
    }
    str += '\n';
}    
console.log(str);

// Q2.) Write a program in javascript to create a pattern like this

// let n = 5;
// let string = "";
// Pyramid
// for (let i = 1; i <= n; i++) {
//   for (let k = 1; k <= i; k++) {
//     string += k +" ";
//   }
//   string += "\n";
// }
// // Reverse Pyramid
// for (let i = 1; i <= n - 1; i++) {
//   for (let k = 1; k <= n - i; k++) {
//     string += k + " ";
//   }
//   string += "\n";
// }
// console.log(string);

//Q4.) Write a program in javascript to create a pattern like this.

// let n = 5;
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // creating spaces
//   for (let j = 1; j < i; j++) {
//     string += " ";
//   }
//   // creating numbers
//   for (let k = 1; k <= 2 * (n - i + 1) - 1; k++) {
//     string += k +" ";
//   }
//   string += "\n";
// }
// console.log(string);


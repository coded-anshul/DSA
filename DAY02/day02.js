// console.log(Math.floor(4.3));
// console.log(Math.ceil(4.3));
// console.log(Math.round(4.5));
// console.log(Math.trunc(4.954969524));
// console.log(Math.sqrt(9));
// console.log(Math.cbrt(27));
// console.log(Math.abs(-4));
// console.log(Math.max(2,3));
// console.log(Math.min(2,3));
// console.log(Math.random());
//console.log(Math.pow(2,3));
console.log(Math.floor(Math.random()*900+100));



var principle = Number(prompt("enter the principle"));
var rate = Number(prompt("enter the rate"));
var time =Number(prompt("enter the time"));

var amount = principle*(1+ rate/100);
var amt = Math.pow(amount,time);
var CI= amt-principle;

console.log(CI);
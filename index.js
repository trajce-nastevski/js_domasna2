// 1. Declare variables and use the assignment operators ( print the results)
let var1 = 12;
let var2 = 9;
let var3 = 6;
let var4 = 8;
let var5 = 9;

var1 += 3;
console.log(var1);
var2 -= 3;
console.log(var2);
var3 *= 2;
console.log(var3);
var4 /= 2;
console.log(var4);
var5 %= 2;
console.log(var5);

// 2. Try out the two kind of alerts that have been studied.
window.alert('Testing the first Alert');
alert('Testing the second alert');
let printOut = confirm('Testing out the confirm alert');
console.log(printOut);

// 3. Try out the different types of loggings in the console
console.error('This is an error log');
console.table(['car', 'motorcycle', 'bike']);
console.log(['car', 'motorcycle', 'bike']);
let car = {name: 'Volkswagen', year: 2013};
console.dir(car);
console.info('Semos course: JavaScript basics.');
console.time('script');
setTimeout(() => {
     console.timeEnd('script');
}, 5000);

// * Bonus: Try and find out new types of loggings in the console
console.warn('This is a warning log');
console.assert(false);
console.clear();
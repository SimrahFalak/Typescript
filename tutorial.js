var id = 5;
var company = "Hudsoft";
var isPublished = true;
//let x: any = []; // its also possible
var x = "Hello";
var ids = [1, 2, 3, 4, 5];
var arr = [1, true, "Hello"];
var concatenateValues = function (a, b) {
    return a + b;
};
// console.log(concatenateValues(1,2)); // 3 error
console.log(concatenateValues("1", "2")); // 3 error
console.log(concatenateValues("Hello", "World")); // HelloWorld

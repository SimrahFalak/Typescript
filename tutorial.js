//===================Normal Typescript Code===================
// let id: number =5;
// let company: string = "Hudsoft";
// let isPublished: boolean = true;
//let x: any = []; // its also possible
// let x: any = "Hello";                
// let ids: number[] = [1, 2, 3, 4, 5];
// let arr: any[] = [1, true, "Hello"];
//===========================Functions==========================
// const concatenateValues=(a:string,b:string)=>{
//     return a + b;
// }
// // console.log(concatenateValues(1,2)); // 3 error
// console.log(concatenateValues("1","2")); // 3 error
// console.log(concatenateValues("Hello", "World")); // HelloWorld
// const concatenateValues=(a:string,b:string): string =>{
//     return 4;   // return "4"; // uncommenting this will fix the error
// }
//===========================Objects==========================
// interface UserInterface {  // a blueprint for the object
//     id: number;
//     name: string;
//     age: number;
// }
// const User : UserInterface = {   // it assumed type itself
//     id:2,
//     name: "simrah",
//     age: 20,
// }
// User.id = 3; // this is allowed
// User.id = "3"; // this is not allowed, as id is a number
// interface UserInterface {  // a blueprint for the object
//     id: number;
//     name: string;
//     age?: number;   //  agr?: shows, this is optional property and can be removed
// }
// const User : UserInterface = {   // error cz interface has age property
//     id:2,
//     name: "simrah",
// }
// console.log(User.age)   // undefined 
// if(!User.age){ 
//     console.log("Age is not defined"); // this will not throw an error
// }    
// else{  
//     console.log(User.age); // this will not throw an error
// }
// interface UserInterface {  // a blueprint for the object
//     id: number;
//     name: string;
//     age?: number;   //  agr?: shows, this is optional property and can be removed
//     greet(message:string): void;  // no return type
// }
// const User : UserInterface = {   // error cz interface has age property
//     id:2,
//     name: "simrah",
//     greet(message){
//         console.log(message);
//     }
// }
// User.greet("Hello"); // this will not throw an error
//=========================== Types ==========================
// const printId = (id:string | number)=>{
//     console.log(`The ID is: ${id}`);   
// }
// printId(1); 
// printId("Id123"); 
// union Types allow you to define a type that can be one of several types.
// type ID = string | number; // creating a type alias for string or number
// const printId = (id: ID)=>{
//     console.log(`The ID is: ${id}`);   
// }
// printId(1); 
// printId("Id123"); 
// Intersection Types allow you to combine multiple types into one.
// interface BusinessPartner {
//     name : string,
//     creditScore: number
// }
// interface UserIdentity {
//     id : number,
//     email: string
// }
// type Employee = BusinessPartner & UserIdentity  // if replace & with | then it will be union type and we can use either of the types
// const signContract = (employee: Employee): void => {
//     console.log(`Contract signed for ${employee.name} with ID ${employee.id} and credit score ${employee.creditScore}`);
// }
// signContract({
//     name: "John Doe",
//     creditScore: 700,
//     id: 123,
//     email: "johndoe19@gmail.com" })
//=========================== Enums ==========================
// errors could be : unauthoried, user does not exist, wrong credentials, internal
// enum LoginError{
//     Unauthorized = "Unauthorized",
//     UserDoesNotExist = "User does not exist",
//     WrongCredentials = "Wrong credentials",
//     InternalError = "Internal"
// } 
// const printErrorMsg = (error: LoginError)=>{
//     if (error==LoginError.Unauthorized){
//         console.log("User not authorized");
//     }
//     else if (error==LoginError.UserDoesNotExist){
//         console.log("User does not exist");
//     }
//     else if (error==LoginError.WrongCredentials){
//         console.log("Wrong credentials");
//     }
//     else{
//         console.log("Internal error");
//     }
// }
// printErrorMsg(LoginError.Unauthorized);
//=========================== Generics ==========================
// T as UserInterface
// T means it can use different data types
var StorageContainer = /** @class */ (function () {
    function StorageContainer() {
        this.contents = [];
    }
    StorageContainer.prototype.addItem = function (item) {
        this.contents.push(item);
    };
    StorageContainer.prototype.getItem = function (idx) {
        {
            return this.contents[idx];
        }
    };
    return StorageContainer;
}());
var usernames = new StorageContainer(); //creating instance for the class
usernames.addItem("simrah");
usernames.addItem("hadi");
usernames.addItem("jannat");
console.log(usernames.getItem(0));
var friends = new StorageContainer(); //creating instance for the class
friends.addItem(2);
friends.addItem(3);
friends.addItem(2);
console.log(friends.getItem(0));

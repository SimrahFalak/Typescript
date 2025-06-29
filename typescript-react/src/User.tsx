// =====================Context API========================



// export const User = (props : User) => {
//   return (
//     <div>
//         <p>Name: {props.name}</p>
//         <p>Age: {props.age}</p>
//         <p>Status: {props.isActive ? "Active" : "Inactive"}</p>
//     </div>
//   )
// }




//=================================Enum=============================

//If we want to add cpuntry Instead of keeping it input we can keep select, To limit, to have more control 

// interface User{ 
//     name: string;  
//     age: number;
//     isActive: boolean; 
//     country : Countries; 
// }

// export enum Countries{
//     Brazil = "Brazil",
//     France = "France",
//     Pakistan = "Pakistan"
// }

// export const User = (props : User) => {
//   return (
//     <div>
//         <p>Name: {props.name}</p>
//         <p>Age: {props.age}</p>
//         <p>Status: {props.isActive ? "Active" : "Inactive"}</p>
//         <p>Country : {props.country}</p>
//     </div>
//   )
// }
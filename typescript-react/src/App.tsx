//===================== What I learned ===================
// Learned about 
// Intro
// Explanation of Boilerplate Code
// Defining Props in TypeScript
// Hooks using TypeScript
// working with Context API
// Enum in TypeScript
// Converting JS to TS components


// import './App.css'
// import Person from './Person';

// function App() {
// //  let name: string = 'World';
// //  let age: number = 30;
// //  let isActive: boolean = true;
// //  let person: any = 3
// // person = "Simrah"

//   const fetchUser = () =>({name: "Ahad", age: 30, isActive: null}) // this is fetch that returns an response
//   const userFetched = fetchUser(); // this is the response that we get from fetch

//   return (
//     <>
//       <Person name={"Falak"} age={32} isActive={false} />{" "}

//       {/* <Person name={userFetched.name} age={userFetched.age} isActive={userFetched.isActive} />{" "} highlights null, so you need to over handle these things */}
      
//       {/* works same but highlights error in TS */}
//       <Person name={"Simrah"} age={"30"} isActive={true} />{" "}
      
//       {/* works here too but highlights error in TS  */}
//       <Person name={"Simrah"} age={["e"]} isActive={true} />{" "}

//     </>
//   )
// }

// export default App



// ========================== App for Context ======================== 

// import { User } from './User';
// import { UserContext, UserProvider } from './UserContextProvider';
// import { useContext } from 'react';

// export const App = () => {
//   const {users, addUser, updateUser, deleteUser} = useContext(UserContext)

//   return (
//     <UserProvider>
//     <User name={"Falak"} age={32} isActive={false} />{" "}

//     </UserProvider>
//   )
// }


// ========================== Enum  ======================== 

// import { User, Countries  } from './User';
// import './App.css'

// const App = () => {

//   return (
//     <>
//     <User name={"Falak"} age={32} isActive={false} country={Countries.Brazil}/>{" "}

//     </>
//   )
// }

// export default App;
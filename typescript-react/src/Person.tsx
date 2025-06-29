// This is a React functional component that displays a person's information.

// const Person = (props) => {  {/* props: any (is assumed here)*/}
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//       <p>Age: {props.age}</p>
//       <p>Status: {props.isActive ? "Active" : "Inactive"}</p>
//     </div>  
//   )
// }


// This is a React functional component that with ts interface displays a person's information.
// import { useState, type ReactElement } from 'react';

// export interface Person{  //adding export so that its could be used at multile places
//     name: string;  // defining type for name,
//     age: number;  // defining type for age
//     isActive: boolean;  // defining type for isActive
//     }  // creating interface for props


// const Person = (props : Person) => {  {/* creating interface for props */}

//     // const [isShowDetails, setIsShowDetails] = useState(false); // we write false in it, means its boolean
    
//     // setIsShowDetails("true"); // this will give error in TS, as we are trying to set a string value to a boolean state


//     // we write like that 
//     // const [isShowDetails, setIsShowDetails] = useState<boolean | null>(false); // allowing null also

//     const [isShowDetails, setIsShowDetails] = useState<boolean>(false); 
//     const [personBio, setPersonBio] = useState<string | null >(null); // this is for input field, we can also use it for text area


//     const toggleDetails = () => {
//         setIsShowDetails(prev=> !prev); // toggling the boolean value
//     }

//     const handleChange = (event : React.ChangeEvent<HTMLInputElement>)=>{
//       setPersonBio(event.target.value)
//     }

//     const handleSubmit = (event :React.FormEvent<HTMLFormElement>)=>{
//       event.preventDefault()
//     }

//   return (
//     <div>
//       {isShowDetails && (
//         <>
//           <h2>Name: {props.name}</h2>
//           <p>Age: {props.age}</p>
//           <p>Status: {props.isActive ? "Active" : "Inactive"}</p>
//         </>
//       )}
//         {/* <button onClick={toggleDetails}>Show Info</button> */}

//         {/*state allows to type in the fields */}
//         <> {props.name} Bio: {!personBio ? "No Bio Available" : personBio}
//         <input type="text" onChange={handleChange} name="" id="" />
//         </>

//     </div>
//   )
// }

// export default Person




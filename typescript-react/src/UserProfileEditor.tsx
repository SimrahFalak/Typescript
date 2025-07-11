//===================== Jsx Component =====================

// import React from 'react'
// import { useState } from 'react'

// const UserProfileEditor = ({user, onUpdate}) => {
//     const [name, setName] = useState(user.name)
//     const [email, setEmail] = useState(user.email)

//     const handleSubmit = (e) => {
//         e.preventDefault()
//        onUpdate({...user, name:name, email:email})
//     }

//   return (
//     <form onSubmit={handleSubmit}>
//         <div>
//             <label>Name:</label>
//             <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
//         </div>
//          <div>
//             <label>Email:</label>
//             <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </div>
//         <button type="submit">Update Profile</button>
//     </form>
//   )
// }

// export default UserProfileEditor


//==================== Tsx Component =====================


import React from 'react'
import { useState } from 'react'

interface User{
    name: string;
    email: string;
}

interface Props{
    user: User;
    onUpdate: (user: User)=> void;
}

const UserProfileEditor = ({user, onUpdate}: Props) => {
    const [name, setName] = useState<string>(user.name)
    const [email, setEmail] = useState<string>(user.email)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
       onUpdate({...user, name:name, email:email})
    }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
         <div>
            <label>Email:</label>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit">Update Profile</button>
    </form>
  )
}

export default UserProfileEditor
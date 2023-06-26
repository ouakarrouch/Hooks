import { useState, useEffect } from "react"

export default function Effect() {
    const [users, setUsers] = useState()
    //const [counter, setCounter] = useState()
    const [filterUsers, setFilterUsers] = useState()


useEffect(

() =>{ 
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
    return () => {
        return false
    }
},
[]
)
useEffect(

    () =>{ 
       console.log(users)
    },
    [users]
    )

    useEffect(

        () =>{ 
             setFilterUsers(users)
        },
        [users]
        )
    
const update = () => setCounter( prev => prev + 1 )
const handleChange =(e) => {
   const filter = users.filter(
    user => user.name.toLowerCase().includes(e.target.value)
   )
   setFilterUsers(filter)
}

  return (
    <>
    <input type="text" className="searsh " onInput={handleChange} />
    {filterUsers ?.map(user => <h3 key ={user.id} >{user.name}</h3>)}
    </>
  )
}



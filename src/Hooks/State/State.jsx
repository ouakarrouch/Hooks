import { useState } from "react"

function State() {

  const [posts, setPosts] = useState()
  const [postId, setPostId] = useState(1)

 const updateUp = () => setPostId(x => x + 1)
 const updateDown = () => setPostId(x => x -1)


fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => setPosts(data))


  return (
    <div>
  <button onClick={updateUp}>+</button>
  <button onClick={updateDown}>-</button>

   {posts ?.map( post => <> 
   
   {post.id === postId   ?
   (<> <h1> {post.id } : {post.title }    </h1></>)
   :
   ('')
   
   

   
   
   
   }    
   <br />
   
     </>
    
    
    
    
    
    
    
    )}
    </div>
  )
}

export default State































/*
import { useState } from "react"
export default function State() {

  const posts = fetch('https://jsonplaceholder.typicode.com/postso')
  .then(res => res.json())
  .then(data => console.log(data))
 


  return (
    <h1>ha</h1>
  
  )
  
}

 
 //<h1>{Value}</h1> 
   // <button onClick={Upadate}>Click</button> */
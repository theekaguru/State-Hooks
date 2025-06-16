import { useState } from 'react'
import './App.css'
interface Fruits{
  id:number;
  name:string;
  colour:string
}

function App() {
  const [fruits, setFruits] = useState<Fruits[]>([
    {id: 1 , name:"Apple" , colour:"red"},
    {id: 2 , name:"Banana" , colour:"Yellow"}

  ])

  const RemoveFruit =(id:number)=>{
    setFruits(fruits.filter(fruit =>fruit.id!== id))
  }

  return ( 
    <>
    <div>
      <h2>Favourites</h2>
      <ul>
        {
          fruits.map(fruit =>(
            <li key ={fruit.id} style={{marginBottom:8}}>
              <span style={{color:fruit.colour.toLowerCase()}}> {fruit.name} ({fruit.colour})</span>
            
            <button 
            style={{marginLeft: 12}} 
            onClick={()=>RemoveFruit(fruit.id)}>Remove</button>
            </li>
          ))
        }
      </ul>
    </div>
    </>
  )
}


export default App

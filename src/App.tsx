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
  const[fruitName, setFruitName] = useState<string>("")
  const[fruitColor, setFruitColor] = useState<string>("")

  const RemoveFruit =(id:number)=>{
    setFruits(fruits.filter(fruit =>fruit.id!== id))

    
  }

  const addFruit =()=>{
    if(fruitName && fruitColor){
    setFruits([
      ...fruits,
      {
        id:Date.now(),
        name:fruitName,
        colour:fruitColor
      }
    ]);
    setFruitName("")
    setFruitColor("")
  }
  
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
      <input type='text'
      placeholder='Fruit Name'
      value={fruitName}
      onChange={e=>setFruitName(e.target.value)}
      style  ={{marginRight:8 , padding: 6}}
      />
       <input type='text'
      placeholder='Fruit Color'
      value={fruitColor}
      onChange={e=>setFruitColor(e.target.value)}
      style  ={{marginRight:8 , padding: 6}}
      />
      <button onClick={addFruit}>Add Fruit</button>
    </div>
    </>
  )
}


export default App

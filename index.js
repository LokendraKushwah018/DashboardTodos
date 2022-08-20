import React, { useState } from 'react'
import Container from '../../Components/Layout/Backend/Container'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
  const [input,setInput] = useState("");
  const [items , setItems] = useState([]);

const addItem = () => {
  if(!input){
   
   }else{
  setItems([...items,input]);
  setInput('')
   }
}
const deleteItem = (id) =>{

  const updatedItems = items.filter((elem , ind)=>{
    return ind!== id;
  })
      setItems(updatedItems) 

}

  return (
    <div>
         <Container/>
         <div className="card">
              <div className="card-header">
    <div className='text-center'>
        <h4 className="ion-clipboard mr-5">To Do  List</h4>
        <input type="text" placeholder="Enter Your Item" 
        value={input}
        onChange={(e)=>setInput(e.target.value)}></input>
        <button onClick={addItem}>Add Items</button>
        {
          items.map((elem , ind) => {
            return <div>
              <div key={ind}>
                <h3>{elem}
                <button onClick={()=> deleteItem(ind)}>Delete</button></h3>
            </div>
            </div>
          })       
        }
    </div>               
       
    </div>
    </div>
    </div>
 
  )
}

export default Home

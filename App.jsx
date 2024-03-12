

import { useState } from 'react'
import './App.css'
import Square from './components/Square'
let p
let plays=["","","","","","","","",""]
const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function App() {
 /*  const [plays,setPlays]=["","","","","","","","",""] */
 const [winner,setWinner]=useState('')
  const [xPlayer,setXPlayer]=useState(true)
    function handlePlayer(ind){
       
       if (!plays[ind]){
        p=xPlayer?'X':'O'
        plays[ind]=p
        
       
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (plays[a] && plays[a] === plays[b] && plays[a] === plays[c]) {
            setWinner(plays[a])
           
          }
  
        }
       
        setXPlayer(!xPlayer)

       }
       if(!winner&&plays.filter((ele)=>{
        if(ele){
          return false
        }
        return true
      }).length==0)
      
      setWinner(prev=>{
        if(!prev){
          return 'Draw'
        }
        return prev
      }); 
      
      

        

       }
       
    

  return(<>
    <div className='con'>
      {
        plays.map((ele,ind)=><Square key={ind} ind={ind} ele={ele} handlePlayer={handlePlayer}/>)
      }

   
    </div>
    {winner&&<p>wiiner is {winner}</p>}
    </>
  )
  
}

export default App

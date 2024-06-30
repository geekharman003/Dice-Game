import HomePage from './components/HomePage'
import './App.css'
import { useState } from 'react'
import PlayGame from './components/PlayGame';
function App() {
  const [isClicked,setIsClicked] = useState(false);
 
  const ChangeState = ()=>{
    setIsClicked(prev => !prev);
  }

  return (
   <div>
    {isClicked?<PlayGame />:<HomePage stateStatus = {ChangeState}/>}
   </div>
  )
}

export default App

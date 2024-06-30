import styled from 'styled-components'
import { useState } from 'react'
import NumberSelector from './NumberSelector'
import TotalScore from './TotalScore'
import RollDice from './RollDice'

const PlayGame = () => {
      const [isSelected,setIsSelected] = useState();
      const [randomNumber,setRandomNumber] = useState(1);
      const [Score,SetScore] = useState(0);
      const [error,setError] = useState("");

       const GetRandomNumber = ()=>{
        if(isSelected === undefined) {
           setError("You have not selected any number")
          return;
        }
   setRandomNumber(Math.floor(Math.random()*6+1));
   if(isSelected === randomNumber){
    SetScore(prev => prev+isSelected)
   }
   else{
    SetScore(prev=> prev-2);
   }
   setIsSelected(undefined)
  }

  return (
    <>
    <Main>
      <TotalScore Score={Score}/>
      <NumberSelector isSelected={isSelected} setIsSelected={setIsSelected} error={error} setError={setError}/>
      {/* <div></div> */}
    </Main>
    <DiceContainer>
      <RollDice GetRandomNumber={GetRandomNumber} randomNumber={randomNumber} SetScore={SetScore}/>
    </DiceContainer>
    </>
   
  )
}


export default PlayGame 


const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
`

const DiceContainer = styled.div`
  
`
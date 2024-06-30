
import { useState } from "react";
import styled from "styled-components"

const RollDice = ({GetRandomNumber,randomNumber,SetScore}) => {

    const [rules,setRules] = useState(false);

    const HandleScore =()=>{
        SetScore(0);
    }
   
    const HandleRules =()=>{
       setRules(prev => !prev);
    }

  return (
    <ImageContainer>
        <div className="btn_wrapper" onClick={GetRandomNumber}>
            <img src={`/images/dice_${randomNumber}.png`} alt="dice1" />
            <p>Click on Dice to roll</p>
        <button onClick={HandleScore} className="reset btn">Reset Score</button>
        <button onClick={HandleRules} className="show_rules btn">{rules?"Hide Rules":"Show Rules"}</button>
        </div>

        <div className={rules?"rules":"hide"}>
            <div>
                <p>How to Play dice Game</p>
            </div>
            <p>1. Select any number</p>
            <p>2. Click on dice image</p>
            <p>3. after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>4. if you get wrong guess then 2 point will be dedcuted </p>

        </div>
    </ImageContainer>
  )
}

export default RollDice


const ImageContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;

   .btn_wrapper{
    display: flex;
    flex-direction:column;
    align-items: center;
    gap:20px;
    cursor: pointer;
   }
    .btn_wrapper p{
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    }

.btn{
     border: none;
        border: 1px solid;
        padding: 10px;
        font-size: 17px;
        border-radius: 5px;
        cursor: pointer;
        min-width:220px;
        height: 44px;
}
 .reset{
        background-color: white;
        color: black;
    }

    .show_rules{
        background-color: black;
        color: white;
    }

    .rules{
        display: block;
        text-align: left;
        background: #FBF1F1;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        text-align: left;
        padding: 10px;
        border-radius:5px;

    }

    .rules div{
     text-align: left;
    font-size: 22px;
    font-weight: 700;
    line-height: 36px;
    text-align: left;
    margin-bottom: 5px;
    }

    .hide{
        display: none;
    }
`
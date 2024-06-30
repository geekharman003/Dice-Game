
import styled from "styled-components";


const HomePage = ({stateStatus}) => {
  return (
    <Container>
        <div><img src="/images/dice.png"  alt="" /></div>
        <div className='content'>
            <h1>DICE GAME</h1>
            <Button onClick={stateStatus}>Play Now</Button>
        </div>
    </Container>
  )
}

export default HomePage


const Container = styled.div`
display:flex;
align-items: center;
width:1182px;
/* border:2px solid; */
margin:auto;
height:100vh;


.content{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    /* height:591px; */
    /* width:591px; */
}

.content h1{
  font-size: 70px;
  white-space: nowrap;
}
`

const Button = styled.button`
background-color:black;
color:white;
padding:5px;
border-radius:5px;
width: 220px;

&:hover{
    cursor: pointer;
}
`
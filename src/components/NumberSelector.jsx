import styled from "styled-components"


const NumberSelector = ({error,setError,setIsSelected,isSelected}) => {
    const arr=[1,2,3,4,5,6];
    const numberSelectorHandler = (value) =>{
      setIsSelected(value);
      setError("");
    }
  return (
    <NumberContainer>
      <p className="error">{error}</p>
        <div className="flex">
     {
        arr.map((value,index)=>(
        <Box onClick={()=>numberSelectorHandler(value)}
        isSelected={isSelected===value} key={index}>{value}</Box>
    ))
}
     </div>
<p>Select number</p>
    </NumberContainer>
  )
}

export default NumberSelector


const Box = styled.div`
    height: 75px;
    width: 75px;
    border: 1px solid;
    display: flex;
    cursor: pointer;
    align-items:center;
    justify-content: center;
    font-size: 22px;
  font-weight: 600;
  color:${(props) => (props.isSelected?"white":"black")} ;
  background-color:${(props) => (props.isSelected?"black":"white")}
`

const NumberContainer = styled.div`
display: flex;
flex-direction: column;
justify-content:end;
align-items: flex-end;
    .error{
      color: red;
    }
    .flex{
        display: flex;
        gap: 5px;
    }
`
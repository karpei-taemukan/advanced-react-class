import styled from "styled-components";

const First = styled.div`
display: flex;
`;
const Box = styled.div`
width: 100px;
height: 100px;
background-color: ${(props) => props.bgColor}}; 
`;
const Text = styled.span`
color: white;
`;
 

const Circle = styled(Box)`
border-radius: 50%;
`;

/* Components 확장 -> 다른 components끼리 같은 스타일을 공유할 때 사용 
*/ 


function App() {
  return (
   <First>
    <Box bgColor="teal">
    <Text>Hello</Text>
    </Box>
    <Box bgColor="teal">Box</Box>
    <Circle bgColor="tomato"></Circle>
   </First>
  );
}

export default App;

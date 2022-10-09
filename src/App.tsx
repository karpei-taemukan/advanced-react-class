import styled, {keyframes} from "styled-components";

const First = styled.div`
display: flex;
flex-direction:column;
background-color: ${(props) => props.theme.backgroundColor};

`;

const rotateBox = keyframes`
0%{
transform: rotateX(0deg) translateX(0px);
}

25%{
  transform: rotateX(180deg) translateX(50px);
}

50%{
transform: rotateX(360deg) translateX(100px);

}
75%{
  transform: rotateX(-180deg) translateX(-10px);
}
100%{
  transform: rotateX(0deg) translateX(0px);

}
`
const Emoji = styled.span`font-size: 20px`;

interface Props{
  bgColor?: string,
  bdrd?: string
}

const Box = styled.div<Props>`
display: flex;
justify-content: center;
align-items: center;
width: 100px;
height: 100px;
background-color: ${(props) => props.bgColor}; 
border-radius: ${(props) => props.bdrd};
animation: ${rotateBox} 2s linear infinite;

${Emoji}{
  &:hover{
    font-size: 100px;
  }
} 
`;
// Emoji 는 오직 Box의 자식일 때만 적용
const Text = styled.span`
color: white;
`;
 

const Circle = styled(Box)``;

const Btn = styled.button`
width: 200px;
height: 100px;
color: white;
background-color: tomato;
color: ${(props) => props.theme.textColor};
`;

const Input = styled.input.attrs({required:true, minLength:10})`
background-color: tomato;
width: 200px;
height: 100px;
`;

function App() {

  return (
   <First as="header">
    <Box bdrd="10px" bgColor="teal">
    <Text as="h1">Hello</Text>
    </Box>
    <Box bdrd="20px" bgColor="teal"><Emoji as="p">Box</Emoji></Box>
    <Box bdrd="20px" bgColor="teal"><Emoji as="h1">Box</Emoji></Box>
    <Circle bdrd="50%" bgColor="tomato"></Circle>
    <Btn><Emoji>Log-in</Emoji></Btn>
    <Btn as="a" href="/">Log-in</Btn>
    <div>
   <Input />
   <Input />
   <Input />
   </div>
   </First>
  );
}

export default App;

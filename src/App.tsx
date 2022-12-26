
import { Outlet } from "react-router-dom";
import styled, {keyframes} from "styled-components";
import Ellipse from "./Ellipse";
import Form from "./Form";
import Router from "./Router";

const First = styled.div`
display: flex;
flex-direction:column;
background-color: ${(props) => props.theme.backgroundColor};
gap:20px;
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

interface Props{ // interface란 : object shape을 typescript에게 설먕해주는 방법
  bgColor: string,
  bdrd: string
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

const BoxCircle = styled(Box)``;

const changeBackground = keyframes`
0%{
transform: Scale(0) translateX(0px) rotateZ(0deg);
background-color: #F73541;
color: #F2FF06;
}
25%{
  transform: Scale(1.5) translateX(100px) rotateZ(90deg);
}
50%{
  transform: Scale(2) translateX(200px) rotateZ(180deg);
  background-color: #E60BC5;
  color: #FD7701;
}
75%{
  transform: Scale(1.5) translateX(300px) rotateZ(270deg);
}
100%{
  transform: Scale(0) translateX(400px) rotateZ(360deg);
  background-color: #00F8E7;
  color: #06EA06;
}
`

const Circle = styled.div`
width: 100px;
height: 100px;
background-color: tomato;
border-radius:50px;
line-height: 100px;
text-align: center;
&:active{
animation: ${changeBackground} 3s linear infinite;
}
`;

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
    <BoxCircle bdrd="50%" bgColor="tomato"></BoxCircle>
    <Circle><Emoji>CIRCLE</Emoji></Circle>
    <Btn><Emoji>Log-in</Emoji></Btn>
    <Btn as="a" href="/">Log-in</Btn>
    <div>
   <Input />
   <Input />
   <Input />
   </div>
   <Ellipse borderColor="white" txtColor="brown" />
   <Ellipse txtColor="black" text="?????" />
   <Form />
 
   </First>
  );
}

export default App;


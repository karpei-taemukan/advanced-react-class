import styled from "styled-components";

interface txtProps{
    txtColor: string;
}

const Container = styled.div<txtProps>`
width: 200px;
height: 100px;
background-color:green;
border-radius: 50px;
color: ${props => props.txtColor};
display: flex;
justify-content: center;
align-items: center;
`;



function Ellipse({txtColor}:txtProps){ /*(props:txtProps)        txtColor={props.txtColor} */ 
return <div>
<Container txtColor={txtColor}>Ellipse</Container>
</div>
}

export default Ellipse;
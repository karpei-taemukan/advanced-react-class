import { useState } from "react";
import styled from "styled-components";

interface EllipseProps{
    txtColor: string;
    borderColor?: string;
    text?:string;
}

interface ContainerProps{ /*Container의 속성에서 필요할때 작성 */ 
    txtColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
width: 200px;
height: 100px;
background-color:green;
border-radius: 50px;
color: ${props => props.txtColor};
display: flex;
justify-content: center;
align-items: center;
border: 5px dotted ${props => props.borderColor};
`;



function Ellipse({txtColor, borderColor, text="Ellipse"}:EllipseProps){ /*(props:txtProps)        txtColor={props.txtColor} */ 
//const [value, setValue] = useState<number|string>(0);
return <div>
<Container txtColor={txtColor} borderColor={borderColor ?? "red"}>{text}</Container>
</div>
}

export default Ellipse;
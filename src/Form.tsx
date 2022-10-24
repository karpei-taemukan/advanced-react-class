import {useState} from "react";

function Form(){
    const [value, setValue] = useState("");
const onChange = (event: React.FormEvent<HTMLInputElement>) => 
// 어떤 종류의 Element가 이 onChange 이벤트를 발생시킬지를 특정할 수 있다 
// 즉, 타입스크립트는 onChange 함수가 HTMLInputElement에 의해 실횅될것을 안다
{
//console.log(event.currentTarget.value);
const {currentTarget:{value}} = event;
 setValue(value);
    }

const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
event.preventDefault();
console.log("hi", value);
}

return (
<div>
<form onSubmit={onSubmit}>
<input onChange={onChange} value={value} type="text" placeholder="username"/>
<button>Login</button> 
</form>
</div>)
}

export default Form;

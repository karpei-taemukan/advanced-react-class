import { Link, useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate();
    const onAboutClick = () => {
        navigate("/about");
    }
    return (
        <header>
       <ul>
        <li>
        <Link to={"/"}>Home</Link>
        </li>
        <li>
        <button onClick={onAboutClick}>About</button>
        </li>
       </ul>
        </header>
    )
}

// <Link>를 사용하면 Router.tsx에 넣어야한다

export default Header;
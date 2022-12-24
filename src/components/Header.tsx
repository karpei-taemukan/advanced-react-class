import { Link } from "react-router-dom";

function Header(){
    return (
        <header>
       <ul>
        <li>
        <Link to={"/"}>Home</Link>
        </li>
        <li>
        <Link to={"/about"}>About</Link>
        </li>
       </ul>
        </header>
    )
}

// <Link>를 사용하면 Router.tsx에 넣어야한다

export default Header;
import { Link, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import { users } from "../db";

function Home(){
    const [readSearchParams, setSearchParams] = useSearchParams();

    return (
    <>
    <Header />
    <h1 style={{color:"red"}}>Home</h1>
    <h1>Users</h1>
    <ul>
        {users.map((user) => (
        <li key={user.id}>
            <Link to={`/users/${user.id}`}>
        {user.name}
            </Link>
        </li>
        ))}
    </ul>
    </>
    )
}

export default Home;
import { Link } from "react-router-dom";
import { Outlet, useParams } from "react-router-dom";
import { users } from "../../db";

function User(){
    const {userId} = useParams();

    return (
    <>
        <h1>{users[Number(userId)-1].name}</h1>
        <h1>user id:{userId}</h1>
        <hr />
        <Link to="followers">See followers</Link>
       {/* 
            to="followers" 는 localhost:3000/user/1/followers (상대경로) 
            to="/followers"는 localhost:3000/followers (절대경로)
       */}
        <Outlet context={{
            nameOfMyUser: users[Number(userId)-1].name
        }} />
    </>
    )
}
 
// Outlet은 URL과 매치되는 자식으로 대체시킨다

export default User;
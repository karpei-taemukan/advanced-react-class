import { useOutletContext } from "react-router-dom"

interface IFollowersContext {
    nameOfMyUser:string;
}

function Followers(){
    const {nameOfMyUser} = useOutletContext<IFollowersContext>();
    
    return (<>
        <h1>Followers</h1>
        <h2>Followers={`>`}{nameOfMyUser}</h2>
    </>
        )
}

export default Followers;
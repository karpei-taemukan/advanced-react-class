import React from "react";
import { Outlet } from "react-router-dom";

function Root(){
    return (
        <div>
        <h1>Root</h1>
        <Outlet />
        </div>
    )
}
//  <Outlet />은 Rotuer.tsx에 있는 children의 element를 렌더링하게 해준다
export default Root;
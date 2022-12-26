/*import { BrowserRouter , Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./screens/About";
import Home from "./screens/Home";

function Router(){
return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
)
}

// Route는 React 컴포넌트고 path를 가진다

export default Router; */

import { createBrowserRouter } from "react-router-dom"
import App from "./App";
import ErrorComponent from "./components/ErrorComponent";
import NotFound from "./components/NotFound";
import Root from "./Root";
import About from "./screens/About";
import Home from "./screens/Home";
import Crash from "./screens/Crash";
import User from "./screens/users/User";

const Router = createBrowserRouter([
    {
      path:"/",
      element: <Root />,
      children: [
        {
            path:"",
            element: <Home />,
        },
        {
            path:"about",
            element: <About />
        },
        {
            path:"crash",
            element: <Crash />,
            errorElement: <ErrorComponent /> 
        },
        {
            path:"users/:userId",
            element: <User />
        },

      ],
      errorElement: <NotFound />,
    }
]); 
// Router를 array 형식으로 표현할 수 있게해줌

export default Router;
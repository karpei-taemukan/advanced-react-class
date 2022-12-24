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
import About from "./screens/About";
import Home from "./screens/Home";


const Router = createBrowserRouter([
    {
      path:"/",
      element: <App/>,
      children: [
        {
            path:"",
            element: <Home /> 
        },
        {
            path:"about",
            element: <About />
        }
      ]
    }
]); 
// Router를 array 형식으로 표현할 수 있게해줌

export default Router;

import {createBrowserRouter, Routes, Route, Link,
      NavLink, createRoutesFromElements, RouterProvider } from "react-router";
import Pagina from "./pagina"
import Home from "./Home"
import RoutLayout from "./RoutLayout";
import Docentengek from "./docentengek";
import TestLayout from "./TestLayout";
import Studenten from  "./studenten"
const router = createBrowserRouter(
    createRoutesFromElements(
<Route path="/" element={<RoutLayout/>}>

<Route index element={<Home/>} />

<Route path="faa" element={<Pagina/>} />

<Route path="fam" element={<TestLayout/>} >
<Route path="docent/:id" element={<Docentengek/>}/>
<Route path = "student" element={<Studenten/>} />


</Route>

</Route>


    )
) 


function App() {

return (

<RouterProvider router={router} />


);

}

export default App
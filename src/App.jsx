
    import {createBrowserRouter, Routes, Route, Link,
        NavLink, createRoutesFromElements, RouterProvider } from "react-router";
    import Pagina from "./pagina"
    import Home from "./Home"
    import RoutLayout from "./Layouts/RoutLayout";
    import Docentengek from "./Kinderen/docentengek";
    import TestLayout from "./Layouts/TestLayout";
    import Studenten from  "./Kinderen/studenten";
    import Nietgevonden from "./old trash/Nietgevonden";
    import ProjectDetails from "./getprojects enzo/ProjectDetails";

    const router = createBrowserRouter(
        createRoutesFromElements(
    <Route path="/" element={<RoutLayout/>}>

    <Route index element={<Home/>} />

    <Route path="faa" element={<Pagina/>} />

    <Route path="fam" element={<TestLayout/> } >

    <Route path="docent" element={<Docentengek/>}/>

    <Route path = "student" element={<Studenten/>} />

    </Route>

    <Route path = "projectdetails/:id" element={<ProjectDetails/>} />
    <Route path = "*" element = {<Nietgevonden/>}/>


    </Route>


        )
    ) 


    function App() {

    return (

    <RouterProvider router={router} />


    );

    }

    export default App
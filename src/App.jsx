
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
import { createContext, useContext, useEffect, useState } from "react";
import { ingelogdAScontext } from "./loginstuff/Gebruikerscontext";

    const router = createBrowserRouter(
        createRoutesFromElements(
    <Route path="/" element={<RoutLayout/>}>


    <Route index element={ <Home/>} />

 {/* <Route path="loginpagina"  element={<Loginpagina/>}/>  */}

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


    const [gebruiker, setgebruiker] = useState();



     async function checkAccount(){

        try{
const antwoord = await fetch("/Account/check_Account");

if (antwoord.ok){
const gebruikerEnRols = await antwoord.json();

setgebruiker(gebruikerEnRols);
} else {console.log("geen gebruiker gevonden G " + antwoord.status)}


        } catch(error) {console.log("kan niet accountcheckefetch door "
             + error)}

    }

        useEffect( () => {
          checkAccount() }
            ,[]);


    return (


        <ingelogdAScontext.Provider value={{gebruiker, setgebruiker, checkAccount}}>

    <RouterProvider router={router} />


        </ingelogdAScontext.Provider>


    );

    }

    export default App
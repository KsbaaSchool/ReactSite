import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import projectsnep from "./NepProjects"
import { projectenlijstcontext } from "../Home";
import { ingelogdAScontext } from "../loginstuff/Gebruikerscontext";

function Getprojects() {
  const [projects, setprojects] = useState([]);

const opgezocht = useContext(projectenlijstcontext);
const { gebruiker }  = useContext(ingelogdAScontext)

function bestaatgebruiker(){

if(gebruiker) return true
else false

}

function magVerwijderen(){

if (gebruiker.usersrol.includes("Editor")) return true
else return false


  
}

  async function haalreposop() {
  
  try {
    const antwoord = await fetch(
      "/Projects",
    );
    const jsonlijstje = await antwoord.json();

    if (jsonlijstje && jsonlijstje.length > 0)
    { setprojects(jsonlijstje); }
else { setprojects(projectsnep); }
  } catch (fout)
{console.log("WERKT NIET MAN BRO"); setprojects(projectsnep); }


  } 

  useEffect(() => {
   haalreposop();
  }, []);

  




  const toonDezeProjects = projects.filter((project) =>
    project.titel.toLowerCase().includes(opgezocht.toLowerCase()),
  );

  const projectsasList = toonDezeProjects.map((project) => (
    <li key={project.id}>
          <Link to={`projectdetails/${project.id}`}> 
          
                <b>{project.titel}</b>: &nbsp; {project.id}

          </Link>

    </li>
  ));

  return (
    <>

    
      <ul>{projectsasList}</ul>
{bestaatgebruiker() && magVerwijderen() && <button>VerwijderALLES</button>  }
    </>
  );
}

export default Getprojects;

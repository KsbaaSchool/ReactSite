import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import projectsnep from "./NepProjects"


function Getprojects(props) {
  const [projects, setprojects] = useState([]);

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
    project.titel.toLowerCase().includes(props.opgezocht.toLowerCase()),
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
    </>
  );
}

export default Getprojects;

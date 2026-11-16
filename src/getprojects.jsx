import React,{useEffect, useState} from "react"

function Getprojects(props){

    
const [projects, setprojects] = useState([]);


async function haalreposop(){

const antwoord = await fetch("https://api.github.com/users/KsbaaSchool/repos");
const jsonlijstje = await antwoord.json();

setprojects(jsonlijstje);
}
    

useEffect(

    () => {
haalreposop();
 }, [] );




  const projectsnep = [
    {
        id: 1,
        name: "Website maken",
        beschrijving: "Een website bouwen met HTML, CSS en JavaScript."
    },
    {
        id: 2,
        name: "Webshop",
        beschrijving: "Een online winkel maken waar gebruikers producten kunnen kopen."
    },
    {
        id: 3,
        name: "Portfolio",
        beschrijving: "Een persoonlijke website maken om projecten te laten zien."
    },
    {
        id: 4,
        name: "Sportapp",
        beschrijving: "Een app maken waarin gebruikers hun trainingen kunnen bijhouden."
    }
];




const toonDezeProjects = projects.filter(project => project.name.toLowerCase().includes(props.opgezocht.toLowerCase()))

const projectsasList = toonDezeProjects.map(project => <li key = {project.id}> <b>{project.name}</b>: &nbsp; {project.id}</li>  );


return(


<>

<ul>{projectsasList}</ul>

</>

)

}

export default Getprojects
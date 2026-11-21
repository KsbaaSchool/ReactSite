import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import nepprojects from "./NepProjects"

async function haalById(id, setproject ){
        try{ const project = await fetch( `/Projects/${id}`) 
    if (project.ok)
        
    {
                const projectje = await project.json();

        setproject(projectje)} else {
              setproject(nepprojects.find(p => p.id == id))}


    }
 catch (error) { console.log(error + " DAAROM WERKT NIET")
     setproject(nepprojects.find(p => p.id == id))}


}





export default function ProjectDetails() {

 const {id} = useParams();

 const [project, setproject] = useState({});
 
useEffect( () => { haalById(id,setproject) } ,[id]);
 
    return (


    <div>

<h1>project details:</h1>
<p>dit zijn projectdetails:</p>
{project.gitHubUrl && <p>link: {project.gitHubUrl} </p> }

    </div>


  )
}

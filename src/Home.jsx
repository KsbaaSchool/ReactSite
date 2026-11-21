import Prima from "./old trash/Teller"
import Zoek from "./old trash/Zoek"
import Getprojects from "./getprojects enzo/getprojects"
import { useContext, useState } from "react"
import { createContext } from "react"
import Loginpagina from "./loginstuff/Loginpagina";
import { ingelogdAScontext } from "./loginstuff/Gebruikerscontext"


export const projectenlijstcontext = createContext();


function Home() {

    const {gebruiker} = useContext(ingelogdAScontext);

const [resultaat, setResultaat] = useState("");


function toonRol(){

switch(true)
    {
case gebruiker.usersrol.includes("Admin"): 
return "Admin";
case gebruiker.usersrol.includes("Editor"):
return "Editor";
case gebruiker.usersrol.includes("Gast"):
    return gebruiker.email
    }
return "Onbekende Gebruiker"    

}



if (gebruiker) {
return (



<>
<h1>hallo: {toonRol()}</h1>
<p>vndg we chille mense</p>


<projectenlijstcontext.Provider value={setResultaat}>
<Zoek/>
</projectenlijstcontext.Provider>



<projectenlijstcontext.Provider value={resultaat}>
<Getprojects/>
</projectenlijstcontext.Provider>


</>
)  } else { return(<Loginpagina/>) }

}

export default Home
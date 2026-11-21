import Prima from "./old trash/Teller"
import Zoek from "./old trash/Zoek"
import Getprojects from "./getprojects enzo/getprojects"
import { useState } from "react"


function Home() {

const projectenlijstcontext = createContext();

const [resultaat, setResultaat] = useState("")



return (



<>
<h1>hallo</h1>
<p>vndg we chille mense</p>


<projectenlijstcontext.Provider value={setResultaat}>
<Zoek/>
</projectenlijstcontext.Provider>


<projectenlijstcontext.Provider value={resultaat}>
<Getprojects/>
</projectenlijstcontext.Provider>


</>
)  

}

export default Home
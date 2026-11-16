import Prima from "./Teller"
import Zoek from "./Zoek"
import Getprojects from "./getprojects"
import { useState } from "react"


function App() {

const [resultaat, setResultaat] = useState("niks gevonden")


return (

<>
<h1>hallo</h1>
<p>vndg we chille mense</p>
<Prima></Prima>


<Zoek setResultaat = {setResultaat}/>

<Getprojects opgezocht = {resultaat}/>

</>
)  

}

export default App
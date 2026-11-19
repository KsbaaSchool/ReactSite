import Prima from "./Teller"
import Zoek from "./Zoek"
import Getprojects from "./getprojects"
import { useState } from "react"


function Home() {

const [resultaat, setResultaat] = useState("")



return (



<>
<h1>hallo</h1>
<p>vndg we chille mense</p>



<Zoek setResultaat = {setResultaat}/>

<Getprojects opgezocht = {resultaat}/>
</>
)  

}

export default Home
import Prima from "./Teller"
import Zoek from "./Zoek"
import Getprojects from "./getprojects"
import { useState } from "react"
import { Routes, Route, Link } from "react-router";



function App() {

const [resultaat, setResultaat] = useState("")


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
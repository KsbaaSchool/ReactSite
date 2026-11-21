import React,{useContext, useState} from "react";

import { projectenlijstcontext } from "../Home";

function Zoek () {

const setResultaat = useContext(projectenlijstcontext);

// const updateResultaat = (e) => {e.preventDefault();
   // setResultaat(e.target.zoekbalk.value )}

    return ( 

<>
<form className="zoekbalk">

<input name = "zoekbalk" className="inputvalue" placeholder="typ iets" onChange={ (e) => setResultaat(e.target.value)} />

</form>


</>
    )
}


export default Zoek
import React,{useState} from "react";

function Zoek (props) {


// const updateResultaat = (e) => {e.preventDefault();
   // setResultaat(e.target.zoekbalk.value )}

    return ( 

<>
<form className="zoekbalk">

<input name = "zoekbalk" className="inputvalue" placeholder="typ iets" onChange={ (e) => props.setResultaat(e.target.value)} />

</form>


</>
    )
}


export default Zoek
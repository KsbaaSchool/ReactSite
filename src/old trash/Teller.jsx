import React,{useState} from "react"


function Prima() {

const [tel, settel] = useState(0);

const telplus1 = () => {settel(tel+ 1)}

return (

<div>
<header><h2>LETS GOO FAMOS</h2></header>
<p>{tel}</p>
<button onClick={telplus1}>KLIK HIER</button>
</div>


)

}

export default Prima
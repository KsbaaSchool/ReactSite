import React, { useContext, useState } from 'react'
import { ingelogdAScontext } from './Gebruikerscontext'
import { useNavigate } from 'react-router';



async function LoginGebruiker(){

    try{
    const antwoord = await fetch ("/Account/login");

const data = await antwoord.json();
if (data.OK){
    return data;
} else return data.status
    }

    catch(error){ console.log("kan niet inlogge " + error)}


}

export default function Loginpagina() {

        const {setgebruiker, checkAccount} = useContext(ingelogdAScontext)

        const navigate = useNavigate();

    const [foutmelding, setfoutmelding] = useState(false);
const [email, setEmail] = useState("");
const [wachtwoord, setWachtwoord] = useState("");



async function inloggen(e){
e.preventDefault();
    try{
const antwoord = await fetch("/Account/login", {
    method: "Post",
    headers:{
"Content-Type": "application/json"

    },
body: JSON.stringify({

email: email,
wachtwoord: wachtwoord

})    }); 

if (!antwoord.ok){

    setfoutmelding(true);
} else {
    await checkAccount()

navigate("/");
}

} catch (error){

    console.log("kan niet fetche "+ error )
}

  


}


  return (
    <div>

<form onSubmit={inloggen}>

<label htmlFor='email'>Vul hier je email in</label>
<br></br>
    <input id = 'email' onChange={(e) =>
{setEmail(e.target.value) }

    }/>
<br></br>

<label htmlFor= 'wachtwoord'>Vul hier je wachtwoord in</label>
<br></br>

    <input id= 'wachtwoord' onChange={(e) => {setWachtwoord(e.target.value)}
    
}/>

<br></br>

<button> COME LOGIN</button>

</form>



{foutmelding && <p>VERKEERDE EMAIL OF WACHTWOORD</p>}
    </div>
  )
}

import React, { createContext, useState } from 'react'
import { NavLink, Outlet } from 'react-router'
import Button from '../Buttons/Button'
import { useContext } from 'react'
import pineapple from '../assets/pineapple.webp'
import Button2 from '../Buttons/Button2'


export const buttontextContext = createContext(); 

export default function TestLayout() {


  const [buttontext, setButtontext] = useState("NIET MEER MIJ KLIKKEN!")



  return (
    <div>



<h1>faaaaaaaaaa</h1>
<p>W christian, W marijn</p>
 

<NavLink to= "docent">docenten</NavLink>
<NavLink to="student">Studenten</NavLink>
<br></br>
<p>{buttontext}</p>




<main>


<buttontextContext.Provider value={buttontext}>

<Outlet/>

  
</buttontextContext.Provider>
</main>
    </div>
  )
}

import { NavLink, Outlet } from "react-router"
import React, { createContext, useContext, useState } from 'react'
import { buttontextContext } from "./TestLayout"


export default function RoutLayout() {

const tekstje = useContext(buttontextContext);

  return (

    <div className="root-layout">

 <header>
<nav>
<h1>{tekstje}</h1>

<NavLink to="/">Homepje </NavLink>

<NavLink to="faa">ABOUT </NavLink>

<NavLink to="fam">test</NavLink>

</nav>
</header> 

<main>

<Outlet/>

</main>

    </div>

)
}

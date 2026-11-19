import React from 'react'
import { NavLink, Outlet } from 'react-router'

export default function TestLayout() {
  return (
    <div>



<h1>faaaaaaaaaa</h1>
<p>W christian, W marijn</p>


<NavLink to= "docent">docenten</NavLink>
<NavLink to="student">Studenten</NavLink>

<Outlet/>
    </div>
  )
}

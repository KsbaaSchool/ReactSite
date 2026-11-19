import { NavLink, Outlet } from "react-router"



export default function RoutLayout() {
  return (

    <div className="root-layout">

 <header>
<nav>
<h1>KLIK hier!</h1>

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

import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar () {

const {pathname} = useLocation();

    return (
        <div className={style.navContainer} >
            {pathname !== "/Home"&&
            <NavLink to="/Home"><button>Home</button></NavLink>}
            {pathname !== "/Productos"&&
            <NavLink to="/Productos"><button>Productos</button></NavLink>}
            {pathname !== "/Nosotros"&&
            <NavLink to="/Nosotros"><button>Nosotros</button></NavLink>}
            {pathname !== "/MiCuenta"&&
            <NavLink to="/MiCuenta"><button>Mi Cuenta</button></NavLink>}
            <NavLink className={style.logButton} to="/"><button >LogIn</button></NavLink>
            <NavLink className={style.logButton} to="/"><button >LogOut</button></NavLink>
        </div>
    )
}
import React from 'react';
import { Link } from "react-router-dom";

function NavBar() {

  const menus = [];

  return (
    <>
     <nav>
        <div className="logo-container">
          <img src="/logo.png" alt="no logo"></img> 
        </div>
        <ul className="nav-items">
            <Link className="nav-item nav-link" to="/">
                Inicio
            </Link>
            <Link className="nav-item nav-link" to="/create">
              Nuevo entrenador
            </Link>
            <Link className="nav-item nav-link" to="/about">
              Acerca de nosotros
            </Link>
        </ul>
     </nav>
    </>
  );
}

export default NavBar;

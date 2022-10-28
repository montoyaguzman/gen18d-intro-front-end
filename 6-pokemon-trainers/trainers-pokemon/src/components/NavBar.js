function NavBar() {
  return (
    <>
    <div className="logo-container">
     <img src="../../public/logo.png" alt="no logo"></img> 
    </div>
     <nav>
        <ul className="nav-items">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Inicio
              </a>  
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
              Nuevo entrenador
              </a>  
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
              Acerca de nosotros
              </a>  
            </li>
        </ul>
     </nav>
    </>
  );
}

export default NavBar;

function NavBar() {

  const menus = [];

  return (
    <>
     <nav>
        <div className="logo-container">
          <img src="/logo.png" alt="no logo"></img> 
        </div>
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

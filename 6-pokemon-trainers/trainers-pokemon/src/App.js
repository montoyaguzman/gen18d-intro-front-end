import React from 'react';
import NavBar from './components/NavBar';
import CreatePage from './pages/CreatePage';
import AboutPage from './pages/AboutPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <React.Fragment>
      <div>
        <span>Componente App!</span>
      </div>
      
      <NavBar></NavBar>
      
      <SearchPage/>
      <CreatePage/>
      <AboutPage/>
      
    </React.Fragment>
  );
}

export default App;

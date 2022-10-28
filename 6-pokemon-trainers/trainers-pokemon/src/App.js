import React from 'react';
import NavBar from './components/NavBar';
import CreatePage from './pages/CreatePage';
import AboutPage from './pages/AboutPage';
import SearchPage from './pages/SearchPage';
import './App.css';


function App() {
  return (
    <React.Fragment>
      
      <NavBar></NavBar>      
      <SearchPage/>
      <CreatePage/>
      <AboutPage/>
      
    </React.Fragment>
  );
}

export default App;

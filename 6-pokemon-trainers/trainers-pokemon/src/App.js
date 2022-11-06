import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <React.Fragment>
      
      <NavBar></NavBar>
      <div className="container">
        <Outlet/>
      </div>
      
    </React.Fragment>
  );
}

export default App;

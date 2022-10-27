import React from 'react';
import NavBar from './components/NavBar';
import SearchFilters from './components/SearchFilters';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <React.Fragment>
      <div>
        <span>Componente App!</span>
      </div>
      <NavBar></NavBar>
      <SearchFilters></SearchFilters>
      <Dashboard></Dashboard>
    </React.Fragment>
  );
}

export default App;

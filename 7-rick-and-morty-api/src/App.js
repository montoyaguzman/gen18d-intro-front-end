import React from 'react';
import {useState} from 'react';
import Form from './components/Form';
import ShowCharacter from './components/character/ShowCharacter';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import RestartAltIcon from '@mui/icons-material/RestartAlt';


function App() {

  const [name, setName] = useState("");

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h2">Rick&Morty API</Typography>
        <Form setName={setName}/>

        <IconButton color="primary" aria-label="Reset" component="label" onClick={()=>setName('')}>
          <RestartAltIcon />
        </IconButton>

        {/* <button onClick={()=>setName('')}>
          Reset
        </button> */}
        <ShowCharacter name={name} margin="normal"/>
      </Container>
    </React.Fragment>
  );
}

export default App;

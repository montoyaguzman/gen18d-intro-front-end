import {useState} from 'react';
import Form from './components/Form';
import ShowCharacter from './components/character/ShowCharacter';
import './App.css';


function App() {

  const [name, setName] = useState("");

  return (
    <div>
      <h1>Rick&Morty API</h1>
      <Form setName={setName}/>
      <button>
        Reset
      </button>
      <ShowCharacter name={name}/>
    </div>
  );
}

export default App;

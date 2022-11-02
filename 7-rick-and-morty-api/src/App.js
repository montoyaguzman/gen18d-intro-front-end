import {useState} from 'react';
import Form from './components/Form';
import './App.css';

function App() {

  const [name, setName] = useState("");

  return (
    <div>
      <h1>Rick&Morty API</h1>
      <Form/>
      <button>
        Reset
      </button>
    {/* <ShowCharacter/> */}
    </div>
  );
}

export default App;

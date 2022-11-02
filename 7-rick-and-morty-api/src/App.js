import {useState} from 'react';
import './App.css';

function App() {

  const [name, setName] = useState("");

  return (
    <div>
      <h1>Rick&Morty API</h1>
      {/* <Form/> */}
      <button>
        Reset
      </button>
    {/* <ShowCharacter/> */}
    </div>
  );
}

export default App;

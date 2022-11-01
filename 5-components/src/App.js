import Description from "./components/Description.js";
import Card from "./components/Card/Card.js";
import Character from "./components/Character/Character.js";
import Circle from "./components/Circle.js";

// import Image from "./components/Image.js";
import React from "react";
import CuadroMadre from "./components/CuadroMadre.js";



function App() {
  return (
    <div>
      {/* <Image/> */}
      <Description daniel='Esta es un ejemplo de props' />
      <CuadroMadre/>

      <Card/>
      <Character/>
      <Circle/>


    </div>
  );
}

export default App;

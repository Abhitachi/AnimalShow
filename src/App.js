import "./styles.css";
import "./App.css";
import AnimalShow from "./AnimalShow";
import { useState } from "react";

function getRandomAnimal() {
  const Animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return Animals[Math.floor(Math.random() * Animals.length)];
}

function App() {
  const [Animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...Animals, getRandomAnimal()]);
  };

  const renderedAnimals = Animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className="App">
      <h3> Welcome To the Animals Show</h3>
      {/* <AnimalShow  /> */}
      <button type="button" onClick={handleClick}>
        Add Animal
      </button>
      {/* <div>{Animals}</div> */}
      <div className="animals-list">{renderedAnimals}</div>
    </div>
  );
}
export default App;

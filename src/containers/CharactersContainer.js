import React, { useState, useEffect } from "react";
import CharactersCards from "../components/CharactersCards";
import "./CardContainers.css";

const CharactersContainer = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    let url = "https://rickandmortyapi.com/api/character";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setCharacters(response.results);
      });
  }, []);

  return (
    <>
      <div className="personajes">
        <h1>Personajes</h1>
        <h4>Algunos Personajes</h4>
      </div>
      {characters ? (
        <div className="personajes-container">
          {characters.map((character, index) => {
            return <CharactersCards key={index} character={character} />;
          })}
        </div>
      ) : (
        <p>Cargando....</p>
      )}
    </>
  );
};
export default CharactersContainer;

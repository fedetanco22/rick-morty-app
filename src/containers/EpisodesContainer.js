import { useState, useEffect } from "react";
import EpisodesCards from "../components/EpisodesCards";
import "./CardContainers.css";

export default function Episodes() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/episode";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setEpisodes(response.results);
      });
  }, []);

  return (
    <>
      <div className="episodios">
        <h1>Episodios</h1>
        <h4>Algunos Espisodios de la Primera Temporada</h4>
      </div>
      {episodes ? (
        <div className="personajes-container">
          {episodes.map((episode, index) => {
            return <EpisodesCards key={index} episodio={episode} />;
          })}
        </div>
      ) : (
        <p>Cargando....</p>
      )}
    </>
  );
}

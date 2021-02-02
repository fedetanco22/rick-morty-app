import { useState, useEffect } from "react";
import Card from "../components/Cards";

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
      {episodes ? (
        <div>
          {episodes.map((episode, index) => {
            return <Card key={index} episode={episode} />;
          })}
        </div>
      ) : (
        <p>Cargando....</p>
      )}
    </>
  );
}

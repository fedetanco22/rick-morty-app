import React, { useState, useEffect } from "react";

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
          {episodes.map((episode, id) => {
            return <p key={id}>{episode.name}</p>;
          })}
        </div>
      ) : (
        <p>Cargando....</p>
      )}
    </>
  );
}

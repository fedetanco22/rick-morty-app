import "./Cards.css";

export default function EpisodesCards({ episodio }) {
  const { name, air_date, episode } = episodio;
  return (
    <>
      <div className="card-character">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Rick_and_Morty_season_1.png/250px-Rick_and_Morty_season_1.png"
          alt="img season 1"></img>
        <div className="card-character-footer">
          <p className="card-texts">Episodio: {episode}</p>
          <p className="card-texts">Nombre del Espisodio: {name}</p>
          <p className="card-texts">Dia de Estreno: {air_date}</p>
        </div>
      </div>
    </>
  );
}

import "./Cards.css";

const CharactersCards = ({ character }) => (
  <div className="card-character">
    <img src={character.image} alt="character"></img>
    <div className="card-character-footer">
      <p className="card-texts">Nombre: {character.name}</p>
      <p className="card-texts">Estatus: {character.status} </p>
      <p className="card-texts">Especie: {character.species}</p>
    </div>
  </div>
);
export default CharactersCards;

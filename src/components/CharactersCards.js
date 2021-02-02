import './cards.css'

const CharactersCards = ({character}) => (
    <div className="card-character">
        <img src={character.image} alt="character"/>
        <div className="card-character-footer">
            <h1>Nombre: {character.name}</h1>
            <h2>Estatus: {character.status} </h2>
            <h3>Especie: {character.species}</h3>
        </div>
    </div>
    )
export default CharactersCards
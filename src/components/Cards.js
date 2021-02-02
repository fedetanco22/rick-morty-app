export default function Cards({ episode }) {
  return (
    <>
      <div>
        <h1>{episode.episode}</h1>
        <h2>{episode.name} </h2>
        <h3>{episode.air_date}</h3>
      </div>
    </>
  );
}

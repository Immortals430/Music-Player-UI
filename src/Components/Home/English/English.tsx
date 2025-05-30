import { englishCollection } from "../../../data/collection_list";

export default function English() {
  return (
    <section>
      <h1>Top Artists</h1>
      <div className="list-container">
        {englishCollection.map((song, i) => (
          <div className="card" key={i}>
            <div className="song">
              <img src={song.image} alt={song.name} />
            </div>
            <p>{song.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

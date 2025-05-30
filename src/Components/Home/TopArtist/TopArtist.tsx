import { topArtist } from "../../../data/collection_list";
import "./topartist.scss";

export default function TopArtist() {
  return (
    <section>
      <h1>Top Artists</h1>
      <div className="list-container">
        {topArtist.map((artist, i) => (
          <div className="card" key={i}>
            <div className="artist">
              <img src={artist.image} alt={artist.name} />
            </div>
            <p>{artist.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

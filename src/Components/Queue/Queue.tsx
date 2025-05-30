import { queue } from "../../data/collection_list";
import { FaHeart } from "react-icons/fa";
import "./queue.scss";

export default function Queue() {
  return (
    <aside className="queue-sec">
      <h2>Queue</h2>
      <div className="queue-list">
        {queue.map((song, i) => (
          <div key={i} className="song">
            <div className="s-no">{song.sno}</div>
            <img src={song.image} alt={song.name} />
            <div className="track">
              <div>{song.name}</div>
              <small>{song.artist}</small>
            </div>
            <FaHeart color="#f20301" className="like" />
            <div>3:12</div>
          </div>
        ))}
      </div>
    </aside>
  );
}

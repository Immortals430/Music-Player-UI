import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa6";
import { LuHistory } from "react-icons/lu";
import { FaDownload } from "react-icons/fa6";
import { FaRadio } from "react-icons/fa6";
import { LuPodcast } from "react-icons/lu";
import "./aside.scss";

export default function Aside() {
  return (
    <aside className="aside-sec">
      <div className="aside-sec1">
        <div>
          <span><AiFillHome /></span>
          <span>Home</span>
        </div>

        <div>
          <span><FaUser /></span>
          <span>My Music</span>
        </div>

        <div>
          <span><LuHistory /></span>
          <span>History</span>
        </div>

        <div>
          <span><FaDownload /></span>
          <span>Download</span>
        </div>

        <div>
          <span><FaRadio /></span>
          <span>Radio</span>
        </div>

        <div>
          <span><LuPodcast /></span>
          <span>Podcasts</span>
        </div>
      </div>

      <div className="aside-sec2">
        <div>Artist</div>
        <div>Album</div>
        <div>Genre</div>
        <div>Language</div>
        <div>Settings</div>
      </div>
    </aside>
  );
}

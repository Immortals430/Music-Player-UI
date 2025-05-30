import { SiGocd } from "react-icons/si";
import { IoSearch } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import avatar from "../../assets/img/avatar.webp"
import "./navbar.scss";

export default function Navbar() {
  return (
    <nav className="nav-sec">
      <div className="nav-left">
        <SiGocd size={50} />
        <div>
          <span>Music</span>
          <span>Player</span>
        </div>
      </div>

      <div className="nav-middle">
        <input type="text" placeholder="Search Artists, Songs, Albums" />
        <IoSearch className="search-icon" />
      </div>
      <div className="nav-right">
        <IoSettingsSharp />
        <IoNotifications />
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </nav>
  );
}

import coverPhoto from "../../assets/img/english/7.webp";
import { FaHeart } from "react-icons/fa";
import { FaSliders } from "react-icons/fa6";
import { FaVolumeDown } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { FaBackward } from "react-icons/fa";
import { FaForward } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { FaRepeat } from "react-icons/fa6";
import "./player.scss";

export default function Player() {
  return (
    <section className="player-sec">
      <div className="player-left-sec">
        <img src={coverPhoto} alt="Criminal by Britney Spear" />
        <div>
          <div>Criminal</div>
          <small>Britney Spear</small>
        </div>
      </div>
      <div className="player-middle-sec">
        <div className="player-btns">
          <FaShuffle />
          <FaBackward />
          <FaCirclePlay />
          <FaForward />
          <FaRepeat />
        </div>
        <div>
          <div className="player-slider">
            <div></div>
          </div>
        </div>
      </div>
      <div className="player-right-sec">
        <FaHeart />
        <FaSliders />
        <FaVolumeDown />
      </div>
    </section>
  );
}

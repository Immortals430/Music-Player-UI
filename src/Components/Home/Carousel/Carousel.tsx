import slide1 from "../../../assets/img/carousel/img1.webp";
import slide2 from "../../../assets/img/carousel/img2.webp";
import slide3 from "../../../assets/img/carousel/img3.webp";
import slide4 from "../../../assets/img/carousel/img4.webp";
import slide5 from "../../../assets/img/carousel/img5.webp";
import "./carousel.scss";

export default function Carousel() {
  return (
    <section className="carousel-sec">
      <div id="slider">
        <input type="radio" name="slider" id="s1" defaultChecked />
        <input type="radio" name="slider" id="s2" />
        <input type="radio" name="slider" id="s3" />
        <input type="radio" name="slider" id="s4" />
        <input type="radio" name="slider" id="s5" />

        <label htmlFor="s1" id="slide1">
          <img src={slide1} alt="slide1" fetchPriority="high" />
        </label>
        <label htmlFor="s2" id="slide2">
          <img src={slide2} alt="slide2" fetchPriority="high" />
        </label>
        <label htmlFor="s3" id="slide3">
          <img src={slide3} alt="slide3" fetchPriority="high" />
        </label>
        <label htmlFor="s4" id="slide4">
          <img src={slide4} alt="slide4" fetchPriority="high"/>
        </label>
        <label htmlFor="s5" id="slide5">
          <img src={slide5} alt="slide5" fetchPriority="high"/>
        </label>
      </div>
    </section>
  );
}

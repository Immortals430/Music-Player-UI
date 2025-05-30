import category1 from "../../../assets/img/category/1.webp";
import category2 from "../../../assets/img/category/2.webp";
import category3 from "../../../assets/img/category/3.webp";
import "./category.scss";

export default function Category() {
  return (
    <section>
      <h1>Top Artists</h1>
      <div className="category-container">
        <div className="card">
          <div style={{ backgroundImage: `url(${category1})` }} className="image"></div>
          <div></div>
          <p>Trending Today</p>
        </div>
        <div className="card">
          <div style={{ backgroundImage: `url(${category2})` }} className="image"></div>
          <p>Billboard Top 100</p>
        </div>
        <div className="card">
          <div style={{ backgroundImage: `url(${category3})` }} className="image"></div>
          <p>Best of EDM</p>
        </div>
      </div>
    </section>
  );
}

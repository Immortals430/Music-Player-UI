import TopChart from "./TopChat/TopChart";
import TopArtist from "./TopArtist/TopArtist";
import Category from "./Category/Category";
import Hindi from "./Hindi/Hindi"
import English from "./English/English"
import "./main.scss";
import Carousel from "./Carousel/Carousel";

export default function Main() {
  return (
    <main className="main-sec">
      <Carousel />
      <TopChart />  
      <TopArtist />
      <Category />
      <Hindi />
      <English />
    </main>
  );
}

import NavBar from "../components/Header/NavBar";
import Announcement from "../components/Header/Announcement";
import Slider from "../components/Slider/Slider";
import CategoryGrid from "../components/Category/CategoryGrid";
import NewsLetter from "../components/NewsLetter/NewsLetter";

function HomePage() {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
      <CategoryGrid />
      <NewsLetter />
    </div>
  );
}

export default HomePage;

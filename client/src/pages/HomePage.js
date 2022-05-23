//Libraries
import { Fragment, useEffect } from "react";
//Imports
import Slider from "../components/Slider/Slider";
import CategoryGrid from "../components/Category/CategoryGrid";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import { useLocation } from "react-router-dom";
//---------------------------------------------------------------

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const element = document.getElementById(location.hash.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return (
    <Fragment>
      <Slider />
      <CategoryGrid />
      <NewsLetter />
    </Fragment>
  );
}

export default HomePage;

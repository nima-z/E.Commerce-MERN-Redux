import { Fragment, useEffect } from "react";

import Slider from "../components/Slider/Slider";
import CategoryGrid from "../components/Category/CategoryGrid";
import NewsLetter from "../components/NewsLetter/NewsLetter";

function HomePage() {
  return (
    <Fragment>
      <Slider />
      <CategoryGrid />
      <NewsLetter />
    </Fragment>
  );
}

export default HomePage;

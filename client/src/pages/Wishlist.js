import Wishlist from "../components/Wishlist/Wishlist";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function WishListPage() {
  const location = useLocation();

  useEffect(() => {
    const element = document.getElementById(location.hash.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return <Wishlist />;
}

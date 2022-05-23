import Cart from "../components/Cart/Cart";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function CartPage() {
  const location = useLocation();

  useEffect(() => {
    const element = document.getElementById(location.hash.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  return <Cart />;
}

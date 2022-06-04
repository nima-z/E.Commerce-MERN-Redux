// Libraries
import { useParams, useLocation } from "react-router-dom";
import { useQueryClient } from "react-query";
//Imports
import SingleProduct from "../components/Products/SingleProduct";
import useProduct from "../hooks/useProduct";
import { useEffect, useState } from "react";
import { requestWithSignal } from "../helpers/requestMethods";
import { useSelector } from "react-redux";
//------------------------------------------------

export default function ProductDetail() {
  const location = useLocation();
  const { id } = useParams();

  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user.currentUser);
  const [newCart, setNewCart] = useState(cart);

  let controller = new AbortController();

  useEffect(() => {
    if (cart.total !== newCart.total) {
      setNewCart(cart);

      async function syncCart() {
        try {
          await requestWithSignal(controller, cart, user.user._id);
        } catch (err) {
          console.log(err);
        }
      }
      syncCart();

      return () => {
        controller.abort();
      };
    }
  }, [cart]);

  useEffect(() => {
    const element = document.getElementById(location.hash.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const queryClient = useQueryClient();
  const staledData = queryClient.getQueriesData("products");

  let oldItem;
  if (staledData.length !== 0 && staledData[0][1]) {
    oldItem = staledData[0][1].products.find((p) => p._id === id);
  }

  const { data, isLoading } = useProduct(id);

  if (isLoading && !oldItem) {
    return <p>Loading...</p>;
  }

  return <SingleProduct item={oldItem ? oldItem : data.product} />;
}

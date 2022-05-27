// Libraries
import { useParams, useLocation } from "react-router-dom";
import { useQueryClient } from "react-query";
//Imports
import SingleProduct from "../components/Products/SingleProduct";
import useProduct from "../hooks/useProduct";
import { useEffect } from "react";
//------------------------------------------------

export default function ProductDetail() {
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    const element = document.getElementById(location.hash.slice(1));
    element.scrollIntoView({ behavior: "smooth" });
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

// Libraries
import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
//Imports
import SingleProduct from "../components/Products/SingleProduct";
import useProduct from "../hooks/useProduct";
//------------------------------------------------

export default function ProductDetail() {
  const { id } = useParams();

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

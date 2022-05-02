import SingleProduct from "../components/Products/SingleProduct";
import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";
import useProduct from "../hooks/useProduct";

export default function ProductDetail() {
  const { id } = useParams();

  const queryClient = useQueryClient();
  const staledData = queryClient.getQueriesData("products");

  let oldItem;
  if (staledData.length !== 0) {
    oldItem = staledData[0][1].products.find((p) => p._id === id);
  }

  const { data, isLoading } = useProduct(id);

  if (staledData.length === 0 && isLoading) {
    return <p>Loading...</p>;
  } else {
    return <SingleProduct item={data ? data.product : oldItem} />;
  }
}

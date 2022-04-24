import SingleProduct from "../components/Products/SingleProduct";
import { products } from "../dataForDb";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const foundItem = products.find((item) => item.id === +id);
  return <SingleProduct item={foundItem} />;
}

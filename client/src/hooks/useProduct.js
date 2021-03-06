import axios from "axios";
import { useQuery } from "react-query";

export default function useProduct(pId) {
  return useQuery(["product", { id: pId }], () =>
    axios.get(`/api/products/${pId}`).then((res) => res.data)
  );
}

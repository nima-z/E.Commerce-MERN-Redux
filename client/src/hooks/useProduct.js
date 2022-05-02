import axios from "axios";
import { useQuery } from "react-query";

export default function useProduct(pId) {
  return useQuery(["product", { id: pId }], () =>
    axios
      .get(`http://localhost:5000/api/products/${pId}`)
      .then((res) => res.data)
  );
}

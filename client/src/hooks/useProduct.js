import axios from "axios";
import { useQuery } from "react-query";

export default function useProduct(pId) {
  return useQuery(["product", { id: pId }], () =>
    axios.get(`${process.env.PORT}/products/${pId}`).then((res) => res.data)
  );
}

import axios from "axios";
import { useQueryClient, useQuery } from "react-query";

export default function useInitial() {
  const queryClient = useQueryClient();

  return useQuery(
    ["products", "all"],
    () => axios.get(`${process.env.PORT}/api/products`).then((res) => res.data),
    {
      onSuccess: (data) => {
        data.products.forEach((product) => {
          queryClient.setQueryData(["products", product.tag[0]], {
            products: data.products.filter((p) => p.tag[0] === product.tag[0]),
          });
        });
      },
    }
  );
}

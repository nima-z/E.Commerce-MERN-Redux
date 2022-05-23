import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { publicRequest } from "../../helpers/requestMethods";
import { useNavigate } from "react-router-dom";

export default function SearchBox() {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");
  const [page, setPage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (products.length === 0) {
      (async () => {
        const res = await publicRequest.get("/search/");
        setProducts(res.data.products);
      })();
    }
  }, [products]);

  useEffect(() => {
    if (page) {
      navigate(`product/${page}`);
    }
  }, [page]);

  function enterHandler(e) {
    if (e.key === "Enter") {
      const matchProduct = products.find((item) =>
        item.title.toLowerCase().includes(input.toLowerCase())
      );
      if (matchProduct) {
        setInput(matchProduct.title);
        setPage(matchProduct._id);
      } else {
        //set error for showing not found page
        console.log("not found");
      }
    }
  }

  function onSelect(e) {
    const word = e.target.value;
    const matchProduct = products.find(
      (item) => item.title.toLowerCase() === word.toLowerCase()
    );
    if (matchProduct) {
      // setInput(matchProduct.title);
      setPage(matchProduct._id);
    } else {
      setInput(word);
    }
  }

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={products.map((product) => product.title)}
        renderInput={(params) => (
          <TextField {...params} label="Search Product" />
        )}
        onSelect={onSelect}
        onKeyDown={enterHandler}
      />
    </Stack>
  );
}

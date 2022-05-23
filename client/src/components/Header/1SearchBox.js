// import { useEffect, useState, Fragment } from "react";
// import TextField from "@mui/material/TextField";
// import CircularProgress from "@mui/material/CircularProgress";
// import Autocomplete from "@mui/material/Autocomplete";
// import { publicRequest } from "../../helpers/requestMethods";
// import { useNavigate } from "react-router-dom";

// export default function SearchBox() {
//   const [open, setOpen] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [input, setInput] = useState("");
//   const [input2, setInput2] = useState("");
//   const navigate = useNavigate();

//   const loading = open && products.length === 0;

//   useEffect(() => {
//     let active = true;

//     if (!loading) {
//       return undefined;
//     }

//     if (products.length === 0) {
//       (async () => {
//         const res = await publicRequest.get("/search/");
//         if (active) {
//           setProducts(res.data.products);
//         }
//       })();
//     }

//     return () => {
//       active = false;
//     };
//   }, [loading, products]);

//   function inputHandler(e) {
//     if (e.target.textContent) {
//       console.log(e.target.textContent);
//       // const product = products.find(
//       //   (item) => item.title === e.target.textContent
//       // );
//       // const pId = product._id;
//       // navigate(`/product/${pId}`);
//     }
//   }
//   // console.log(input);

//   function onEnter(e) {
//     if (e.key === "Enter") {
//       setInput2(e.target.defaultValue);
//     }
//   }
//   console.log(input2);

//   // function inputChange(e) {
//   //   console.log(e);
//   // }

//   return (
//     <Autocomplete
//       id="search-box-auto-complete"
//       sx={{ width: 250 }}
//       size="small"
//       open={open}
//       onOpen={() => {
//         setOpen(true);
//       }}
//       onClose={() => {
//         setOpen(false);
//       }}
//       // onKeyDown={onEnter}
//       onChange={inputHandler}
//       //   isOptionEqualToValue={(product) => product._id}
//       getOptionLabel={(product) => product.title}
//       options={products}
//       loading={loading}
//       renderInput={(params) => (
//         <TextField
//           {...params}
//           label="Search Product"
//           value={input2}
//           onKeyDown={onEnter}
//           // onChange={inputChange}
//           InputProps={{
//             ...params.InputProps,
//             endAdornment: (
//               <Fragment>
//                 {loading ? (
//                   <CircularProgress color="inherit" size={20} />
//                 ) : null}
//                 {params.InputProps.endAdornment}
//               </Fragment>
//             ),
//           }}
//         />
//       )}
//     />
//   );
// }

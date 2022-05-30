import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../helpers/productMethod";
// import useProducts from "../../hooks/useProducts";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(dispatch, id);
  };

  // const products = useProducts();

  const columns = [
    {
      field: "product",
      headerName: "Product",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img
              className="productListImg"
              src={params.row.image}
              alt={params.row.title}
            />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "_id", headerName: "ID", width: 300 },
    { field: "inStock", headerName: "Stock", width: 120 },

    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    products && (
      <div className="productList">
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
        <DataGrid
          rows={products}
          getRowId={(row) => row._id}
          disableSelectionOnClick
          columns={columns}
          pageSize={12}
          checkboxSelection
        />
      </div>
    )
  );
}

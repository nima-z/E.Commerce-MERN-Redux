import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteClients, getClients } from "../../helpers/clientsMethod";
export default function UserList() {
  const dispatch = useDispatch();
  const clients = useSelector((state) => state.client.clients);

  useEffect(() => {
    getClients(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteClients(dispatch, id);
  };

  const columns = [
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {/* <img className="userListImg" src={params.row.image} alt="" /> */}
            {params.row.name} {params.row.lastname}
          </div>
        );
      },
    },
    { field: "_id", headerName: "ID", width: 200 },
    { field: "email", headerName: "Email", width: 200 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <Link to="/newUser">
        <button className="userAddButton">Create</button>
      </Link>
      <DataGrid
        rows={clients}
        getRowId={(row) => row._id}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}

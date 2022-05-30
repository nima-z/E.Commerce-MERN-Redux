import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PhoneAndroid,
} from "@material-ui/icons";
//==============================================
import { updateClients } from "../../helpers/clientsMethod";
import "./user.css";
//==============================================

export default function User() {
  const [input, setInput] = useState({});
  //---
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  const { userId } = params;
  const client = useSelector((state) =>
    state.client.clients.find((item) => item._id === userId)
  );

  //function handlers
  function changeHandler(e) {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function updateHandler(e) {
    e.preventDefault();
    updateClients(dispatch, userId, input);
    history.push("/users");
  }

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <div className="userShowTopTitle">
              <span className="userShowUsername">
                {client.name} {client.lastname}
              </span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>

            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{client.createdAt}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{client.phone}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{client.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm" onSubmit={updateHandler}>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Name</label>
                <input
                  type="text"
                  placeholder={client.name}
                  className="userUpdateInput"
                  onChange={changeHandler}
                  name="name"
                />
              </div>
              <div className="userUpdateItem">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder={client.lastname}
                  className="userUpdateInput"
                  onChange={changeHandler}
                  name="lastname"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={client.email}
                  className="userUpdateInput"
                  onChange={changeHandler}
                  name="email"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder={client.phone}
                  className="userUpdateInput"
                  onChange={changeHandler}
                  name="phone"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                  onChange={changeHandler}
                  name="address"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

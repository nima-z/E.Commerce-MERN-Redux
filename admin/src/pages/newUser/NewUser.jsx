import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
//==============================================
import { createClients } from "../../helpers/clientsMethod";
import "./newUser.css";
//==============================================

export default function NewUser({ token }) {
  const [input, setInput] = useState({});
  //---
  const history = useHistory();
  const dispatch = useDispatch();

  //function handlers
  function changeHandler(e) {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function submitHandler(e) {
    e.preventDefault();
    createClients(dispatch, token, input);
    history.push("/users");
  }
  //---------

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm" onSubmit={submitHandler}>
        <div className="newUserItem">
          <label>Name</label>
          <input
            type="text"
            placeholder="john"
            onChange={changeHandler}
            name="name"
          />
        </div>
        <div className="newUserItem">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="John Smith"
            onChange={changeHandler}
            name="lastname"
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            placeholder="john@gmail.com"
            onChange={changeHandler}
            name="email"
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            onChange={changeHandler}
            name="password"
          />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input
            type="text"
            placeholder="+1 123 456 78"
            onChange={changeHandler}
            name="phone"
          />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={changeHandler}
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={changeHandler}
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="gender"
              id="other"
              value="other"
              onChange={changeHandler}
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>

        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//==============================================
import { LoggingIn } from "../../helpers/authMethod";
import styles from "./auth.module.css";
//==============================================

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.admin.isFetching);
  const admin = useSelector((state) => state.admin.currentUser);
  const history = useHistory();

  // useEffect(() => {
  //   if (admin && !isFetching) {
  //     history.replace("/");
  //     console.log("here");
  //   }
  // }, [isFetching, history, admin]);

  // function handlers
  function emailHandler(e) {
    setEmail(e.target.value);
  }
  function passwordHandler(e) {
    setPassword(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    LoggingIn(dispatch, { email, password });
    !isFetching && history.push("/");
  }
  //---------------

  return (
    <div className={styles.container}>
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={submitHandler} className={styles.form}>
          <input type="text" placeholder="email" onChange={emailHandler} />
          <input
            type="password"
            placeholder="password"
            onChange={passwordHandler}
          />
          <button>sign in</button>
        </form>
      )}
    </div>
  );
}

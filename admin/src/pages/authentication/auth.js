import React, { useState } from "react";
import styles from "./auth.module.css";
import { useDispatch } from "react-redux";
import { LoggingIn } from "../../helpers/authMethod";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function emailHandler(e) {
    setEmail(e.target.value);
  }
  function passwordHandler(e) {
    setPassword(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    LoggingIn(dispatch, { email, password });
  }

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.form}>
        <input type="text" placeholder="email" onChange={emailHandler} />
        <input
          type="password"
          placeholder="password"
          onChange={passwordHandler}
        />
        <button>sign in</button>
      </form>
    </div>
  );
}

import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { useDispatch } from "react-redux";
import { loggingIn } from "../../helpers/authMethods";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url("https://imageio.forbes.com/blogs-images/forbesleadershipcollective/files/2018/11/blur-blurred-background-boutique-1036856.jpg?format=jpg&width=1200");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ height: "90vh" })}
`;

const Wrapper = styled.div`
  width: 30%;
  background-color: white;
  padding: 2rem;
  ${mobile({ width: "70%" })}
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  min-width: 100px;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: gray;
`;
const Agreement = styled.span`
  margin: 0.5rem 0;
  font-size: 0.8rem;
`;

const Button = styled.button`
  max-width: 100px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;

const ChangeDiv = styled.div`
  display: flex;
  align-items: baseline;
`;

const ChangeButton = styled.button`
  background-color: transparent;
  border: none;
  color: darkblue;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
`;

const Error = styled.span`
  color: red;
  margin-top: 0.8rem;
`;

export default function Auth() {
  const [login, setLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  function usernameHandler(e) {
    setUsername(e.target.value);
  }
  function passwordHandler(e) {
    setPassword(e.target.value);
  }
  function confirmPasswordHandler(e) {
    setConfirmPassword(e.target.value);
  }
  function emailHandler(e) {
    setEmail(e.target.value);
  }

  function submitForm(event) {
    event.preventDefault();
    if (login) {
      loggingIn(dispatch, { email, password });
    } else {
      console.log("sign up");
    }
  }

  function ChangeForm() {
    setLogin(!login);
  }

  return (
    <Container>
      <Wrapper>
        <Title>{login ? "Login" : "Create Account"}</Title>
        <Form onSubmit={submitForm}>
          <Input placeholder="email" onChange={emailHandler} />
          {!login && (
            <Input placeholder="username" onChange={usernameHandler} />
          )}
          <Input
            placeholder="password"
            onChange={passwordHandler}
            type="password"
          />
          {!login && (
            <Input
              placeholder="confirm password"
              onChange={confirmPasswordHandler}
              type="password"
            />
          )}
          {!login && (
            <Agreement>
              By signing up, you agree to the Terms of Service and Privacy
              Policy, including Cookie Use.
            </Agreement>
          )}
          <ChangeDiv>
            {login ? (
              <p>Do not have an account?</p>
            ) : (
              <p>Already have an account?</p>
            )}
            {login ? (
              <ChangeButton type="button" onClick={ChangeForm}>
                Sign Up
              </ChangeButton>
            ) : (
              <ChangeButton type="button" onClick={ChangeForm}>
                Login
              </ChangeButton>
            )}
          </ChangeDiv>
          {login ? (
            <Button disabled={isFetching}>Login</Button>
          ) : (
            <Button>Create</Button>
          )}
          {error && <Error>Email or Password is not correct!</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
}

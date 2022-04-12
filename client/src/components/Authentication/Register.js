import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url("https://imageio.forbes.com/blogs-images/forbesleadershipcollective/files/2018/11/blur-blurred-background-boutique-1036856.jpg?format=jpg&width=1200");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  background-color: white;
  padding: 2rem;
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
`;

const ChangeButton = styled.button`
  background-color: transparent;
  border: none;
  color: darkblue;
  cursor: pointer;
  font-weight: 600;
`;

export default function Register() {
  const [login, setLogin] = useState(false);

  function ChangeForm(e) {
    setLogin(!login);
  }

  console.log(login);

  return (
    <Container>
      <Wrapper>
        <Title>{login ? "Login" : "Create Account"}</Title>
        {login && (
          <Form>
            <Input placeholder="username" />
            <Input placeholder="password" />

            <p>
              Do not have an account?
              <ChangeButton type="button" onClick={ChangeForm}>
                Sign up
              </ChangeButton>
            </p>
            <Button>Login</Button>
          </Form>
        )}
        {!login && (
          <Form>
            <Input placeholder="name" />
            <Input placeholder="lastname" />
            <Input placeholder="username" />
            <Input placeholder="password" />
            <Input placeholder="confirm password" />
            <Agreement>
              By signing up, you agree to the Terms of Service and Privacy
              Policy, including Cookie Use.
            </Agreement>
            <p>
              Already have an account?
              <ChangeButton type="button" onClick={ChangeForm}>
                Sign in
              </ChangeButton>
            </p>
            <Button>Create</Button>
          </Form>
        )}
      </Wrapper>
    </Container>
  );
}

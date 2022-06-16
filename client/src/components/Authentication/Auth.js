import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { useDispatch } from "react-redux";
import { loggingIn, signingUp } from "../../helpers/authMethods";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { LoadingButton } from "@mui/lab";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LoginIcon from "@mui/icons-material/Login";

import { useForm } from "react-hook-form";
//===================================================

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
  min-width: 10%;
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
  width: 20rem;
  gap: 0.5rem;
`;

const Agreement = styled.span`
  margin: 0.5rem 0;
  font-size: 0.8rem;
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

const ActionDiv = styled.div`
  width: 50%;
`;
const Error = styled.span`
  color: red;
  margin-top: 0.8rem;
`;
//=======================================

export default function Auth() {
  const [login, setLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  function submitForm(e) {
    if (login) {
      loggingIn(dispatch, e);
    } else {
      signingUp(dispatch, e);
    }
  }

  function ChangeForm() {
    setLogin(!login);
  }

  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }

  function handleMouseDownPassword(event) {
    event.preventDefault();
  }

  return (
    <Container>
      <Wrapper>
        <Title>{login ? "Login" : "Create Account"}</Title>
        <Form onSubmit={handleSubmit(submitForm)}>
          {!login && (
            <TextField
              label={errors.firstname ? errors.firstname.message : "First Name"}
              {...register("firstname", {
                required: { value: true, message: "* Required" },
                maxLength: {
                  value: 10,
                  message: "It must be less than 10 letters",
                },
                minLength: {
                  value: 2,
                  message: "It must be at least 2 letters",
                },
              })}
              error={errors.firstname && true}
            />
          )}

          {!login && (
            <TextField
              label={errors.lastname ? errors.lastname.message : "Last Name"}
              {...register("lastname", {
                required: { value: true, message: "* Required" },
                maxLength: {
                  value: 10,
                  message: "It must be less than 10 letters",
                },
                minLength: {
                  value: 2,
                  message: "It must be at least 2 letters",
                },
              })}
              error={errors.lastname && true}
            />
          )}

          <TextField
            label={errors.email ? errors.email.message : "Email"}
            {...register("email", {
              required: { value: true, message: "* Required" },
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
                message: "Please enter a valid email",
              },
            })}
            error={errors.email && true}
          />
          <TextField
            label={errors.password ? errors.password.message : "Password"}
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: { value: true, message: "* Required" },
              pattern: {
                value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,20}$/,
                message:
                  "7 to 20 characters which contain at least one numeric digit and a special character",
              },
            })}
            error={errors.password && true}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {!login && (
            <TextField
              label={
                errors.confirmPassword
                  ? errors.confirmPassword.message
                  : "ConfirmPassword"
              }
              type={showPassword ? "text" : "password"}
              {...register("confirmPassword", {
                required: { value: true, message: "* Required" },
                validate: (val) => {
                  if (watch("password") !== val) {
                    return "Your passwords do no match";
                  }
                },
              })}
              error={errors.confirmPassword && true}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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
                Sign In
              </ChangeButton>
            )}
          </ChangeDiv>
          <ActionDiv>
            {login ? (
              <LoadingButton
                loading={isFetching}
                loadingPosition="end"
                endIcon={<LoginIcon />}
                disabled={
                  isFetching ||
                  watch("email") === "" ||
                  watch("password") === ""
                }
                variant="contained"
                type="submit"
              >
                {isFetching ? "Signing In" : "Sign In"}
              </LoadingButton>
            ) : (
              <LoadingButton
                loading={isFetching}
                loadingPosition="end"
                endIcon={<AssignmentIcon />}
                disabled={
                  isFetching ||
                  watch("email") === "" ||
                  watch("password") === ""
                }
                variant="outlined"
                type="submit"
              >
                {isFetching ? "Signing Up" : "Sign Up"}
              </LoadingButton>
            )}
          </ActionDiv>
          {error && <Error>Email or Password is not correct!</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
}

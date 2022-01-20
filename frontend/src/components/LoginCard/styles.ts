import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  padding: 1.5rem 2rem;
  margin: 0 1rem;
  width: fit-content;
  min-width: 300px;
  -webkit-border-top-left-radius: 81px;
  -webkit-border-bottom-right-radius: 80px;
  -moz-border-radius-topleft: 81px;
  -moz-border-radius-bottomright: 80px;
  border-top-left-radius: 81px;
  border-bottom-right-radius: 80px;
  -webkit-box-shadow: 0px 0px 13px 1px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 13px 1px rgba(0, 0, 0, 0.25);

  label {
    color: gray;
    font-size: 0.475rem;
    font-weight: 500;
    padding-left: 0.1rem;
  }
`;

export const Welcome = styled.h3`
  width: 100%;
  text-align: start;
  margin: 0.5rem 0 0 0;
  font-weight: 600;
  font-size: 1.15rem;
  color: #008dd6;
`;

export const FormContainer = styled.form`
  margin-top: 1rem;
`;

export const Input = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 0.5rem;
  padding: 0.1rem;
  height: 32px;

  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #c6c6c6;
    outline: none;
    padding-left: 0.15rem;
    transition: all ease 0.2s;

    &:focus {
      border-bottom: 1px solid #008dd6;
    }
  }
`;

export const IsAdmin = styled.div`
  display: flex;
  align-items: center;

  label {
    padding-left: 0.1rem;
    font-size: 0.475rem;
  }
`;

export const RememberMe = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Signup = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  padding: 0.1rem;
  color: gray;
  justify-content: center;

  span {
    font-size: 0.5rem;
    padding-right: 0.15rem;
  }

  button {
    border: none;
    outline: none;
    background: none;
    font-size: 0.5rem;
    font-weight: 500;

    color: #555;
    transition: all ease 0.15s;

    &:hover {
      color: #008dd6;
    }
  }
`;

export const OptionButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: center;

  button {
    padding: 0.475rem 0;
    width: 75%;
    border: none;
    outline: none;
    border-radius: 32px;
    background-color: #0093e9;
    color: #fff;
    border-radius: 1rem;

    background-image: linear-gradient(
      75deg,
      #00528c,
      #008dd6,
      #008dd6,
      #00528c
    );
    background-size: 200%;
    background-position: left;
    font-weight: 500;

    transition: 300ms background-position ease-in-out;
    letter-spacing: 0.05em;

    &:hover {
      background-position: right;
    }
  }
`;

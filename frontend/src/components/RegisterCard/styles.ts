import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  padding: 1.5rem 2rem;
  margin: 0 1rem;
  width: fit-content;
  min-width: 300px;
  border-radius: 80px 20px 80px 20px;
  -webkit-box-shadow: 0px 0px 13px 1px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 13px 1px rgba(0, 0, 0, 0.25);
`;

export const Text = styled.h3`
  width: 100%;
  text-align: start;
  margin: 0.5rem 0 0 0;
  font-weight: 600;
  font-size: 1.15rem;
  color: #008dd6;
  margin-top: 0;
`;

export const Form = styled.div`
  width: 100%;

  display: grid;
  margin-top: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 24px;

  div {
    display: flex;

    input {
      border: none;
      border-bottom: 1px solid #c6c6c6;
      outline: none;
      padding: 0.1rem 0.2rem;
      transition: all ease 0.2s;

      &:focus {
        border-bottom: 1px solid #008dd6;
      }
    }
  }

  .address {
    grid-column-start: 1;
    grid-column-end: 3;

    input {
      width: 100%;
    }
  }

  .button {
    grid-row-start: 4;
    grid-column-start: 1;
    grid-column-end: 3;
    display: flex;
    justify-content: center;

    button {
      width: 50%;
      padding: 12px;
      border: none;
      outline: none;
      color: #fff;
      border-radius: 16px;
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
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);

    .name,
    .phone,
    .email,
    .password,
    .address {
      width: 100%;
      display: flex;

      input {
        width: 100%;
      }
    }

    .name {
      grid-row-start: 1;
    }

    .phone {
      grid-row-start: 2;
    }

    .email {
      grid-row-start: 3;
    }

    .password {
      grid-row-start: 4;
    }

    .address {
      grid-row-start: 5;
      width: 95%;
    }

    .button {
      grid-row-start: 6;

      button {
        width: 100%;
      }
    }
  }
`;

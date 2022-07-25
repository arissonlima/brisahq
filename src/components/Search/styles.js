import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  input {
    width: 200px;
    height: 40px;
    outline: none;
    padding: 5px;
    font-size: 14px;
    border: 1px solid var(--secondary);
    color: var(--secondary);
  }

  button {
    width: 50px;
    height: 40px;
    padding: 5px;
    font-size: 14px;
    background: var(--secondary);
    color: var(--white);
    border: none;
  }
`;

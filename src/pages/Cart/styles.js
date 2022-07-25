import styled from "styled-components";

export const Container = styled.main`
  padding-top: 20px;
  max-width: 1024px;
  margin: 0 auto;
  padding-bottom: 20px;

  display: flex;
  justify-content: center;

  gap: 10px;

  h2 {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 600;
    color: var(--secondary);
  }

  h3 {
    font-size: 16px;
    color: var(--primary);
  }

  span {
    font-size: 15px;
    color: var(--secondary);
    font-weight: 300;
    margin-bottom: 10px;
  }

  input {
    width: auto;
    max-width: 600px;
    height: 40px;
    outline: none;
    padding-left: 10px;
    color: var(--secondary);
    border: 1px solid var(--secondary);
  }

  input::placeholder {
    color: var(--secondary);
  }

  button {
    width: auto;
    max-width: 600px;
    height: 40px;
    padding: 10px;
    background: var(--primary);
    color: var(--white);
    cursor: pointer;
    border: none;
    font-weight: bold;
  }
`;

export const Content = styled.div`
  form {
    margin-top: 20px;
    display: flex;
    width: 600px;
    height: auto;
    display: flex;
    gap: 10px;
    flex-direction: column;
  }
`;

export const MapContent = styled.div`
  .leaflet-container {
    width: 600px;
    height: 450px;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  height: auto;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  img {
    width: 382px;
    height: 566px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 24px;
    color: var(--secondary);
    font-weight: 700;
  }

  h3 {
    font-size: 16px;
    color: var(--secondary);
    margin-top: 20px;
    font-weight: 600;
  }

  span {
    font-size: 15px;
    color: var(--secondary);
    margin-top: 10px;
    font-weight: 100;
  }

  span.description {
    width: 20ch;
    height: 30ch;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .buttons {
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
  }

  .buy {
    background: green;
    border: none;
    color: white;
    padding: 10px;
    font-weight: bold;
    cursor: pointer;
  }

  .close {
    background: red;
    border: none;
    color: white;
    padding: 10px;
    cursor: pointer;
  }

  button {
    width: 100px;
    margin-top: 20px;
  }
`;

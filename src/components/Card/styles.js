import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: auto;
  /* border: 1px solid var(--secondary); */

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  cursor: pointer;

  img {
    width: 250px;
    height: 300px;
  }

  h2 {
    font-size: 18px;
    text-align: center;
    color: var(--secondary);

    max-width: 18ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

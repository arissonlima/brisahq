import styled from "styled-components";

export const Header = styled.div`
  max-width: 1024px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 20px;
    color: var(--secondary);
  }
`;

export const Content = styled.div`
  max-width: 1024px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background: var(--secondary);
  }

  :root{
    --primary: #F16E28;
    --secondary: #253D93;
    --white: #fff;
    --primary-light: rgba(241, 110, 40, 0.5);
    --secondary-light: rgba(37, 61, 147, 0.9);
  }

  body{
    font-family: 'Merriweather Sans', sans-serif;
  }

  .modal-overlay{
    background: var(--secondary-light);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-content{
    width: 100%;
    max-width: 640px;
    background: var(--white);
    padding: 20px;
    position: relative;
    outline: none;
  }
`;

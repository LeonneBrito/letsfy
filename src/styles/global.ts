import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html  {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }
    @media(max-width: 720px) {
      font-size: 87.5%
    }
  }

  html, body, #root {
    height: 100%;
  } 

  body {
    font: 14px 'Roboto', sans-serif;
    background: #ecf1f8;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }
  
  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: #F0F2F5;
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s ease;
    &:hover {
      filter: brightness(0.8)
    }
  }

  .edit-button {
    position: absolute;
    top: -10px;
    right: 15px;
  }

  .edit-title {
    font-size: 16px;
    font-weight: 500;
  }

  .edit-content {
    margin-top: 5px;
    font-weight: 400;
    color: #808080;
    font: 14px 'Roboto', sans-serif;
  }

`;

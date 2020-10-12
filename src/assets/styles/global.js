import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 60.2%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #252B42;
    color: #FFF;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
  }

  @media (min-width: 1280px) {
    :root {
      font-size: 70%;
    }
  }

  @media (min-width: 1440px) {
    :root {
      font-size: 80%;
    }
  }

  @media (max-width: 880px) {
    :root {
      font-size: 58%;
    }
  }

  @media (max-width: 500px) {
    :root {
      font-size: 50%;
    }
  }

  button:hover {
    filter: brightness(95%);
    box-shadow: 0 0.2rem 0.3rem 0 rgba(0, 0, 0, 0.3);
    transition: 0.3s;
  }
`;
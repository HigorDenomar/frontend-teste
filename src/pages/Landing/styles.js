import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 143.9rem;
  margin: 0 auto;
  background: red;
`;

export const Hero = styled.section`
  width: 100%;
  height: 100vh;
  background: linear-gradient(39.97deg, #EF2779 0.79%, #7834BE 79.29%);
  
  .wrapper {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-around;

    img {
      width: 60%;
      margin: 0 0 -30rem -40rem;
      z-index: 5;
    }

    .content {
      max-width: 30rem;

      h1 {
        font-size: 5rem;
        margin-bottom: 2.7rem;
      }

      button {
        margin-top: 6rem;
        width: 23.6rem;
        height: 6.5rem;

        border-radius: 5rem;
        border: 0;
        outline: 0;

        font-weight: bold;
        font-size: 2.2rem;
        color: #38A3F1;
        cursor: pointer;
      }
    }
  }

  /* Estilização da 'wave' na section */
  .wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;

    svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: 152px;
      transform: rotateY(180deg);
    }

    .shape-fill {
      fill: #252B42;
    }
  }

`;
import styled from 'styled-components';

const section = styled.section`
  width: 100%;
  max-width: 143.9rem;
  margin: 0 auto;
  padding: 0.8rem;
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

export const Features = styled(section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 57.1rem;
  padding-top: 30rem;

  h3 {
    font-size: 2.2rem;
    font-weight: bold;
  }

  h2 {
    font-size: 4.6rem;
    font-weight: 400;
    margin: 1.7rem 0 2.7rem 0;
  }

  h4 {
    font-weight: bold;
    line-height: 2rem;
    max-width: 29.8rem;
    text-align: center;
  }

  .content {
    display: grid;
    grid-template-columns: repeat(auto-fit, 25.5rem);
    grid-gap: 5rem;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    padding: 9rem 0;
  }
  
`;
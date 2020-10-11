import styled from 'styled-components';

const section = styled.section`
  width: 100%;
  max-width: 143.9rem;
  margin: 0 auto;
  padding: 2rem;
`;

export const Hero = styled.section`
  width: 100%;
  height: 100vh;
  background: linear-gradient(39.97deg, #EF2779 0.79%, #7834BE 79.29%);
  text-align: center;
  position: relative;

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
      z-index: 5;

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
    bottom: -5px;
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

  @media (max-width: 1080px) {
    .wrapper img {
      width: 70%;
    }
  }

  @media (max-width: 980px) {
    .wrapper img {
      width: 80%;
    }
  }

  @media (max-width: 880px) {
    height: auto;

    .wrapper {
      width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-top: 20rem;

      img {
        width: 100%;
        margin: 0;
      }

      .content {
        order: -1;

        button {
          position: absolute;
          bottom: -6.577rem;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }

  @media (max-width: 600px) {
    .wrapper .content button {
      bottom: -10rem;
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
    grid-gap: 9rem 5rem;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    padding: 9rem 0;
  }
  
  @media (max-width: 600px) {
    padding-top: 25rem;
  }
`;

export const TryFree = styled(section)`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2, h4 {
    text-align: center;
  }

  h2 {
    font-size: 4.6rem;
    line-height: 5.7rem;
    font-weight: 400;
    max-width: 29.6rem;
    margin-top: 10.1rem;
  }

  h4 {
    line-height: 2rem;
    max-width: 29.8rem;
    margin: 2.7rem 0 9rem 0;
  }

  button {
    width: 23.6rem;
    height: 6.5rem;
    border-radius: 5rem;

    background: #38A3F1;

    border: 0;
    outline: none;
    cursor: pointer;

    font-size: 2.2rem;
    font-weight: bold;
    color: #FFF;
  }

  img {
    width: 100%;
    max-width: 103.3rem;
    margin: 12.9rem 0 13.3rem 0;
  }
`;

export const Subscribe = styled(section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8.1rem 0.8rem 10.4rem 0.8rem;

  h3 {
    font-size: 2.2rem;
    line-height: 3.3rem;
  }

  h2 {
    font-size: 4.6rem;
    font-weight: 400;
    line-height: 5.7rem;
    text-align: center;

    margin: 2rem 0 6.9rem 0;
  }

  p {
    font-size: 1.8rem;
    margin: 1rem 0 3.4rem 0;
  }

  input, button {
    width: 35.3rem;
    height: 5.4rem;

    border: 0;
    outline: none;
    border-radius: 5rem;
  }

  input {
    background: #F4F4F4;

    padding: 0 3.5rem;
    margin-bottom: 1.2rem;

    color: #18171D;
    font-size: 1.4rem;
  }

  button {
    background: #EF2779;
    color: #FFF;
    cursor: pointer;
  }
`;

export const Partners = styled(section)`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 4.6rem;
    font-weight: 400;
    margin: 13rem 0 2.7rem 0;
  }

  h4 {
    max-width: 29.8rem;
    text-align: center;
  }

  .content {
    display: grid;
    grid-template-columns: repeat(auto-fit, 21.8rem);
    grid-gap: 9rem 7.2rem;
    justify-content: center;
    align-items: center;
    margin: 8rem 0 9rem 0;

    width: 100%;
    max-width: 79.8rem;
    height: 100%;
  }

  button {
    background: #38A3F1;
    
    width: 23.6rem;
    height: 6.5rem;
    border-radius: 5rem;
    margin-bottom: 8rem;
    
    font-size: 2.2rem;
    font-weight: bold;
    color: #FFF;

    border: 0;
    outline: none;
    cursor: pointer;
  }
`;

export const Testimonials = styled(section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 11.1rem 0 10rem 0;

  h2 {
    font-size: 4.6rem;
    font-weight: 400;
  }

  > img {
    margin: 9rem 0 6rem 0;
  }

  h4 {
    max-width: 68.3rem;
  }

  .people-container {
    display: grid;
    grid-template-areas:
      "img title title"
      "img link link";

    margin: 6rem 0 8rem 0;
    align-items: center;

    img {
      grid-area: img;
      margin-right: 1.3rem;
    }

    h5 {
      grid-area: title;
      font-size: 1.2rem;
    }

    a {
      grid-area: link;
      font-size: 1.5rem;
      font-weight: 400;
      text-decoration: none;
      color: #FFF;
    }
  }

  button {
    background: #38A3F1;
    width: 28rem;
    height: 6.5rem;
    border-radius: 5rem;

    border: 0;
    outline: none;
    cursor: pointer;

    font-size: 2.2rem;
    font-weight: 3.3rem;
    color: #FFF;
  }
`;

export const Pricing = styled(section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 11rem 0 10rem 0;

  h2 {
    font-size: 4.6rem;
    font-weight: 400;
  }

  h4 {
    max-width: 29.8rem;
    margin: 2.7rem 0 9rem 0;
  }

  .prices-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, 33.5rem);
    grid-gap: 5rem;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
  }
`;

export const ContactSection = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  padding: 9.5rem 1rem 8.5rem 1rem;
  background: #D6EBFF;
  box-shadow: 0 0.849823rem 1.24205rem rgba(0, 0, 0, 0.07);
  color: #252B42;

  h2 {
    font-size: 4.6rem;
    font-weight: 400;
  }

  h4 {
    font-size: 1.6rem;
    max-width: 29.8rem;
    text-align: center;
    margin: 2.7rem 0 6rem 0;
  }

  .content {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 800px) {
    .content {
      flex-direction: column;
      align-items: center;

      form {
        order: 1;
        margin-top: 7.669rem;
      }
    }
  }
`;

export const Footer = styled(section)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 13rem 0;

  .pages {

    h3 {
      font-size: 2.2rem;
      font-weight: 700;
      margin-bottom: 2.5rem;
    }

    ul {
      list-style: none;

      li+li {
        margin-top: 1.6rem;
      }

      li {
        a {
          text-decoration: none;
          color: #FFF;

        }
      }
    }
  }

  @media ( max-width: 880px) {
    flex-direction: column;

    iframe {
      margin: 5.5rem 0 6.5rem 0;
    }
  }
`;


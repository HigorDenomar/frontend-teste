import styled, { css } from 'styled-components';

export const Container = styled.div`

  background: #FFF;
  color: #252B42;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 4rem;
  
  border-radius: 1rem;
  transition: 0.3s;

  h3 {
    font-size: 2.2rem;
  }

  h5 {
    margin-top: 0.3rem;
    font-size: 1.2rem;
  }

  .price {
    margin: 2.75rem 0 2.75rem 0;

    display: grid;
    grid-template-areas:
      "price dollar dollar"
      "price text text";
    
    h1 {
      grid-area: price;
      margin-right: 1rem;
      font-size: 5.5rem;
      font-weight: 900;
    }

    h3, h5 {
      justify-self: flex-start;
    }

    h3 {
      grid-area: dollar;
      font-size: 2.2rem;
      font-weight: 700;
      align-self: flex-end;
    }

    h5 {
      margin: 0.5rem 0;
      grid-area: text;
      font-size: 1.2rem;
      font-weight: 700;
    }
  }

  button {
    align-self: center;
    width: 100%;
    height: 5.2rem;

    background: #38A3F1;
    border-radius: 5rem;

    border: 0;
    outline: none;
    cursor: pointer;

    font-weight: 500;
    font-size: 1.6rem;
    color: #FFF;
  }

  &:hover {
    transform: translateY(-2rem) scale(1.05);
  }

  ${ props => props.main && css`
    background: linear-gradient(39.97deg, #EF2779 0.79%, #7834BE 79.29%);
    color: #FFF;

    button {
      background: #FFF;
      color: #EF2779;
    }
  `}
`;


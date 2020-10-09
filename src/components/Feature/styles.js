import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .header {
    display: flex;

    h3 {
      font-size: 2.2rem;
      margin: 2rem 0;
      line-height: 3.3rem;
    }

    img {
      align-self: flex-start;
      margin-right: 0.8rem;
    }
  }

  p {
    font-size: 1.8rem;
    line-height: 2.7rem;
  }

`;
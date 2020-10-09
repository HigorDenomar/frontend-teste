import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 6.5rem;

  color: ${ props => props.dark ? '#252B42' : '#FFF' };

  .contact-item {
    display: flex;
    align-items: center;

    img {
      margin-right: 2.067rem;
    }

    h5 {
      width: 100%;
      max-width: 20.8rem;
      font-size: 1.2rem;
      font-weight: 700;
      line-height: 1.8rem;
    }

    &:nth-child(2) {
      margin: 1.2rem 0;
    }
  }

  .networks {
    margin: 7.5rem 0 0 1rem;

    img+img {
      margin-left: 2.848rem;
    }
  }
`;


import styled from 'styled-components';

export const Container = styled.section`
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

    .contacts {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 6.5rem;

      .contact-item {
        display: flex;
        align-items: center;

        img {
          margin-right: 2.067rem;
        }

        h5 {
          width: 100%;
          max-width: 30rem;
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

      
    }
  }
`;

export const Form = styled.form`
  background: #FFF;
  display: flex;
  width: 100%;
  max-width: 40.072rem;
  flex-direction: column;
  align-items: center;
  border-radius: 1.307rem;
  padding: 2.6rem 4.1rem;

  h3 {
    font-size: 1.438rem;
    font-weight: 700;
    margin-bottom: 3.1rem;
  }

  input,
  textarea {
    background: #F5F5F5;
    width: 100%;
    padding: 0 1.307rem 0 1.307rem;

    border: 0;
    outline: none;
  }

  input {
    height: 3.584rem;

    margin-bottom: 3.1rem;
    border-radius: 5rem;
  }

  textarea {
    height: 12.617rem;
    resize: none;
    padding-top: 1.5rem;
  }

  button {
    background: #EF2779;
    border-radius: 5rem;
    padding: 1.177rem 3.489rem;
    margin-top: 3.1rem;
    align-self: flex-end;

    border: 0;
    outline: none;
    cursor: pointer;

    font-size: 1.6rem;
    font-weight: 500;
    color: #FFF;
  }
`;


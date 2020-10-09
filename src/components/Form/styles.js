import styled from 'styled-components';

export const Container = styled.form`
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


import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    color: var(--title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  input,
  select {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;
    &::placeholder {
      font: 1rem 'Roboto', sans-serif;
      color: #969cb3;
    }
    & + input {
      margin-top: 1rem;
    }
    & + textarea {
      margin-top: 1rem;
    }
  }

  textarea {
    width: 100%;
    max-width: 100%;
    padding: 0 1.5rem;
    height: 6rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;
    font: 1rem 'Roboto', sans-serif;
    line-height: 2rem;
    &::placeholder {
      font: 1rem 'Roboto', sans-serif;
      color: #969cb3;
      line-height: 2rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: #37c77f;
    color: #ffffff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter 0.2s ease;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

import styled from "styled-components";

export const SearchContainer = styled.div`
  padding: 20px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    margin-right: 25px;
    width: 456px;
    max-width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: border-color 0.3s;
    padding-left: 10px;

    &:hover {
      border-color: darkgreen;
    }
  }

  button {
    padding: 10px 20px;
    background-color: black;
    border: none;
    color: white;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: darkgreen;
    }
  }
`;

export const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(440px, 1fr)); /* Update this line */
  gap: 20px;
  margin-top: 20px;
`;

export const MovieItem = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s, border-radius 0.3s, transform 0.3s;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }

  h2 {
    color: #333;
    margin-top: 8px;
    padding: 12px;
    font-size: 1.2rem;
    transition: color 0.3s;
  }

  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    transform: translateY(-4px);
  }

  &:hover h2 {
    color: darkgreen;
    transition: color 0.3s;
  }
`;

import styled from "styled-components";

export const MovieItem = styled.div`
  background-color: #f0f0f0;
  padding: 0.5rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;

  img {
    width: 420px;
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }

  h2 {
    font-size: 1.1rem;
    color: #333;
    padding: 12px;
    transition: color 0.3s ease-in-out;
  }

  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-4px);
  }

  &:hover h2 {
    color: #1b5e20;
  }
`;

export const MovieListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  margin-top: 1rem;
`;

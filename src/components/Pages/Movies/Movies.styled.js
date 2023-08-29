import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const FilmContainer = styled.div`
  margin: auto;
  max-width: 1200px;
  padding: 32px;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FilmTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #222;
  text-align: left;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: #008000;
  }
`;

export const FilmInfo = styled.div`
  margin-top: 1.5rem;
  background-color: #fce7e7c9;
  display: flex;
  max-width: 1000px;
  flex-direction: row-reverse;
`;

export const FilmImage = styled.img`
  max-width: 300px;
  border-radius: 12px;
  margin-right: 24px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
`;

export const FilmDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  p {
    margin: 1rem 0;
  }

  strong {
    font-weight: 600;
    color: #444;
  }
`;

export const ButtonLink = styled(Link)`
  padding: 12px 24px;
  background-color: #f39c12;
  color: #fff;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e74c3c;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 1.5rem;
`;

export const StyledButtonLink = styled(ButtonLink)`
  ${props =>
    props.active &&
    css`
      background-color: #27ae60;
      &:hover {
        background-color: #219653;
      }
    `}
`;

export const NavLinkBlock = styled(Link)`
  text-decoration: none;
  font-weight: bold;

  &:link,
  &:visited {
    color: #008000;
  }

  &:hover,
  &:active {
    color: #006400;
  }

  &:hover ${FilmTitle} {
    color: #006400;
    transition: color 0.3s;
  }
`;

export const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 32px;
`;

export const MovieItem = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s, border-radius 0.3s;

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

    &:hover {
      color: darkgreen;
    }
  }

  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
    border-radius: 12px;
  }
`;

export const SearchMoviesText = styled.h2`
  margin-block-end: 16px;
  margin-block-start: 16px;
  text-align: left;
  transition: color 0.3s;

  &:hover {
    color: darkgreen;
  }
`;
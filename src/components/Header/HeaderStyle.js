import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  background-color: #f8f8f8;
  color: #333;
  padding: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

export const NavItem = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  border-left: 4px solid transparent;
  padding-left: 12px;
  transition: color 0.3s ease-in-out, border-left-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    color: #1b5e20;
    border-left-color: #1b5e20;
    outline: none;
  }
`;

export const CustomLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  border-left: 4px solid transparent;
  padding-left: 12px;
  transition: color 0.3s ease-in-out, border-left-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    color: #1b5e20;
    border-left-color: #1b5e20;
    outline: none;
  }
`;

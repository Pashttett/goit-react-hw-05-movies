import React from "react";
import { HeaderWrapper, Navigation, NavItem, CustomLink } from './HeaderStyle';

const Header = () => {
  return (
    <HeaderWrapper>
      <Navigation>
        <NavItem to="/">Home</NavItem>
        <CustomLink to="/movies">Find Movies</CustomLink>
      </Navigation>
    </HeaderWrapper>
  );
};

export default Header;

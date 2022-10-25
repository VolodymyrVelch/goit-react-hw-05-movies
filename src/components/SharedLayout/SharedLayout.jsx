import { Outlet } from "react-router-dom";
import {NavBox,Nav, StyledNavLink } from "./SharedLayout.styled";
import { Suspense } from "react";

const SharedLayaut = () => {
  return <div>
    <NavBox>
      <Nav>
        <StyledNavLink to='/' end>Home</StyledNavLink>
        <StyledNavLink to='/movies'>Movies</StyledNavLink>
     </Nav>

    </NavBox>
    <Suspense fallback={<div>Loading ...</div>}></Suspense>
    <Outlet />
    <Suspense/>
    </div>
}

export default SharedLayaut
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBox = styled.div`
  display: block;
  height: 60px;
  background-color: grey;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const Nav = styled.nav`
  display: flex;
  height: 40px;
`;
export const StyledNavLink = styled(NavLink)`
  color: black;
  margin-top: 20px;
  text-decoration: none;
  margin-top: 20px;
  margin-left: 20px;
  font-size: large;
  font-weight: 700;
  &.active {
    color: orange;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: orange;
  }
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  margin: 20px;
  font-size: 40;
  color: #010101;
`;

export const StyledNavLink = styled(NavLink)`
  color: black;
  margin-top: 20px;
  padding: 20px;
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

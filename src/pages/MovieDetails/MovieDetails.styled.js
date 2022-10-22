import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
`;

export const Thumb = styled.div`
  padding: 10px;
`;

export const Poster = styled.img`
  width: 300px;
`;

export const Genre = styled.span`
  margin-right: 10px;
`;

export const AdditionalInfo = styled(NavLink)`
  margin-right: 10px;
  color: black;
  text-decoration: none;
  font-size: large;
  font-weight: 500;
  &.active {
    color: #d97c20;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #d97c20;
  }
`;

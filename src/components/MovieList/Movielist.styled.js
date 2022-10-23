import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FilmList = styled.ul`
  list-style: none;
`;

export const LinkStyle = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: large;
  font-weight: 500;
  transition: all 500ms ease;

  :hover,
  :focus-visible {
    color: #d97c20;
    transition: all 200ms ease;
  }
`;

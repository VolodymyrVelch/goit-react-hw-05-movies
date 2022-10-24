import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FilmList = styled.ul`
  list-style: none;
  padding: 0px;
`;

export const ListComponents = styled.li`
  padding: 5px;
  margin-left: 5px;
`;

export const LinkStyle = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: large;
  font-weight: 500;
  transition: all 500ms ease;

  :hover,
  :focus-visible {
    color: orange;
    transition: all 200ms ease;
  }
`;

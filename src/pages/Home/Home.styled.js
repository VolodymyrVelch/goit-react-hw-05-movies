import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const Title = styled.h1`
  padding: 5px;
`;

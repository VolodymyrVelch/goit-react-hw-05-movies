import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h2`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Thumb = styled.div`
  padding: 10px;
`;

export const Poster = styled.img`
  max-width: 300px;
  border-radius: 5px;
`;

export const Genre = styled.span`
  margin-right: 10px;
`;

export const AdditionalInfo = styled(NavLink)`
  margin-right: 10px;
  margin-bottom: 20px;
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

export const TitleAdditional = styled.h5`
  padding: 5px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: large;
`;

export const RoutesBox = styled.div`
  padding: 5px;
`;

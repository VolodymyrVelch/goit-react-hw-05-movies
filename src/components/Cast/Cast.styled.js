import styled from 'styled-components';

export const Poster = styled.img`
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  padding: 10px;
`;

export const CastItem = styled.li`
  padding: 10px;
  margin: 5px;
  list-style-type: none;
  text-align: center;
  width: 150px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

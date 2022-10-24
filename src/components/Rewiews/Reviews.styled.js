import styled from 'styled-components';

export const ReviewList = styled.ul`
  border-radius: 5px;
  margin-top: 10px;
  padding-left: 0px;
  width: 100%;
`;

export const ReviewItem = styled.li`
  padding: 10px;
  text-decoration: none;
  list-style-type: none;
`;

export const ReviewAuthor = styled.h5`
  font-size: medium;
`;

export const ReviewCont = styled.p`
  padding: 10px;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

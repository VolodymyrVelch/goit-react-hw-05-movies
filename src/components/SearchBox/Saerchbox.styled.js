import styled from 'styled-components';
import search from '../images/search.png';

export const SearchFormButton = styled.button`
  display: inline - block;
  width: 45px;
  height: 40px;
  border: 0;
  border-radius: 50%;
  margin-left: 5px;
  background-image: url(${search});
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
    border: 1px solid orange;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  height: 40px;
  border: 1px solid grey;
  border-radius: 5px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
  :hover,
  :focus {
    border: 1px solid orange;
  }
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  max-width: 350px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
`;

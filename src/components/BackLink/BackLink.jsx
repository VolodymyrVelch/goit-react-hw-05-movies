import { BsArrowLeftSquareFill } from "react-icons/bs";
import { StyledLink } from './BackLink.styled'


const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <BsArrowLeftSquareFill size="24" />
      {children}
    </StyledLink>
  );
};

export default BackLink

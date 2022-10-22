import { Outlet } from "react-router-dom";
import { StyledNavLink } from "components/App.styled";

const SharedLayaut = () => {
  return<div>
      <nav>
        <StyledNavLink to='/' end>Home</StyledNavLink>
        <StyledNavLink to='/Movies'>Movies</StyledNavLink>
    </nav>
    <Outlet/>
    </div>
}

export default SharedLayaut
import { Main, StyledNavLink } from "./App.styled";
import { Routes, Route } from "react-router-dom";
import  Home  from "../pages/Home";
import  Movies  from "pages/Movies";
import NotFound from "pages/NotFound";
import MoviesDeatils from "pages/MovieDetails/MovieDeatails";


export const App = () => {
  return (
    <Main>
      <nav>
        <StyledNavLink to='/' end>Home</StyledNavLink>
        <StyledNavLink to='/Movies'>Movies</StyledNavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Movies/:id" element={<MoviesDeatils />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Main>
  );
};

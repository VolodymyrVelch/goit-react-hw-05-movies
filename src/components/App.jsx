import { Main} from "./App.styled";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Cast from "./Cast/Cast";
import Reviews from "./Rewiews/Rewiews";
import SharedLayaut from "./SharedLayout/SharedLayout";
import  Movies  from "pages/Movies";
import NotFound from "pages/NotFound";
import MoviesDeatils from "pages/MovieDetails/MovieDeatails";


export const App = () => {
  return (
    <Main>
      <h1>World</h1>
      <Routes>
        <Route path="/" element={<SharedLayaut/>}>
          <Route index element={<Home/> } />
          <Route path="Movies" element={<Movies />} />
          <Route path="Movies/:id" element={<MoviesDeatils />} >
            <Route path='Cast' element={<Cast />}  />
            <Route path='Reviews' element={<Reviews/> } />
          <Route />
          <Route path="*" element={<NotFound/>} />
          </Route>
        </Route>
      </Routes>
    </Main>
  );
};

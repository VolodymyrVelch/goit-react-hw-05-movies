import { lazy, Suspense } from "react";
import { Main,FallBack } from "./App.styled";
import { Routes, Route } from "react-router-dom";

const SharedLayaut= lazy(() => import( "./SharedLayout/SharedLayout"));
const Home = lazy(() => import('../pages/Home/Home'));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Rewiews/Rewiews"));
const Movies  = lazy(() => import( "../pages/Movies"));
const NotFound =lazy(() => import( "../pages/NotFound"));
const MoviesDeatils = lazy(() => import( "../pages/MovieDetails/MovieDeatails"));


export const App = () => {
  return (
  <Suspense fallback={<FallBack>Loading ...</FallBack>}>
    <Main>
      <Routes>
        <Route path="/" element={<SharedLayaut/>}>
          <Route index element={<Home/> } />
          <Route path="Movies" element={<Movies />} />
          <Route path="Movies/:id" element={<MoviesDeatils />} >
            <Route path='Cast' element={<Cast />}  />
            <Route path='Reviews' element={<Reviews/> } />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </Main>
  </Suspense>
  );
};

import { Route, Routes } from "react-router-dom";
import {MovieList} from "../pages/MovieList";
import {MovieDetails} from "../pages/MovieDetails";
import { Search } from "../pages/Search";
import { PageNotFound } from "../pages/PageNotFound";

const AllRoutes = () => {
  return (
    
        <Routes>
            <Route path="/" element={<MovieList title="Home" apiUrl="movie/now_playing"/>}/>
            <Route path="movies/popular" element={<MovieList title="Popular" apiUrl="movie/popular"/>}/>
            <Route path="movies/top" element={<MovieList title="Top-Rated" apiUrl="movie/top_rated"/>}/>
            <Route path="movies/upcoming" element={<MovieList title="Upcoming" apiUrl="movie/upcoming"/>}/>
            <Route path="movie/:id" element={<MovieDetails/>}/>
            <Route path="search" element={<Search apiUrl="search/movie"/>}/>
            <Route path="*" element={<PageNotFound/>}/>

        </Routes>
    
  )
}

export default AllRoutes
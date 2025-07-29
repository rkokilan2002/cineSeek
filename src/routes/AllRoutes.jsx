import { Route, Routes } from "react-router-dom"
import {MovieList} from "../pages/MovieList";

const AllRoutes = () => {
  return (
    
        <Routes>
            <Route path="/" element={<MovieList title="Home"/>}/>
            <Route path="movies/popular" element={<MovieList title="Popular"/>}/>
            <Route path="movies/top" element={<MovieList title="Top-Rated"/>}/>
            <Route path="movies/upcomming" element={<MovieList title="Upcomming"/>}/>

        </Routes>
    
  )
}

export default AllRoutes
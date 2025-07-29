import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle"
import { useEffect, useState } from "react";
import react from "../assets/react.svg"
import "../App.css"
import { timeConverter } from "../utils/timeConverter";


export const MovieDetails = ({title}) => {
  useTitle(title);
  const params = useParams();
  const [movie,setMovie] = useState([]);
  const key = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;
  const image = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : react;
   
      
      useEffect(()=>{
          async function fetchMovies() {
              fetch(url).then((res)=>res.json()).then((data)=>setMovie(data));
              
  
          }
          fetchMovies();
      },[]);


      useEffect(() =>{
        document.title =`${movie.title}` ;
      }
      )
  return (
    <main className="container">
      <h5 className="text-secondary py-2 border-bottom mb-3">{movie.title}</h5>
      <div className="row">
        <div className="col-md-4">
          <img src={image} alt="" className="img-fluid custom-img" />
        </div>
        <div className="col-md-8">
          <h3 className="text-dark">{movie.title}</h3>
          <p>{movie.overview}</p>

          {movie.genres ? <p className="d-flex gap-3">
            {movie.genres.map((genre) => (<span key={genre.id} className="badge  bg-info ">{genre.name}</span>)
              
            )}
          </p> :""}

          <p className="mt-2">
            <i className="bi bi-star-fill text-warning"></i> <span className="text-secondary">{movie.vote_average}</span> | <i className="bi bi-people-fill text-primary"></i> <span className="text-secondary">{movie.vote_count}</span>
          </p>

          <table className="table table-borderless w-25 mt-2">
            <tbody>
              <tr>
                <th>Run-time</th>
                <td>{timeConverter(movie.runtime)}</td>
              </tr>
              <tr>
                <th>Release-Date</th>
                <td>{movie.release_date}</td>
              </tr>
              <tr>
                <th>Budget</th>
                <td>{movie.budget}</td>
              </tr>
              <tr>
                <th>Revenue</th>
                <td>{movie.revenue}</td>
              </tr>
            </tbody>
          </table>

          <a href={`https://www.imdb.com/title/${movie.imdb_id}`} className="btn btn-sm btn-warning" target="_blank">Check on IMDB</a>
        </div>
      </div>
    </main>
  )
}

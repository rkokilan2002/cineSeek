import { useEffect } from "react"
import { useTitle } from "../hooks/useTitle"
import { useNavigate } from "react-router-dom";
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({title,apiUrl}) => {
  const {data: movies=[]} = useFetch(apiUrl);
  useTitle(title);
  const navigator = useNavigate();
  return ( 
    <div>
      <main className="container">
        <h5 className="text-danger py-2">{title}</h5>
        {title == "Home" ? 
          <div className="bg-body-tertiary p-5 mb-5 border">
            <h3 className="text-center welcome">Welcome to CineSeek</h3>
            <p className="text-center lead">You can discover movies from the great collection of ours.</p>
            <p className="text-center lead">Enjoy</p>

            <div className="d-flex justify-content-center">
              <button className="btn btn-secondary" onClick={()=>{navigator("movies/upcoming")}}>Explore</button>

            </div>
          </div>
        :""}

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 my-2">
          {movies.map((movie) => {
            return <Card key={movie.id}/>
          })} 
        </div>
      </main>
    </div>
  )
}


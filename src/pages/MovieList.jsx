import { useEffect } from "react"
import { useTitle } from "../hooks/useTitle"
import { useNavigate } from "react-router-dom";

export const MovieList = ({title}) => {
  useTitle(title);
  const navigator = useNavigate();
  return (
    <div>
      <main className="container">
        <h5 className="text-danger py-2">{title}</h5>
        {title == "Home" ? 
          <div className="bg-body-tertiary p-5 mb-5 border">
            <h3 className="text-center text-primary">Welcome to CineSeek</h3>
            <p className="text-center lead">You can discover movies from the great collection of ours.</p>
            <p className="text-center lead">Enjoy</p>

            <div className="d-flex justify-content-center">
              <button className="btn btn-secondary" onClick={()=>{navigator("movies/upcomming")}}>Explore</button>

            </div>
          </div>
        :""}
      </main>
    </div>
  )
}


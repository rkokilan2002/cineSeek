import react from "../assets/react.svg";
import { Link } from "react-router-dom";

export const Card = ({movie}) => {
  const {poster_path,id,overview,title,vote_average,vote_count} = movie;
  const image = poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : backup;
  return (
    <div className="col">
      <div className="card shadow-md" title={title}>
         <img src={image} alt=""className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title text-secondary text-overflow-1">{title}</h5>
          <p className="card-text text-justify text-overflow-2">{overview}</p>
          <div className="d-flex justify-content-between align-item-center">
            <Link to="" className="btn btn-sm btn-outline-secondary">View</Link>
            <div>
              <small className="text-secondary">
              <i className="bi bi-star-fill text-warning"> </i>
              {vote_average} | {vote_count}
            </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

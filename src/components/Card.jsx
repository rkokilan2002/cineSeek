import react from "../assets/react.svg";
import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <div className="col">
      <div className="card shadow-md">
         <img src={react} alt=""className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title text-secondary"></h5>
          <p className="card-text text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sunt soluta porro expedita! Repellendus, molestias?</p>
          <div className="d-flex justify-content-between align-item-center">
            <Link to="" className="btn btn-sm btn-outline-secondary">View</Link>
            <div>
              <small className="text-secondary">
              <i className="bi bi-star-fill text-warning"> </i>
              3.8 | 69 Reviews
            </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

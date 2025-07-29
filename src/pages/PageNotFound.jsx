import { useTitle } from "../hooks/useTitle"
import { Link } from "react-router-dom";
import "../App.css"

export const PageNotFound = ({title}) => {
  useTitle(title="404 | Error");
  return (
    
    <div className="container d-flex flex-column justify-content-center align-items-center text-center vh-100 vw-100 ">
      <h1 className="text-danger display-1">
        404
      </h1>
      <h2>
        Oops...
      </h2>
      <h2>
        Page Not Found
      </h2>

      <p className="text-center">
        <Link className="btn btn-info mt-3" to="/">Return to Home</Link>
      </p>
      
    </div>
  )
}


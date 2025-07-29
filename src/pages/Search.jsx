
import { useEffect } from "react"
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";

export const Search = ({apiUrl}) => {

  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const {data : movies} = useFetch(apiUrl,queryTerm);

  useEffect(() => {
    document.title = queryTerm; 
  },[])
  return (
    <main className="container">
      <h5 className="text-danger py-2">
        {movies.length==0?`No Results for ${queryTerm} | Try Different Terms` : `Results for ${queryTerm}`}</h5>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-5 py-2">
          {movies.map((movie) => {
            return <Card key={movie.id} movie={movie}/>
          })} 
      </div>
    </main>
  )
}


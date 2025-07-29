import { useEffect, useState } from "react"


export const useFetch = (apiUrl,queryTerm="") => {
    const[data,setData] = useState([]);
    const key = import.meta.env.VITE_API_KEY;
    const url = `https://api.themoviedb.org/3/${apiUrl}?api_key=${key}&query=${queryTerm}`;
 
    
    useEffect(()=>{
        async function fetchMovies() {
            fetch(url).then((res)=>res.json()).then((data)=>setData(data.results));
            

        }
        fetchMovies();
    },[url]);

    return {data};
}

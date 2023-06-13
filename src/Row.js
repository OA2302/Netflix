
import React, {useEffect, useState} from "react";

import './Row.css'

import axios from "axios";


const base_url = "https://image.tmdb.org/t/p/orignal"
function Row({title, fetchUrl, isLargeRow}) {
const [movies,setMovies] = useState([]);
useEffect(() => {
    async function fetchData(){
        const request = await axios.get(fetchUrl);
        setMovies = (request.data.results);
    }
    fetchData();
},[fetchUrl]);
return (
    <div className="row">
        <h1>{title}</h1>
        <div className="row-posters">
            {movies.map(movie => {
                return <img
                key = {movie.id}
                className= {`row-poster ${isLargeRow && "row-posterLarge"}`}
                src= {`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path} `}
                alt= {movie.name}
                />
            })};
        </div>
    </div>
)
}

export default Row
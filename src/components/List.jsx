import Movie from "./Movie"
import React from 'react'
import axios from "axios"
import {useState, useEffect} from "react"
import { Link } from "react-router-dom"

export default function List() {

    //-----------------------------------------------useState-----

    const [movies, setMovies] = useState([])

    //무한루프 안 돌리려면 useEffect 필요

    //----------------------------------------------api----------

    useEffect(() => {
    axios
    .get("https://api.themoviedb.org/3/movie/popular?api_key=c06b68f2227892978c4d94fb3dcf00be&language=ko-KR&page=1")
    .then((response) => {
        console.log(response.data.results)
        setMovies(response.data.results)
    })
  },[])
  return (
    <div className="container">
        <h2>
            <p>
             <Link to="/nowplay">NOW PLAY</Link>
            </p>
            <p>
              POPULAR MOVIE
            </p>
        </h2>
        <ul className="movie-list">
            {
                //console.log(movies)
                movies.map((item, idx) => {
                    return (
                        //<Movie voteCount = {item.vote_count} overview={item.overview}key = {idx} poster = {item.poster_path} title={item.title} originalTitle={item.original_title} releaseDate={item.release_date}></Movie>
                        <Movie movieInfo={item} key={idx}></Movie>
                    )
                })
            }
        </ul>
    </div>
    
  )
}

import React,{useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from "axios"
import Movie from "./Movie"

export default function SearchResult() {
    const [searchParams, ] = useSearchParams()
    console.log(searchParams.get("movie"))
    const searchmovie = searchParams.get("movie")
   // const searchname = searchParams.get("movie")
    //setSearchParams(get("movie"))
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=c06b68f2227892978c4d94fb3dcf00be&language=ko-KR&page=1&query=${searchmovie}`)
        .then((response) => {
            console.log(response.data.results)
            setMovies(response.data.results)
        })
      },[searchmovie])   //searchmovie값이 바뀔 때마다 실행 / 빈 배열이면 한 번만
    return (
        <div className="container">
            <h2><strong>POPULAR</strong> MOVIE</h2>
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

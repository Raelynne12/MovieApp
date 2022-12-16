import React,{useState, useEffect} from 'react'
import axios from "axios"
import {useParams} from "react-router-dom"
import NowMovie from './NowMovie'

export default function NowPlaying() {

    const [nowplay, setNowPlay] = useState([])

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=c06b68f2227892978c4d94fb3dcf00be&language=ko-KR&page=1")
        .then((response) => {
            console.log(response.data.results)
            setNowPlay(response.data.results)
        })
    },[])

  return (
    <div className='container'>
        <h2><strong>Now Playing</strong></h2>
        <ul className='now-list'>
            {
                nowplay.map((item, idx) => {
                    return(
                        <NowMovie id={item} title={item.title} poster={item.poster_path} key={idx}></NowMovie>
                    )
                })
            }
        </ul>
    </div>
  )
}

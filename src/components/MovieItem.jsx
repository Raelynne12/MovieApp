import React from 'react'
import {Link} from "react-router-dom"
import ProfileImg from "../assets/Profile.png"

export default function MovieItem({poster, title, id}) {
  return (
    <>
    <Link to = {`/detail/${id}`}>
    <div className='movie-img'>
        {poster?<img src = {`https://image.tmdb.org/t/p/w200/${poster}`} alt={title}/>:<img src={ProfileImg} alt={title}/>}
    </div>
    <div className='movie-info'><p>{title}</p></div>
    </Link>
</>
  )
}

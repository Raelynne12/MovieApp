import React from 'react'
import { Link } from 'react-router-dom'

export default function NowMovie({id}) {
  return (
    <li>
        <Link to ={`/nowplay/${id.id}`}>
            <div className='img-box'>
                <img src={`https://image.tmdb.org/t/p/w200/${id.poster_path}`} alt="" />
                <span className='point'>{id.vote_average}</span>
            </div>
            <div className='info'>
                <div className='title-box'>
                    <h3>{id.original_title}</h3>
                    <p className='original-title'>{id.original_title}</p>
                    <p className='open-date'>{id.release_date}</p>
                </div>
                <div className='overview-box'>
                    <p className='overview'>{id.overview}</p>
                    <p className='vote'>{id.vote_count}</p>
                </div>
            </div>
        </Link>
    </li>
  )
}

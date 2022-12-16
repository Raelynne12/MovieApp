import React from 'react'
import {Link, useNavigate} from "react-router-dom"
import Search from './Search'
import NowPlaying from "./NowPlaying"

export default function Header() {

  const navigate = useNavigate()

  const back = () => {
    navigate(-1)
  }
  return (
    <header className='header' id = "header">
        <button onClick={back} className = "back">
        <i class="fa-solid fa-arrow-left"></i>
        </button>
        <h1>
        <Link to="/">MOVIE APP</Link>
        </h1>
        <Search></Search>
    </header>
  )
}

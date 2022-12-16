import React,{useState} from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'

export default function Search() {
    const navigate = useNavigate()
    const [searchmovie, setSearchMovie] = useState("")
  return (
    <div className='search'>
          <input type="text" onChange={(e) => {
            setSearchMovie(e.currentTarget.value)
            
            }} onKeyUp = {(e) => {
                // if(e.key === "Enter") navigate({
                //     pathname:"/search",
                //     search:`?${createSearchParams({
                //         movie:searchmovie,
                //         //name:"Raelynne"   이렇게 쓰면 url에 name도 같이 뜸
                //     })}`
                if(e.key === "Enter") navigate(`/search?movie=${searchmovie}`) 
            }}/>
          <button className='search-button' onClick={() => {
            navigate(`/search?movie=${searchmovie}`)   //뒤에 &name="Raelynne"
          }}>
              <i class="fa-solid fa-magnifying-glass"></i>
          </button>
    </div>
  )
}

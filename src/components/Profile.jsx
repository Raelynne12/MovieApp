import React from 'react'
import ProfileWomanImg from "../assets/woman-profile.png"
import ProfileManImg from "../assets/man-profile.png"
import ProfileImg from "../assets/Profile.png"
import {Link} from "react-router-dom"
<as></as>
export default function Profile({img, name, gender, id}) {
  return (
    <>
    <Link to ={`/profile/${id}`}>
        <div className='profile-img'>
            {
                img ? <img src={`https://image.tmdb.org/t/p/w200/${img}`} alt={name}/>:
                (gender === 1)? <img src={ProfileWomanImg} alt={name}/>:
                (gender === 2)? <img src={ProfileManImg} alt={name}/>:
                <img src={ProfileImg} alt={name}/>
            }
        </div>
        <div className='profile-info'>
            <p>{name}</p>
        </div>
    </Link>
    </>
  )
}

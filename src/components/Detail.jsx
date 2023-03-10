import React, { useState, useEffect, useCallback} from 'react'
import axios from "axios"
import {useParams} from "react-router-dom"
import Profile from './Profile'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Detail() {
    //const [count, setCount] = useState(0)
    const { id } = useParams()  //구조분해할당 할 때는 값 그대로 써야 함
    
    console.log(id)
    const [detail, setDetail] = useState({})
    const [genres, setGenres] = useState("")
    const [cast, setCast] = useState([])   
    //cast는 배열로 들어온 거라 []를 해줘야 함

    const getDetail = useCallback(() => { 
        axios
        .get(`https://api.themoviedb.org/3/movie/${id}?api_key=c06b68f2227892978c4d94fb3dcf00be&language=ko-KR`)
        .then((response)=>{
        setDetail(response.data);
        setGenres(response.data.genres.map(item=>item.name).join("/"));
        })
    },[id])

    const getCast = useCallback(() => { 
        axios 
        .get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c06b68f2227892978c4d94fb3dcf00be&language=ko-KR`)
        .then((response) => {
           //setCast(response.data.cast.map((item) => item.profile_path))
           setCast(response.data.cast)})
    },[id])

    //prettier-ignore
    useEffect(() => {
        getDetail()
        getCast()

        

    },[getDetail, getCast])
  return (
    <>
        <div className='container detail'>
        <h2>{detail.title}</h2>
        <div className="detail-box">
        <div className='img-box'>
            <img src={`https://image.tmdb.org/t/p/w300/${detail.poster_path}`} alt=""></img>
            <span className='point'>{detail.vote_average}</span>
        </div>
        <div className='info'>
            <div className='title-box'>
                <h3>{detail.original_title}</h3>
                <p className='original-title'>{detail.original_title}</p>
                <p className='open-date'>{detail.release_date}</p>
            </div>
            <div className="summary">
                <dl>
                    <dt>genre</dt>
                    <dd>{genres}</dd>
                </dl>
                <dl>
                    <dt>time</dt>
                    <dd>{detail.runtime}</dd>
                </dl>
                <dl>
                    <dt>grade</dt>
                    <dd>{detail.vote_average}</dd>
                </dl>
                <dl>
                    <dt>vote</dt>
                    <dd>{detail.vote_count}</dd>
                </dl>
                <dl>
                    <dt>summary</dt>
                    <dd className='desc'>{detail.overview}</dd>
                </dl>
                <dl>
                    <dt>casting</dt>
                    <dd>
                    <Swiper 
                    className='cast-list'
                        spaceBetween={30}
                        slidesPerView={"auto"}
                    >
                    {cast.map((item, idx) => {
                        return(
                            <SwiperSlide className='item'>
                                <Profile img={item.profile_path} name={item.name} key={idx} gender={item.gender} id={item.id}></Profile>
                            </SwiperSlide>
                        )}
                    )}
                    </Swiper>
                    </dd>
                    {/* <dd className='desc'>{cast}</dd> */}

                </dl>
                
            </div>
           
        </div>
        </div>
        </div>
        <div className='bg' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${detail.backdrop_path})`}}></div>
    </>
  )
}

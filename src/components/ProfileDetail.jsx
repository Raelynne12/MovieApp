import React, { useState, useEffect} from 'react'
import axios from "axios"
import {useParams} from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MovieItem from './MovieItem';

export default function ProfileDetail() {
    //const [count, setCount] = useState(0)
    const profileId = useParams().id
    //console.log(profileId)
    const [detail, setDetail] = useState({})
    //cast는 배열로 들어온 거라 []를 해줘야 함
    const [movies, setMovieCredit] = useState([])

    //prettier-ignore
    useEffect(() => {
        axios
        .get(`https://api.themoviedb.org/3/person/${profileId}?api_key=c06b68f2227892978c4d94fb3dcf00be&language=ko-KR`)
        .then((response)=>{
        setDetail(response.data);
        console.log(detail);
        // setGenres(response.data.genres.map(item=>item.name).join("/"));
        })

        axios
        .get(`https://api.themoviedb.org/3/person/${profileId}/movie_credits?api_key=c06b68f2227892978c4d94fb3dcf00be&language=ko-KR`)
        .then((response) => {
        //setMovieCredit(response.data.cast.map((item, idx) => item.original_title).join("/"))
        setMovieCredit(response.data.cast)
        console.log(movies)})
    },[profileId])
  return (
    <>
        <div className='container detail'>
        <h2>{detail.name}</h2>
        <div className="detail-box">
        <div className='img-box'>
            <img src={`https://image.tmdb.org/t/p/w300/${detail.profile_path}`} alt=""></img>
            <span className='point'>{detail.vote_average}</span>
        </div>
        <div className='info'>
            <div className='title-box'>
                <h3>{detail.also_known_as}</h3>
                <p className='original-title'>{detail.original_title}</p>
                <p className='open-date'>{detail.release_date}</p>
            </div>
            <div className="summary">
                <dl>
                    <dt>known for department</dt>
                    <dd>{detail.known_for_department}</dd>
                </dl>
                <dl>
                    <dt>birthday</dt>
                    <dd>{detail.birthday}</dd>
                </dl>
               { detail.deathday &&(
               <dl>
                    <dt>deathday</dt>
                    <dd>{detail.deathday}</dd>
                </dl>)}
                <dl>
                    <dt>gender</dt>
                    <dd>{detail.gender===1?"woman":detail.gender===2?"man":"none"}</dd>
                </dl> 
                <dl>
                    <dt>place of birth</dt>
                    <dd>{detail.place_of_birth}</dd>
                </dl>
                <dl>
                    <dt>popularity</dt>
                    <dd>{detail.popularity}</dd>
                </dl> 
                {detail.homepage && (     //있으면표시하고 없으면 표시하지 마라
                    <dl>
                    <dt>homepage</dt>
                    <dd className='desc'><a href={detail.homepage} target="_blank" rel="noopener noreferrer">{detail.homepage}</a></dd>
                </dl>   )}
                <dl>
                    <dt>appearance</dt>
                    <dd>
                    <Swiper 
                        className='movie-list'
                            spaceBetween={10}
                            slidesPerView={5}
                    >
                    {
                    movies.map((item, idx)=>{
                        if(idx < 20){
                        return (
                        <SwiperSlide className='item'>
                        <MovieItem title={item.title} poster={item.poster_path} id={item.id} key = {idx}></MovieItem>
                        </SwiperSlide>
                        )}
                    })    
                    }
                    </Swiper>
                    </dd>
                </dl>    
            </div>
        </div>
        </div>
        </div>
        <div className='bg' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${detail.backdrop_path})`}}></div>
    </>
  )
}

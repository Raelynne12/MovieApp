import React from 'react'
import axios from "axios"
import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import {useParams} from "react-router-dom"

export default function NowDetail() {
    const nowId = useParams().id
    console.log(nowId)
    const [] = useState({})
  return (
    <div className='container detail'>
        <h2></h2>
    </div>
  )
}

import React from 'react'
import {useState} from "react"
import {useParams} from "react-router-dom"

export default function NowDetail() {
    const nowId = useParams().id
    console.log(nowId)
    const [] = useState({})
  return (
    <div className='container detail'>
        <h2>hello</h2>
    </div>
  )
}

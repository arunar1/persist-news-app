import React, { useContext } from 'react'
import { newsContext } from '../../hooks/UseContextNews'


export default function NewsDetails() {
    const {selectedNews,setSelectedNews}=useContext(newsContext)


    console.log(selectedNews)

  return (
    <div>NewsDetails</div>
  )
}

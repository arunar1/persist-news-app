import React, { useContext } from 'react'
import { newsContext } from '../../hooks/UseContextNews'
import Details from './Details';

export default function NewsDetails() {
    const {selectedNews,setSelectedNews}=useContext(newsContext)

   

    console.log(selectedNews)

  return (
    <div>{selectedNews!=''?(<Details news={selectedNews}/>):<h3>Please Select the news</h3>}</div>
  )
}

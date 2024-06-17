import React from 'react'
import FetchData from '../../hooks/FetchData'


const API_KEY = "pjcAWyAdnmYc1Le8js0Z6UyesqoPDX3x";
const POPULAR_URL ="https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=";
const url = `${POPULAR_URL}${API_KEY}`



export default function Home() {
    const {newsData, loading, error} =FetchData(url)
    console.log(newsData)

  return (
    <div>Home</div>
  )
}

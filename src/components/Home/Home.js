import React, { useState, useEffect } from "react";
import FetchData from "../../hooks/FetchData";
import Card from "../Card/Card";

const API_KEY = "pjcAWyAdnmYc1Le8js0Z6UyesqoPDX3x";
const POPULAR_URL =
  "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=";
const url = `${POPULAR_URL}${API_KEY}`;


export default function Home() {
  const { newsData, loading, error } = FetchData(url);
  const [filterArray, setFilterArray] = useState([]);
  const [distinctArray, setDistinctArray] = useState([]);
  const [selectedNews,setSelectedNews]=useState('')

  console.log(selectedNews)

  useEffect(() => {
    if (newsData) {
      const sections = newsData?.map((news) => news.section);
      const distinctSections = ["All", ...new Set(sections)]; 
      setDistinctArray(distinctSections);
    }
  }, [newsData]);

  const filterNews = (section) => {
    if (section === "All") {
      setFilterArray([]); 
    } else {
      const filteredNews = newsData?.filter((news) => news.section === section);
      setFilterArray(filteredNews);
    }
  };

  

  if (loading) {
    return <h1>Data Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  

  return (
    <>
      <div>
        {distinctArray?.map((item, index) => (
          <button key={index} onClick={() => filterNews(item)}>
            {item}
          </button>
        ))}
      </div>
      <div style={{justifyContent:'center',display:'flex'}} >
        {selectedNews ? (< iframe style={{ width: '80vw', height: '100vh', zIndex: 4 }} src={selectedNews} title="Selected News" />) : null}
      </div>
      <div>
        {(filterArray.length > 0 ? filterArray : newsData)?.map((news, index) => (
          <Card getValue={{selectedNews,setSelectedNews}} key={news.id} news={news} />
        ))}
      </div>
    </>
  );
}

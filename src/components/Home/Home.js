import React from "react";
import FetchData from "../../hooks/FetchData";
import Card from "../Card/Card";

const API_KEY = "pjcAWyAdnmYc1Le8js0Z6UyesqoPDX3x";
const POPULAR_URL =
  "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=";
const url = `${POPULAR_URL}${API_KEY}`;

export default function Home() {
  const { newsData, loading, error } = FetchData(url);
  console.log(newsData);

  if (loading) {
    return <h1>Data Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      {newsData?.map((news, index) => {
        console.log(index);
        return <Card key={news.id} news={news} />;
      })}
    </>
  );
}

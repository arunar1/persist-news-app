import React, { useState, useEffect } from "react";
import FetchData from "../../hooks/FetchData";
import Card from "../Card/Card";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../../App.css'
import Container from 'react-bootstrap/Container';
import { Filter } from "react-bootstrap-icons";

const url = `${process.env.REACT_APP_POPULAR_URL}${process.env.REACT_APP_API_KEY}`;

export default function Home() {
  const { newsData, loading, error } = FetchData(url);
  const [filterArray, setFilterArray] = useState([]);
  const [distinctArray, setDistinctArray] = useState([]);
  const [activeBtn,setActiveBtn]=useState('')

  

  useEffect(() => {
    if (newsData) {
      const sections = newsData?.map((news) => news.section);
      const distinctSections = ["All", ...new Set(sections)]; 
      setDistinctArray(distinctSections);
    }
  }, [newsData]);

  const filterNews = (section) => {
    setActiveBtn(section)
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
    <Navbar expand="lg" className="header-nav-color">
      <Container className="container">
      
        <Navbar.Toggle aria-controls="navbarScroll" ><Filter/></Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto navbar-custome"
            style={{ maxHeight: '150px' }}
            navbarScroll
          >
            <Nav.Link href="">
            <div>
        {distinctArray?.map((item, index) => (
          <button key={index} onClick={() => filterNews(item)} type="button"  className="btn btn-primary"   style={{ marginRight: '1rem', marginTop: '.25rem', backgroundColor: item === activeBtn ? 'red' : 'transparent',color: item === activeBtn ? 'white' : 'black' }} data-toggle="button" aria-pressed="false" >
          {item}
        </button>
        ))}
      </div>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <div className="container">
      <div className="custome-card">
        {(filterArray.length > 0 ? filterArray : newsData)?.map((news, index) => (
          <Card  key={news.id} news={news} />
        ))}
      </div>
      </div>
    </>
  );
}

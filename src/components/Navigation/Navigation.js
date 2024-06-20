import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import { UseContextNews } from "../../hooks/UseContextNews";
import NewsDetails from "../NewsDetails/NewsDetails";
import Header from "../Home/Header";
import Contact from "../Contact/Contact";
export default function Navigation() {
  return (
    <div>
      <Header/>
      <UseContextNews>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route  path="/details" element={<NewsDetails />}></Route>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </UseContextNews>
    </div>
  );
}

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import { UseContextNews } from "../../hooks/UseContextNews";
import NewsDetails from "../NewsDetails/NewsDetails";
export default function Navigation() {
  return (
    <div>
      <UseContextNews>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route  path="/details" element={<NewsDetails />}></Route>
            <Route exact path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </UseContextNews>
    </div>
  );
}

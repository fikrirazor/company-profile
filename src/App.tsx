import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
/* import About from "./pages/About";
import BlogList from "./pages/BlogList";
import CreateBlog from "./pages/CreateBlog";
import Services from "./pages/Services";
import Teams from "./pages/Teams"; */

function App() {

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
{/*         <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/teams" element={<Teams />} /> */}
      </Routes>
    </React.Fragment>
  );
}

export default App;

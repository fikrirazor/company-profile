import React from "react";
import { Routes, Route, Navigate } from "react-router";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import BlogList from "./pages/BlogList";
import CreateBlog from "./pages/CreateBlog";
import Services from "./pages/Services";
import Teams from "./pages/Teams";
import Login from "@/pages/Login"
import { useAuthStore } from "./store/authStore";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
function App() {
  return (
    <React.Fragment>
      <Header/>
      <main className="flex-grow">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<BlogList />} />

        <Route path="/teams" element={<Teams />} />

        <Route
          path="/create-blog"
          element={
            useAuthStore.getState().isAuth ? (
              <CreateBlog />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;

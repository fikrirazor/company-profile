import React, { useEffect } from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import BlogList from "./pages/BlogList";
import CreateBlog from "./pages/CreateBlog";
import Services from "./pages/Services";
import Teams from "./pages/Teams";
import Login from "@/pages/Login";
import { useUserStore } from "@/store/user-store";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProtectedRoute from "@/components/ProtectedRoute";

function App() {
  const { keeplogin } = useUserStore();

  useEffect(() => {
    keeplogin();
  }, [keeplogin]);

  return (
    <React.Fragment>
      <Header />
      <main className="flex-grow font-sans">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/teams" element={<Teams />} />

          <Route
            path="/create-blog"
            element={
              <ProtectedRoute>
                <CreateBlog />
              </ProtectedRoute>
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

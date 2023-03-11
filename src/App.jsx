// Importing necessary modules and components
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/common/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/common/footer/Footer";
import About from "./components/about/About";
import CourseHome from "./components/allCourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blogs from "./components/blog/Blogs";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import ScrollToTop from "./components/common/ScrollToTop";

import SignUp from "./components/signup-login/Signup";
import Login from "./components/signup-login/Login";
import Form from "./components/forms/Form";


function App() {
  // Declaring state variables with useState Hook
  const [blogs, setBlogs] = useState([]);
  // const [categories, setCategories] = useState([]);
  // const [search, setSearch] = useState([]);

  // UseEffect Hook to get all blogs
  // useEffect(() => {
  //   fetch("http://localhost:9292/blogs")
  //     .then((r) => r.json())
  //     .then((blogs) => setBlogs(blogs));
  //   console.log("mount once");
  // }, []);

  // UseEffect Hook to get all categories
  // useEffect(() => {
  //   fetch("http://localhost:9292/categories")
  //     .then((r) => r.json())
  //     .then((categories) => setCategories(categories));
  // }, []);

  // Function to handle adding a new blog to the blogs state array
  function handleAddBlog(newBlog) {
    setBlogs([...blogs, newBlog]);
    console.log(blogs);
  }

  // App component returning JSX elements to display on the page
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/courses" element={<CourseHome />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/journal" element={<Blogs />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/register" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />

        <Route
          exact
          path="/blog/add"
          element={<Form onAddBlog={handleAddBlog} />}
          name="add-blog"
        />

      </Routes>
      <Footer />
    </>
  );
}

// Exporting App component as the default export
export default App;

/*This code imports necessary modules and components to create a React application. The useState Hook is used to create state variables that will be used later.

The useEffect Hook is commented out, but it is an asynchronous function that fetches all the blogs and categories data from a localhost server.

The handleAddBlog function is a helper function that adds a new blog post to the blogs state array when called.

The App component is a function that returns a group of JSX elements that make up the application. It includes the header, scroll-to-top functionality, and Routes for the application's different pages.

The exported App component is the default export for this module.*/

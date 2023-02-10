import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/common/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/common/footer/Footer";
import About from "./components/about/About";
import CourseHome from "./components/allCourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";

function App() {
  return (
    // <>
    //   <Header />
    //   <Home />
    //   <Footer />
    // </>
    <>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/courses" element={<CourseHome/>} />
          <Route exact path="/team" element={<Team/>} />
          <Route exact path="/pricing" element={<Pricing/>} />
          <Route exact path="/journal" element={<Blog/>} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;

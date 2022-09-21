import React from 'react'
import Header from './components/common/heading/Header'
import { Routes, Route } from "react-router-dom";
import About from './components/about/About';
import Home from './components/home/Home';
import CourseHome from './components/allcourses/CourseHome';
import Team from './components/team/Team';
import Pricing from './components/pricing/Pricing';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/common/footer/Footer';



const App = () => {
  return (
    <>
     <Header/>
    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/allcourses' element={<CourseHome/>}></Route>
    <Route path='/team' element={<Team/>}></Route>
    <Route path='/pricing' element={<Pricing/>}></Route>
    <Route path='/journal' element={<Blog/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    <Footer />
    </>
  
  )
}

export default App;
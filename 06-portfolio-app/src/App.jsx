import React from 'react'
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router'
import Home from './screens/Home'
import About from './screens/About'
import Contact from './screens/Contact'
import Login from './screens/Login'
import Project from'./screens/Project'
import Skills from './screens/Skills'
 const credentials = {
  email :'jayeshpatiledu@gmail.com',
  password : 'jayesh1234'
}


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login credentials={credentials} />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes>
</>
  )
}




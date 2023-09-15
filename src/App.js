import React from 'react'
import {Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import Room from "./Components/Room";
import About from "./Components/About";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/room/:roomID' element={<Room />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </>
  )
}

export default App
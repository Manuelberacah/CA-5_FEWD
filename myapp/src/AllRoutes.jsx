import React, { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import Home from './components/Home'
import Register from './components/Register'
import "./App.css"


function AllRoutes() {

    const [user, setUser] = useState("")
  return (
        <Routes>
            <Route path="/" element={<Home user = {user} />}></Route>
            <Route path="/Register" element={<Register setUser={setUser} />}></Route>
        </Routes>
  )
}

export default AllRoutes

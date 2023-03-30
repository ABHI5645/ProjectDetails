import React from 'react'
import {
    Routes,
    Route,
    BrowserRouter,
    Outlet,
    Navigate,
  } from "react-router-dom";
  import {useContext} from "react";
 

import LandingPage from '../LandingPage';
import Login from '../Login'
import Dashboard from '../Dashboard';
import Header from '../LandingPage/Header';
function Navs() {
 
  return (
    <BrowserRouter>
       <Header/>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}></Route>

        </Routes>


    </BrowserRouter>


  )
}

export default Navs

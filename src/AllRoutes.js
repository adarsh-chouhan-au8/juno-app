import React from 'react'
import {Routes,Route,useLocation} from "react-router"
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import SignupByEmail from './pages/SignupByEmail/SignupByEmail'


const AllRoutes = () => {
  return (
   <Routes>
    <Route exact path="/" element={<Login/>}/>
    <Route exact path="/signup" element={<Signup/>}/>
    <Route exact path="/signupbyemail" element={<SignupByEmail/>}/>
    <Route exact path="/forgotpassword" element={<ForgotPassword/>}/>

   </Routes>
  )
}

export default AllRoutes
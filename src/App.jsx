import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LandingPage from './Components/pages/LandingPage'
import Register from './Components/pages/Register'
import Login from './Components/pages/Login'
import UserDashboard from './users/user/UserDashboard'
const App = () => {
  return (
   
      <Router>
        <Routes>
          <Route path='/' element= {<LandingPage/>}/>

          <Route path='/register' element= {<Register/>}/>

          <Route path='/login' element = {<Login/>}/>

          <Route path='/user' element = {<UserDashboard/>}/>
          
        </Routes>
      </Router>
    
  )
}

export default App
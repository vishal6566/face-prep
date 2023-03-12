import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from '../components/Home'
import Login from '../components/Login'
import PrivateRoute from './PrivateRoute'
const AllRoutes = () => {
  return (
    <div>
             <Routes >

      <Route path='/' element={<Login />}></Route>
      

      <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        ></Route>
    </Routes>
    </div>
  )
}

export default AllRoutes
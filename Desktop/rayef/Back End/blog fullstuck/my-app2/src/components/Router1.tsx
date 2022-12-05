import React from 'react'
import {Routes,Route}from 'react-router-dom';
import Login from '../Pages/Login';
import ProtectedRoute from './ProtectedRoute';
import Signup from '../Pages/Signup';
import BlogsPage from '../Pages/BlogsPage';


function Router1() {
  return (
<>
<Routes>
    
<Route path="/Login" element={<Login/>}/>
<Route path="/Signup" element={<Signup/>}/>

<Route element={<ProtectedRoute />}>
            <Route path='/' element={<BlogsPage/>} />
          </Route>

</Routes>



</>
  )
}

export default Router1
import React from 'react'
import {Routes,Route}from 'react-router-dom';
import { LoginPage } from '../Pages/LoginPage';
import ProtectedRoute from './ProtectedRoute';
import BlogsPage from '../Pages/BlogsPage';
import { RegisterPage } from '../Pages/RegisterPage';


function Router1() {
  return (
<>
<Routes>
<Route path="/Login" element={<LoginPage/>}/>
<Route path="/Register" element={<RegisterPage/>}/>

<Route element={<ProtectedRoute />}>
<Route path='/' element={<BlogsPage/>} />
</Route>

</Routes>



</>
  )
}

export default Router1
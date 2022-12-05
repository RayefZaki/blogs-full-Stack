import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Router1 from "./components/Router1"
import {Routes,Route}from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import BlogsPage from "./Pages/BlogsPage"



export const App = () => (

  <ChakraProvider theme={theme}>

{/* <Router1/> */}

<Routes>
    
<Route path="/Login" element={<Login/>}/>
<Route path="/Signup" element={<Signup/>}/>

<Route element={<ProtectedRoute />}>
            <Route path='/' element={<BlogsPage/>} />
          </Route>

</Routes>


   {/* <Login />
   <Signup/> */}
  </ChakraProvider>
)

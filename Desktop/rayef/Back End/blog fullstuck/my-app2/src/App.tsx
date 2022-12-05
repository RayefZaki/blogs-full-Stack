import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Router1 from "./components/Router1"
import {Routes,Route,BrowserRouter}from 'react-router-dom';
import { RegisterPage } from "./Pages/RegisterPage";
import LoginForm from "./components/Forms/LoginForm";



export const App = () => (
  <BrowserRouter>
  <ChakraProvider theme={theme}>

<Router1/>
  </ChakraProvider>
  </BrowserRouter>
)

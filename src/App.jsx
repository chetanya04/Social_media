import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Header from './Components/Header'
import React from 'react'
import Login from "./Components/login"
import Main from './Components/RegisterPage'
import Post from './Components/Post'
import { useState } from 'react'
export default function App() {
  const[username,setUsername]=useState('');
  
  const inputChange= (username)=>{
    setUsername(username);
  }
  return(
    <>  
    <BrowserRouter>
    <Header/>
    
    <Routes>  
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element= {<Main inputChange={inputChange}/>}/>
      <Route path='/post' element={<Post username={username}/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
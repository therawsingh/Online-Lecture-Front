import { useState } from 'react'
import { Login } from './components/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Admin } from './components/Admin';
import { Insrtuctor } from './components/Insrtuctor';

function App() {

  return (
    
    <Router>
      <div>
        <Routes>
        <Route exact path="/" element={<Login/>}/>
          <Route exact path="/admin" element={<Admin/>}/>
          <Route exact path="/instructor" element={<Insrtuctor/>}/>
        </Routes>
      </div>
    </Router>

  )
}

export default App

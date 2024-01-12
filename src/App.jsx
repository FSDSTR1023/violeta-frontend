import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListAllUsers from './components/Userslist'

function App() {

  return (
    <Router>
      <div className="card">
        <Routes>
        <Route path="/" element={<ListAllUsers />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

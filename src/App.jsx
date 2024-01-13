import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ListAllUsers from './components/Userslist'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div>
      <Navbar />
      <main>
        <Router>
          <div className="card">
            <Routes>
            <Route path="/" element={<ListAllUsers />} />
            </Routes>
          </div>
        </Router>
      </main>
      <Footer />
    </div>
    </>
    
  )
}

export default App

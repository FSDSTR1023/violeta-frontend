import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListAllUsers from './components/Userslist'

function App() {

  return (
    <>
    <div>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <p className="flex items-center justify-center" href="#">
          <a className="h-6 w-6">Trailnest Logo</a>
        </p>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Routes
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </a>
        </nav>
      </header>
      <main>
        <Router>
      <div className="card">
        <Routes>
        <Route path="/" element={<ListAllUsers />} />
        </Routes>
      </div>
    </Router>
      </main>
      
    </div>
    
    </>
    
  )
}

export default App

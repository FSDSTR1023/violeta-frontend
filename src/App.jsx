import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ListAllUsers from './components/Userslist';
import ListAllRutas from './components/Rutaslist';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <div>
      <Navbar />
      <main>
        <Router>
          <div className="card pb-8">
            <Routes>
              <Route path="/" element={<ListAllUsers />} />
            </Routes>
            <Routes>
              <Route path="/" element={<ListAllRutas />} />
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

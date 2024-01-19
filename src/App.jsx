import React from 'react';
import {BrowserRouter, Link, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import ListAllUsers from './components/Userslist';
import ListAllRutas from './components/Rutaslist';
import LogIn from './components/LogIn';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <main>
            <div className="card pb-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<ListAllUsers />} />
                <Route path="/rutas" element={<ListAllRutas />} />
                <Route path="/login" element={<LogIn />} />
              </Routes>
            </div>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
    
  )
}

export default App

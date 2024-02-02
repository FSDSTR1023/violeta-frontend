import React from 'react';
import {BrowserRouter, Link, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import ListAllUsers from './components/Userslist';
import ListAllRutas from './components/Rutaslist';
import CreateRuta from './components/CreateRuta';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import RutaRandom from './components/RutaRandom';
import RutasPorZona from './components/RutasPorZona.jsx';
import RutasPorTiempo from './components/RutasPorTiempo';
import RutasMejorValoradas from './components/RutasMejorValoradas';

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
                <Route path="/createruta" element={<CreateRuta />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/ruta-random" element={<RutaRandom />} />
                <Route path="/rutas-por-zona" element={<RutasPorZona />} />
                <Route path="/rutas-por-tiempo" element={<RutasPorTiempo />} />
                <Route path="/rutas-mejor-valoradas" element= {<RutasMejorValoradas />} />
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

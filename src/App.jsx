import React from 'react';
import {BrowserRouter, Link, Routes, Route} from "react-router-dom";
import { SessionProvider } from './contexts/SessionContext.jsx';
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
import RutaPorTiempo from './components/RutasPorTiempo';
import RutasMejorValoradas from './components/RutasMejorValoradas';
import UserProfile from './components/Profile';
import OwnRutas from './components/OwnRutas';
import UpdateRuta from './components/UpdateRuta';
import { ContactUs } from './components/contactUs.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <SessionProvider>
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
                <Route path="/ruta-por-tiempo" element={<RutaPorTiempo />} />
                <Route path="/rutas-mejor-valoradas" element= {<RutasMejorValoradas />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/myrutas" element={<OwnRutas />} />
                <Route path="/update-ruta/:rutaId" element={<UpdateRuta />}/>
              </Routes>
            </div>
          </main>
          <Footer />
          <ContactUs />
        </SessionProvider>
      </BrowserRouter>
    </>
    
  )
}

export default App

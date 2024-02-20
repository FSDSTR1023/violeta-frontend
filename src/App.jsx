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
import RutaProfile from './components/RutaProfile.jsx';
import { ContactUs } from './components/contactUs.jsx';
import ImageCarousel from './components/ImageCarousel.jsx';


const images = [
  'https://images.unsplash.com/photo-1595586551885-12db6bd260eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1682687220199-d0124f48f95b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];


function App() {

  return (
    <>
      <BrowserRouter>
        <SessionProvider>
          <Navbar />
          <ImageCarousel images={images} />
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
                <Route path="/ruta/:rutaId" element={<RutaProfile />}/>
                <Route path="/contact" element={<ContactUs />}/>
              </Routes>
            </div>
          </main>
          <Footer />
        </SessionProvider>
      </BrowserRouter>
    </>
    
  )
}

export default App

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
import { ContactUs } from './components/ContactUs.jsx';
import { ThankYouPage } from './components/ThankYouPage.jsx';
import  SobreNosotros  from './components/SobreNosotros.jsx';
import  NivelUsuario  from './components/NivelUsuario.jsx';
import { Forgot } from './components/OlvideContraseña.jsx';

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
                <Route path="/ruta/:rutaId" element={<RutaProfile />}/>
                <Route path="/contact" element={<ContactUs />}/>
                <Route path="/thank-you" element={<ThankYouPage />}/>
                <Route path="/sobrenosotros" element={<SobreNosotros />}/>
                <Route path="/nivelusuario" element={<NivelUsuario />}/>
                <Route path="/olvide-contraseña" element={<Forgot />}/>

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

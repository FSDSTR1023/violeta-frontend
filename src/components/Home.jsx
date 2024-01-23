import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/Home.css'
const Home = () => {
  return (
    <nav>
      <div className='rutas-home'>
        <div className='rutaRandom'>
          <Link to="/ruta-random" className='ruta'>Ruta Random</Link>
        </div>
        <div className='zonaTiempo'>
          <div className='rutaZona'>
            <Link to="/rutas-por-zona" className='ruta'>Rutas por Zona</Link>
          </div>
          <div className='rutaTiempo'>
            <Link to="/rutas-por-tiempo" className='ruta'>Rutas por Tiempo</Link>
          </div>
        </div>
        <div className='ruta-valor'>
          <Link to="/rutas-mejor-valoradas" className='ruta'>Rutas Mejor Valoradas</Link>
        </div>

      </div>
    </nav>
  );
}

export default Home;

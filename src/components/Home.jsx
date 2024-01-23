import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <nav>
      <div>
        
        <Link to="/ruta-random">Ruta Random</Link>

        <Link to="/rutas-por-zona">Rutas por Zona</Link>

        <Link to="/rutas-por-tiempo">Rutas por Tiempo</Link>

        <Link to="/rutas-mejor-valoradas">Rutas Mejor Valoradas</Link>

      </div>
    </nav>
  );
}

export default Home;

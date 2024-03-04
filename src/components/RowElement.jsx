import React from 'react';
import { Link } from 'react-router-dom';


const ElementoFila = ({ imagenSrc, nombre, ciudad, rating, kilometros, dificultad, link }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex flex-col items-start justify-start px-1">
        <div className="w-full rounded-lg overflow-hidden mb-2">
        <Link to={link}>
            <img src={imagenSrc} alt={nombre}  className="object-cover transform hover:scale-110 transition-transform duration-200 ease-in-out" />
        </Link>        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-left">{nombre}</span>
          <span className="text-base text-left">{ciudad}</span>
          <span className="text-left">{rating} ⭐</span>
          <div className="flex flex-row items-center text-sm	">
            <span className="italic text-left">{dificultad}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementoFila;

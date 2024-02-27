import React from 'react';

export const ThankYouPage = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-600 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-center">
        <h2 className="text-2xl mb-4">¡Gracias por ponerte en contacto con nosotros!</h2>
        <p className="text-lg mb-4">Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto contigo lo antes posible.</p>
        <p className="text-sm mb-4">Si tienes alguna pregunta urgente o necesitas asistencia inmediata, por favor, no dudes en llamarnos al <strong>686135998</strong> o enviarnos un correo electrónico a <strong>trailnest1@gmail.com.</strong></p>
        <p className="text-sm"><strong>Gracias de nuevo por contactarnos.</strong></p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => window.location.href = '/'}>Cerrar</button>
      </div>
    </div>
  );
};


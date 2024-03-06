import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

export const ContactUs = () => {
  const refForm = useRef();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = refForm.current.checkValidity();
    if (!isValid) {
      setError('Por favor, rellene todos los campos obligatorios.');
      return;
    }

    emailjs
      .sendForm('service_yyq9vbk', 'template_onieool', refForm.current, 'iz2QV_NpyAspX1VXj')
      .then((result) => {
        console.log(result.text);
        setError('');
        navigate('/thank-you');
      })
      .catch((error) => {
        console.error(error);
        setError('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
      });
  };

  return (
    <div className="container mx-auto py-8 flex flex-col lg:flex-row items-center justify-center">
      
      <div className="lg:w-1/2 lg:mr-16">
      <h2 className="text-3xl font-bold mb-4 ">Contacta con nosotros</h2>
      
      <p className="text-lg mt-10">Descubre nuevas rutas y aventuras con TrailNest. </p>
      <p className='mt-5'>¡Contáctanos y comienza tu próxima expedición hoy mismo!</p>
      
      <div className="flex items-center mt-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
        <p className="text-lg text-lime-700">trailnest1@gmail.com</p>
      </div>
      
      <div className="flex items-center mt-5">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
      <p className="text-lg text-lime-700">654374213</p>
  </div>
</div>
      <div className="lg:w-1/2 flex flex-col items-center justify-center">
        
        <form ref={refForm} onSubmit={handleSubmit} className="bg-white rounded px-8 pt-6 pb-8 mb-4 w-full lg:w-3/4">
          <h2 className="text-3xl font-bold mb-8">Rellene este formulario</h2>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 symbol-required" htmlFor="username">
              Nombre
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name="username"
              type="text"
              placeholder="Ej: Carla Delgado"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 symbol-required" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Ej: carladm@gmail.com"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 symbol-required" htmlFor="message">
              Mensaje
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              maxLength="500"
              placeholder="Escribe tu mensaje"
              name="message"
              id="message"
              rows="5"
            ></textarea>
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="flex items-center justify-center">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
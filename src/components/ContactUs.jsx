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
    <form ref={refForm} onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="header-contact">
        <h2 className="text-xl mb-4">Ponte en contacto con TrailNest</h2>
        <p className="text-xs text-gray-600 mb-4">Rellene este formulario</p>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2 symbol-required" htmlFor="username">
          Nombre
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          name="username"
          type="text"
          placeholder="Ej: Peter Parker"
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
          placeholder="Ej: spiderman@gmail.com"
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
  );
};

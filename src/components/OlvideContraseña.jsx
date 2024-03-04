import React, { Component } from 'react';

export class Forgot extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="flex justify-center items-center h-screen bg-zinc-200">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3"
          onSubmit={this.handleSubmit}
        >
          <h3 className="text-2xl font-bold mb-6">Olvidé mi contraseña</h3>
          <p>Escribe tu correo electrónico para recibir ayuda con el inicio de sesión.</p>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Correo electrónico
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="ejemplo@gmail.com"
              onChange={(e) => (this.email = e.target.value)}
            />
          </div>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    );
  }
}


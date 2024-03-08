import React from 'react';
import { Link } from 'react-router-dom';
const NivelUsuario = () => {
    return (
        <section className="p-4 md:p-8  ">
            <div className="py-8 max-w-screen-xl lg:py-16 mx-auto">
                <div className="mx-auto max-w-3xl text-center pb-12 md:pb-20">
                    <h2 className="text-3xl font-bold sm:text-4xl mb-4">Niveles de Usuarios</h2>
                    <p className="text-xl">Ayúdanos a crecer colaborando con nosotros</p>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">


                {/* Plan 1  */}
                <div className="flex flex-col p-6 mx-auto max-w-md text-center rounded-box shadow-xl xl:p-8 border border-base-300 shadow-primary/10 border-primary/10 transition hover:border-primary-focus/20 hover:shadow-primary-focus/20">
                    <h3 className="mb-4 text-2xl font-semibold border-b-2 border-black pb-2">Principiante</h3>
                    <div className="flex justify-center items-baseline my-1 h-10">
                        <p className="font-light sm:text-lg">No se requiere ningún tipo de pago</p>
                    </div>
                    <div className="flex justify-center items-baseline my-1 h-10 ">
                        <p className="mb-4 text-2xl font-semibold text-black">Nivel 1: Principiante (0 a 5 rutas y 0 imágenes)</p>
                    </div>
                    <div className="flex justify-center items-baseline my-9">
                        <span className="mr-2 text-3xl font-extrabold">Ventajas</span>
                        <span>/mensuales</span>
                    </div>
                    <ul role="list" className="mb-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">
                            <svg className="w-6 h-6 text-green-500" aria-hidden="true" xmlns="" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                            </svg>
                            <span className="text-base-content/80">Acceso básico a todas las funcionalidades de la plataforma.</span>
                        </li>
                        
                    </ul>
                    <div className="flex flex-col justify-between h-full"> 
                        <div></div> 
                        <Link to="/createruta"><button className="w-full font-bold gap-2 shadow uppercase p-2 bg-teal-500 text-white">Empezar</button></Link>
                    </div>
                </div>



                    {/* Plan 2 */}
                    <div className="flex flex-col p-6 mx-auto max-w-md text-center rounded-box shadow-xl xl:p-8 border border-base-300 shadow-primary/10 border-primary/10 transition hover:border-primary-focus/20 hover:shadow-primary-focus/20">
                        <h3 className="mb-4 text-2xl font-semibold border-b-2 border-black pb-2">Avanzado </h3>
                        <div className="flex justify-center items-baseline my-1 h-10">
                            <p className="font-light sm:text-lg">No se requiere ningún tipo de pago</p>
                        </div>
                        <div className="flex justify-center items-baseline my-1 h-10">
                            <p className="mb-4 text-2xl font-semibold text-black">Nivel 2: Avanzado (6 a 15 rutas y al menos 5 imágenes)</p>
                        </div>
                        <div className="flex justify-center items-baseline my-9">
                            <span className="mr-2 text-3xl font-extrabold">Ventajas</span>
                            <span>/mensuales</span>
                        </div>
                        <ul role="list" className="mb-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">
                                <svg className="w-6 h-6 text-green-500" aria-hidden="true" xmlns="" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                                </svg>
                                <span className="text-base-content/80">Acceso básico a todas las funcionalidades de la plataforma.</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="w-10 h-6 text-green-500" aria-hidden="true" xmlns="" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                                </svg>
                                <span className="text-base-content/80">Acceso a funciones premium como filtrado avanzado de rutas y prioridad en la visualización de rutas.</span>
                            </li>
                            
                            </ul>
                    <div className="flex flex-col justify-between h-full"> 
                        <Link to="/createruta"><button className="w-full font-bold gap-2 shadow uppercase p-2 bg-teal-500 text-white">Empezar</button></Link>
                    </div>
                </div>


                    {/* Plan 3 */}
                    <div className="flex flex-col p-6 mx-auto max-w-md text-center rounded-box shadow-xl xl:p-8 border border-base-300 shadow-primary/10 border-primary/10 transition hover:border-primary-focus/20 hover:shadow-primary-focus/20">
                        <h3 className="mb-4 text-2xl font-semibold border-b-2 border-black pb-2">Experto </h3>
                        <div className="flex justify-center items-baseline my-1 h-10">
                            <p className="font-light sm:text-lg">No se requiere ningún tipo de pago</p>
                        </div>
                        <div className="flex justify-center items-baseline my-1 h-10">
                            <p className="mb-4 text-2xl font-semibold text-black">Nivel 3: Experto (más de 15 rutas y al menos 15 imágenes)</p>
                        </div>
                        <div className="flex justify-center items-baseline my-9">
                            <span className="mr-2 text-3xl font-extrabold">Ventajas</span>
                            <span>/mensuales</span>
                        </div>
                        <ul role="list" className="mb-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">
                                <svg className="w-6 h-6 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                                </svg>
                                <span className="text-base-content/80">Acceso básico a todas las funcionalidades de la plataforma.</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="w-10 h-6 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                                </svg>
                                <span className="text-base-content/80">Acceso a funciones premium como filtrado avanzado de rutas y prioridad en la visualización de rutas.</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="w-10 h-6 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path>
                                </svg>
                                <span className="text-base-content/80">Acceso exclusivo a eventos especiales, descuentos en servicios relacionados con rutas, etc.</span>
                            </li>

                            
                           
                        </ul>
                        <Link to="/createruta"><button className="w-full font-bold gap-2 shadow uppercase p-2 bg-teal-500 text-white">Empezar</button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NivelUsuario;

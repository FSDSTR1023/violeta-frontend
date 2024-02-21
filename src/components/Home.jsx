import React from 'react';
import { Link } from 'react-router-dom';
import TrailNestPhoto from '../img/TrailNest-logos_black.png'
import ImageCarousel from './ImageCarousel';
const images = [
  'https://images.unsplash.com/photo-1595586551885-12db6bd260eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1682687220199-d0124f48f95b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const Home = () => {
  return (
<>
<ImageCarousel images={images} />
      <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="-mt-40 mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  <img src={TrailNestPhoto} alt="TrailNest Logo" className="mx-auto h-auto max-w-full" style={{ maxWidth: "400px" }} />
                </h2>
                <p className="-mt-20 text-base text-body-color dark:text-dark-6">
                Bienvenido a nuestra plataforma de rutas, tu guía virtual para descubrir destinos fascinantes y actividades emocionantes en cada paso. ¡Sumérgete en la diversidad de experiencias que ofrecemos y haz de cada viaje una historia única para contar!
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-row">
          <BlogCard
          cardTitle="Rutas Random"
          cardDescription="Embárcate en una experiencia sorpresa con nuestras Rutas Random, donde cada camino es una nueva aventura por descubrir."
          image="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          to="/ruta-random"
         />
          <BlogCard
          cardTitle="Rutas por Tiempo"
          cardDescription="Planifica tu viaje a la perfección con nuestras Rutas por Tiempo, personalizadas para adaptarse a cualquier horario y asegurarte una experiencia inolvidable."
          image="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg"
          to="/ruta-por-tiempo"
          />
          <BlogCard
          cardTitle="Rutas por Zona"
          cardDescription="Explora las maravillas locales con nuestras Rutas por Zona, diseñadas para sumergirte en la riqueza cultural y natural de cada ubicación única."
          image="https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          to="/rutas-por-zona"
          />
         
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

const BlogCard = ({ image, date, cardTitle, cardDescription, to }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="mb-10 w-full flex flex-col items-center">
        <div className="mb-8 overflow-hidden rounded">
          <img src={image} alt="" className="w-full" />
        </div>
        <div className="text-center">
          {date && (
            <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-xs font-semibold leading-loose text-white">
              {date}
            </span>
          )}
          <h3>
            <Link
              to={to}
              className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
            >
              {cardTitle}
            </Link>
          </h3>
          <p className="text-base text-body-color dark:text-dark-6">
            {cardDescription}
          </p>
        </div>
      </div>
    </div>
  );
};
  



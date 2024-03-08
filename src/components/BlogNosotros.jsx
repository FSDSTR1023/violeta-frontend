import React from 'react';
import backgroundImage from '../img/rutafoto.jpg'


const BlogNosotros = () => {
  return (
    <div className="">
      <div
        className="bg-cover bg-center text-center overflow-hidden"
        style={{
          minHeight: '500px',
          backgroundImage:`url(${backgroundImage})`
        }}
        title="Forest"
      ></div>
      <div className="max-w-3xl mx-auto">
        <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
            <h1 className="text-gray-900 font-bold text-3xl mb-2">
            ¿Quiénes Somos?
            </h1>
            
            <p className="text-base leading-8 my-5">
            Somos una comunidad apasionada por la naturaleza y las aventuras al aire libre. En Trail Nest, nos dedicamos a proporcionar a los amantes de la naturaleza una plataforma donde puedan descubrir nuevas zonas, explorar rutas creadas por otros usuarios y conectar con la belleza del mundo natural que nos rodea.
            </p>

            <h3 className="text-2xl font-bold my-5">Nuestra Misión y Valores</h3>

            <p className="text-base leading-8 my-5">
            En Trail Nest, nuestra misión es promover el amor y el respeto por la naturaleza. Nos comprometemos a inspirar a las personas a descubrir la belleza del mundo natural y a cuidarlo para las generaciones futuras. Nuestros valores fundamentales incluyen la sostenibilidad, el respeto por el medio ambiente y la promoción del ecoturismo responsable.
            </p>

            <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-green-600 ">
            Desde el diseño de nuestra plataforma hasta nuestras iniciativas de sensibilización, buscamos minimizar nuestro impacto en el planeta y crear un mundo más verde y saludable para todos.
            </blockquote>
            <h3 className="text-2xl font-bold my-5">Promoción del Ecoturismo</h3>
            <p className="text-base leading-8 my-5">
            En Trail Nest, creemos en el poder transformador del ecoturismo. Animamos a nuestros usuarios a explorar la naturaleza de manera responsable y a disfrutar de experiencias auténticas y significativas. Nos comprometemos a promover destinos sostenibles y a apoyar a las comunidades locales en la conservación de sus entornos naturales.
            </p>
            <h3 className="text-2xl font-bold my-5">Participación de la Comunidad</h3>
            <p className="text-base leading-8 my-5">
            La comunidad es el corazón de Trail Nest. Invitamos a todos los amantes de la naturaleza a unirse a nuestra plataforma, compartir sus experiencias y contribuir a nuestra creciente colección de rutas. Juntos, podemos crear un mundo más conectado, consciente y comprometido con la conservación del medio ambiente.

            Únete a nosotros y comienza tu próxima aventura hoy mismo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNosotros;

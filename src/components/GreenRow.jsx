import arbol from '../assets/arbol.png';
import salve_planeta from '../assets/salve_planeta.png';
import huella from '../assets/huella.png';



export default function GreenRow() {
    return (
      <div className='p-4 bg-green-700 py-8'>
        <div className='flex flex-row px-8 gap-8 text-align-center'>
          <div>
            <img src={arbol} alt="" className='text-left w-20 h-20 tex-center mb-2' />
            <h3 className='text-3xl font-medium pb-2 text-white'>One Tree Planted</h3>
            <p className='text-lg text-white'>Nuestra empresa TrailNest destina parte de cada suscripción a la protección de los espacios naturales, que consideramos de gran valor.</p>
          </div>
          <div>
            <img src={salve_planeta} alt="" className='w-20 h-20 ml-6 mb-2' />
            <h3 className='text-3xl font-medium pb-2 text-white'>Preservando la naturaleza con TrailNest</h3>
            <p className='text-lg text-white'>En TrailNest, celebramos nuevas inscripciones de miembros y aniversarios de empleados mediante donaciones a One Tree Planted.</p>
          </div>
          <div>
             <img src={huella} alt="" className='w-20 h-20 ml-6 mb-2' />
             <h3 className='text-3xl font-medium pb-2 text-white '>Leave No Trac</h3>
             <p className='text-lg text-white'>TrailNest está comprometido con la sostenibilidad y promueve prácticas sostenibles al aire libre con programas como Leave No Trace.</p>
          </div>
        </div>
       <a href="https://onetreeplanted.org/" target="_blank"> <button className='font-medium p-2 rounded-full bg-green-400 text-black hover:bg-green-500 m-8 px-6 py-3 hover:shadow-2xl'>Regístrate y cuida del Planeta</button>
       </a>
</div>
    );
  }
  
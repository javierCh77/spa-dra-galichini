import {useState} from 'react'
import { Link } from 'react-router-dom';

//import icon
import flor from '../assets/flor.png'



const NavBar = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
  
  
    <nav className="bg-neutral-600 w-full top-0 relative ">
          <div className="relative flex h-16 items-center justify-between">
   
        {/* Menú Hamburguesa para dispositivos pequeños */}
        <div className="container absolute inset-y-0 left-0 flex items-center sm:hidden ">
        
        
          {/* <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-white"
          > */}
            <button type="button"   onClick={toggleMenu} className="ml-3 relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 bg-neutral-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <Link to='/'><img src={flor} className='ml-32' width={50} alt=''></img></Link>
         
        </div>

        {/* Menú de Navegación para pantallas grandes */}
        <div className="hidden lg:flex space-x-6  w-full text-center justify-center   ">
        <Link to="/" class="text-lg  font-semibold leading-6  text-white  hover:font-bold ">
              Inicio
            </Link>
            <Link to="/turnos" class="text-lg font-semibold leading-6 text-white hover:font-bold ">
              Turnos
            </Link>
            <Link to="/productos" class="text-lg font-semibold leading-6 text-white hover:font-bold ">
              Productos
            </Link>
            <Link to="/servicios"  class="flex gap-2 text-lg font-semibold leading-6 text-white   hover:font-bold ">
              Servicios
            </Link>
            <Link to="/contacto"  class="flex gap-2 text-lg font-semibold leading-6 text-white   hover:font-bold ">
              Contacto
            </Link>
        </div>
      </div>
  {/*  gracias */}
      {/* Menú desplegable para dispositivos pequeños */}
      {menuAbierto && (
        <div className="lg:hidden mt-2">
          <ul className="bg-neutral-500 p-2">
            <li className="text-white py-1"><Link to="/" class="text-lg font-semibold leading-6 text-rose-50  hover:font-bold ">
              Inicio
            </Link></li>
            <li className="text-white py-1"> <Link to="/turnos"class="text-lg font-semibold leading-6 text-rose-50 hover:font-bold ">
              Turnos
            </Link></li>
            <li className="text-white py-1"><Link to="/productos" class="text-lg font-semibold leading-6 text-rose-50 hover:font-bold ">
              Productos
            </Link></li>
            <li className="text-white py-1"><Link to="/servicios"  class="flex gap-2 text-lg font-semibold leading-6 text-rose-50  hover:font-bold ">
             Servicios
            </Link></li>
            <li className="text-white py-1"><Link  to="/contacto"  class="flex gap-2 text-lg font-semibold leading-6 text-rose-50 hover:font-bold ">
             Contacto
            </Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
import logor from '../assets/logor.png'
import './footer.css'

//import de iconos
import telegram from '../assets/icons/telegram.svg'
import instagram from '../assets/icons/instagram.svg'
import facebook from '../assets/icons/facebook.svg'
import mail from '../assets/icons/mail.svg'

const Footer = () => {


  return (
    <>
    {/* test */}
    <div className="bg-neutral-600 p-6 justify-center  text-center mt-8">
      <div className="  grid grid-rows-3 md:grid-flow-col   justify-center  md:justify-normal ">
        <div className="md:row-span-3 ... container-footer bg-[#FFEFEC] flex justify-center overflow-hidden rounded-3xl">
            <img src={logor} className=' object-cover'></img>
        </div>
        <div className="row-span-1 md:row-span-2 col-span-2 text-[#FFEFEC] p-4">
            <p className='text-xl font-semibold  pt-10 md:pt-0'>CONTACTO</p>
            <p className='mt-3'>ruthgalichini@gmail.com</p>
            <p>011 6428-2660</p>
        </div>
        <div className=" col-span-2 flex justify-center gap-4  ">
         <img src={telegram} className='md:w-11' alt='telegram'/>
         <img src={instagram} className='md:w-11' alt='telegram'/> 
         <img src={facebook} className='md:w-11' alt='telegram'/> 
         <img src={mail} className='md:w-11' alt='telegram'/> 
        </div>
      </div>
      </div>
    </>
  );
};

export default Footer;

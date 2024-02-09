import logor from '../assets/logor.png'
import './footer.css'


const Footer = () => {


  return (
    <>
    <div className="bg-neutral-600 p-6 justify-center  text-center mt-10">
      <div className="  grid grid-rows-3 md:grid-flow-col gap-4  justify-center md:justify-normal ">
        <div className="md:row-span-3 ... container-footer bg-slate-300 flex justify-center overflow-hidden rounded-3xl">
            <img src={logor} className=' object-cover'></img>
        </div>
        
        
        <div className="row-span-2 col-span-2 ... bg-green-300">02</div>
        <div className=" col-span-2 ... bg-red-400 ">03</div>
        
        
        
      
      </div>
      </div>
    </>
  );
};

export default Footer;

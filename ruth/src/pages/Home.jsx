import Carousel from '../components/Carousel'
import './style.css'
//import logos and img
import logor from '../assets/logor.png'
import plasma from '../assets/img/plasma.jpg'
import botox from '../assets/img/botox.jpeg'


const Home = () => {
  return (
    <>
       <Carousel/>
       {/* LOGO  */}
       <div className='container-fluid  flex justify-center  '>
        <div className='container  flex justify-center  '>
            <img src={logor} alt='logo dra. Ruth galichini ' className='w-56 md:w-96'></img>
        </div>
       </div>
       {/* SECTION ESPECIALIDADES */}
       <div className='container-fluid justify-center text-center align-middle flex p-4 md:p-8  rounded'>
         <div className='bg-neutral-600 container  p-4 rounded-lg '>
               <p className='text-rose-50 text-2xl md:text-4xl'>ESPECIALIDADES</p>
          </div>
       </div>
       {/* SECTION  */}
       <div className='container-fluid justify-center text-center align-middle flex p-4 md:p-8'>
       <div className="flex flex-wrap container ">
         <div className="container-img border overflow-hidden">
              <img src={plasma}  className='w-full h-full object-cover rounded-lg'/>
            </div>
            <div className=' w-full md:w-1/3 flex flex-wrap  content-center justify-center text-center rounded-b-lg '>
              <div className=''>
                <h1 className='text-4xl md:text-5xl'>PLASMA</h1>
                <p>Plasma Brillo y luminosiddad</p>
              </div>
            </div>
       </div>
       </div>
       
       <div className='container-fluid justify-center text-center align-middle p-4 md:p-8'>
       <div className="flex flex-wrap flex-row-reverse container ">
          <div className="container-img border overflow-hidden">
              <img src={botox}   className='w-full h-full object-cover rounded-lg'/>
            </div>
            <div className=' w-full md:w-1/3 flex flex-wrap  content-center justify-center text-center rounded-b-lg '>
              <div className=''>
                <h1 className='text-4xl md:text-5xl'>BOTOX</h1>
                <p>Brillo y reparacion</p>
              </div>
            </div>
       </div>
       </div>
       
       <div className='container-fluid justify-center text-center align-middle flex p-4 md:p-8'>
       <div className="flex flex-wrap container ">
          <div className="container-img border overflow-hidden">
              <img src={plasma}  className='w-full h-full object-cover rounded-lg'/>
            </div>
            <div className=' w-full md:w-1/3 flex flex-wrap  content-center justify-center text-center rounded-b-lg '>
              <div className=''>
                <h1 className='text-4xl md:text-5xl'>ACIDO ILURONICO</h1>
                <p>Proteccion y hidratacion</p>
              </div>
            </div>
       </div>
       </div>
       
       <div className='container-fluid justify-center text-center align-middle p-4 md:p-8'>
       <div className="flex flex-wrap flex-row-reverse container ">
             <div className="container-img border overflow-hidden">
              <img src={plasma}  className='w-full h-full object-cover rounded-lg'/>
            </div>
            <div className=' w-full md:w-1/3 flex flex-wrap  content-center justify-center text-center rounded-b-lg '>
              <div className=''>
                <h1 className='text-4xl md:text-5xl'>SCULPRA</h1>
                <p>Bucinador y cuello</p>
              </div>
            </div>
       </div>
       </div>
       
       
    </>
  )
}

export default Home

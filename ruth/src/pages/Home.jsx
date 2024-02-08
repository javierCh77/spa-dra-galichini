import Carousel from '../components/Carousel'

import logor from '../assets/logor.png'

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
       <div className='container-fluid justify-center text-center align-middle flex p-4 md:p-10  rounded'>
         <div className='bg-neutral-600 container  p-4 rounded-lg '>
               <p className='text-white text-2xl md:text-4xl'>Especialidad</p>
          </div>
       </div>
       
       {/* SECTION  */}
       
    </>
  )
}

export default Home

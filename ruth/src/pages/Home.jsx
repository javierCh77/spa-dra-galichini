import Carousel from '../components/Carousel'

import logor from '../assets/logor.png'

const Home = () => {
  return (
    <>
       <Carousel/>
       {/* LOGO  */}
       <div className='container-fluid  flex justify-center  '>
        <div className='container  flex justify-center  '>
            <img src={logor} alt='logo dra. Ruth galichini ' className='w-44 md:w-96'></img>
        </div>
       </div>
       
       
    </>
  )
}

export default Home

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import images 
import f1 from '../assets/img/f1.jpg';


const Carousel = () => {
  const settings = {
    autoplay:true,
    infinite: true,
    autoplaySpeed:3000,
    arrows:false,
  };

  return (
  <>
     <Slider className=' w-full ' {...settings}>
       <div className='container-fluid '>
         <img src={f1} className="w-full h-auto"  alt="Slide 1" />
       </div>
       <div>
         <img src={f1} className="w-full h-auto" alt="Slide 2" />
      </div>
       <div>
         <img src={f1}  className="w-full h-auto" alt="Slide 3" />
      </div>
     </Slider> 
    </>
  );
};

export default Carousel;

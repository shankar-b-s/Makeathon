// import { useState, useEffect } from 'react';
import img1 from '../images/guy1.png';
import img2 from '../images/guy2.png';
import img3 from '../images/guy3.png';
import img4 from '../images/guy4.png';
import { Carousel } from 'react-responsive-carousel';

// const images = [img1,img2,img3,img4];

// let cnt = 0;
const Mycarousel = () => {
//   const [currentIndex,setcurrentIndex] = useState(0);

//   useEffect(()=>{
//     startSlider()
//   },[])

//   const startSlider = ()=>{
//     setInterval(()=>{
//       handleOnNextClick();
//     },10000)
//   }
//   const handleOnNextClick = ()=>{
//     cnt = (cnt+1)%images.length;
//     {setcurrentIndex(cnt)};
//   }

  return ( 
    // <div className="carousel flex justify-center align-center">
    //   <img src={images[currentIndex]} alt="img" className='size-72 '/>
    // </div>
    <Carousel>
      <div><img src={img1} alt="img" /></div>
      <div><img src={img2} alt="img" /></div>
      <div><img src={img3} alt="img" /></div>
      <div><img src={img4} alt="img" /></div>
    </Carousel>
    
    // <div>hi</div>
   );
}
 
export default Mycarousel;
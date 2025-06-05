
import Sectiontitle from '../../../Components/Sectiontitle/Sectiontitle';
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const Testimonial = () => {
    const [reviews,setreviews]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then((res)=>res.json())
        .then((data)=>{
            setreviews(data)
        })
    },[])
    return (
        <section className='my-10'>
            <Sectiontitle  subHeading="What Our Client Say" heading="TESTIMONIAlS">
               
            </Sectiontitle>
         <div>
              <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
         {
            reviews.map(review=><SwiperSlide key={review._id}>
           <div className='flex flex-col items-center justify-center text-center m-14 space-y-6'>
             <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
    <FontAwesomeIcon icon={faQuoteLeft} className="text-5xl text-orange-300" />
            <p>{review.details}</p>
            <h3 className="text-2xl text-orange-400">{review.name}</h3>
           </div>
            </SwiperSlide>)
         }
      </Swiper>
         </div>
        </section>
    );
};

export default Testimonial;
import React from 'react'
import Container from '../Container'
import NewArrivalBG from '../../public/assets/images/NewArrivalBG.svg'
import Image from 'next/image'
import NewArrivalProduct from './NewArrivalProduct'

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Virtual } from 'swiper'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Navigation } from "swiper";

const NewArrival = () => {
  return (
    <section className='mb-10'>
        <h2 className='text-center uppercase mb-4'>New Arrival</h2>

        <Container className='!max-w-[400px] overflow-hidden'>
            <div className='relative w-full px-4  max-w-full min-h-[250px] flex items-center'>
              <Image src={NewArrivalBG} alt='BG' width={400} height={300} className='absolute inset-0 bg-cover h-full' />
            {/* <div className='flex gap-4 filtersWrapper overflow-x-auto overflow-hidden items-center'> */}
            <Swiper 
            modules={[Navigation, EffectFade]}
            navigation
            slidesPerView={1.75}
            spaceBetween={40}
            className='min-h-[250px] items-center flex '
            >
              <SwiperSlide >
                <NewArrivalProduct />
              </SwiperSlide>
              <SwiperSlide>
                <NewArrivalProduct />
              </SwiperSlide>
              <SwiperSlide>
                <NewArrivalProduct />
              </SwiperSlide>
              <SwiperSlide>
                <NewArrivalProduct />
              </SwiperSlide>
            </Swiper>
            {/* </div> */}
            </div>

        </Container>
    </section>
  )
}

export default NewArrival
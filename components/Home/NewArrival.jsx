import React from 'react'
import Container from '../Container'
import NewArrivalBG from '../../public/assets/images/NewArrivalBG.svg'
import Image from 'next/image'
import NewArrivalProduct from './NewArrivalProduct'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Navigation } from "swiper";

const NewArrival = () => {
  return (
    <section className='new-arrival mb-10'>
        <h2 className='text-center uppercase mb-4'>New Arrival</h2>

        <Container className='w-full h-[261px] select-none max-w-[440px] overflow-hidden'>
            <div className='relative w-full h-full flex items-center'>
              <div className="absolute inset-0">
                <Image style={{ width: '100%'}} src={NewArrivalBG} alt='BG' />
              </div>
              <Swiper 
              modules={[Navigation]}
              navigation
              slidesOffsetBefore={125}
              slidesPerView={1.75}
              spaceBetween={20}
              className='items-center flex h-full'
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
            </div>

        </Container>
    </section>
  )
}

export default NewArrival
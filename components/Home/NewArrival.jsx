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
    <section className='new-arrival mb-10'>
        <h2 className='text-center uppercase mb-4'>New Arrival</h2>

        <Container className='w-full select-none max-w-[440px] overflow-hidden'>
            <div className='relative w-full min-h-[250px] flex items-center'>
              <div className="absolute inset-0">
                <Image style={{ width: '100%'}} src={NewArrivalBG} alt='BG' />
              </div>
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
            </div>

        </Container>
    </section>
  )
}

export default NewArrival
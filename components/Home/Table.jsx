import Image from 'next/image'
import React from 'react'
import Container from '../Container'
import TableProduct from '../../public/assets/images/TableProduct.svg'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Navigation } from "swiper";
import TableItem from './TableItem';


const Table = () => {
  return (
    <section className='mb-10'>
        <Container className='flex'>
            <Swiper
            slidesPerView={2}
            spaceBetween={20}
            navigation
            modules={[Navigation]}
            className='mySwiper'
            >
              <SwiperSlide>
              <TableItem src={TableProduct} text='Dining table'/>
              </SwiperSlide>
              <SwiperSlide>
              <TableItem src={TableProduct} text='Dining table'/>
              </SwiperSlide>
              <SwiperSlide>
              <TableItem src={TableProduct} text='Dining table'/>
              </SwiperSlide>
              <SwiperSlide>
              <TableItem src={TableProduct} text='Dining table'/>
              </SwiperSlide>
              <SwiperSlide>
              <TableItem src={TableProduct} text='Dining table'/>
              </SwiperSlide>
            </Swiper>
        </Container>
    </section>
  )
}

export default Table
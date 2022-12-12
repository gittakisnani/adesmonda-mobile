import React from 'react'
import Container from '../Container'
import NewArrivalBG from '../../public/assets/images/NewArrivalBG.svg'
import Image from 'next/image'
import NewArrivalProduct from './NewArrivalProduct'
const NewArrival = () => {
  return (
    <section className='mb-10'>
        <h2 className='text-center uppercase mb-4'>New Arrival</h2>

        <Container className='!max-w-[400px] overflow-hidden'>
            <div className='relative max-w-full min-h-[200px] flex items-center'>
              <Image src={NewArrivalBG} alt='BG' className='absolute inset-0 bg-cover w-full h-full' />
            <div className='flex gap-4 p-4 filtersWrapper overflow-x-auto overflow-hidden items-center'>
            <NewArrivalProduct />
            <NewArrivalProduct />
            <NewArrivalProduct />
            <NewArrivalProduct />
            </div>
            </div>

        </Container>
    </section>
  )
}

export default NewArrival
import Image from 'next/image'
import React from 'react'
import Container from '../Container'
import ShopIn from '../../public/assets/images/ShopIn.svg'
import ShopIn2 from '../../public/assets/images/ShopIn2.svg'
import ShopIn3 from '../../public/assets/images/ShopIn3.svg'
import ShopIn4 from '../../public/assets/images/ShopIn4.svg'
const ShopInSection = () => {
  return (
    <section className='mb-10'>
        <Container className='flex flex-col gap-4'>
            <Image src={ShopIn} alt='Shop In tokopedia' className='w-full' />
            <Image src={ShopIn2} alt='Shop In tokopedia' className='w-full' />
            <Image src={ShopIn3} alt='Shop In tokopedia' className='w-full' />
            <Image src={ShopIn4} alt='Shop In tokopedia' className='w-full' />
        </Container>
    </section>
  )
}

export default ShopInSection
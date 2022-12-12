import React from 'react'
import Container from './Container'

const Newsletter = () => {
  return (
    <section  style={{ background: 'rgba(255, 255, 255, 0.4)', backgroundBlendMode: 'background-blend-mode: soft-light, normal'}}>
    <Container className='py-4'>
        <h3
        className='text-center font-bold text-[34px] leading-10'
        >Join Our <br /> Newsletter</h3>
        <p style={{ fontFamily: 'Marcellus' }} className='uppercase my-10 text-secondary tracking-[0.25em] text-lg leading-7 text-center'>Receive exclusive deals, discounts and many offers.</p>
        <form className='flex flex-col gap-10 mt-10 items-center'>
            <input 
                type="text" 
                className='p-3 text-[#C4C4C4] bg-transparent shadow-inner outline-none border border-gray-100 rounded-lg w-full placeholder:text-xs'
                placeholder='Ex: 081234567896'
            />
            <button className='text-[#FCF6F6] bg-primary mt-6 uppercase text-lg mx-auto tracking-[0.2em] rounded-[32px] w-[178px] h-[53px] font-[800]'>Subscribe</button>
        </form>
    </Container>
    </section>
  )
}

export default Newsletter
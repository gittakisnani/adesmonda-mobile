import React from 'react'
import Container from './Container'

const Newsletter = () => {
  return (
    <section style={{ background: 'linear-gradient(317.7deg, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.4) 105.18%), #EDEEEE', backgroundBlendMode: 'soft-light, normal'}}>
    <Container className='py-4'>
        <h3
        className='text-center font-bold text-[34px] leading-10'
        >Join Our <br /> Newsletter</h3>
        <p style={{ fontFamily: 'Marcellus' }} className='uppercase my-10 text-secondary tracking-[0.25em] text-lg leading-7 text-center'>Receive exclusive deals, discounts and many offers.</p>
        <form className='flex flex-col gap-10 mt-10 items-center'>
            <input 
                type="text" 
                style={{ background: 'linear-gradient(317.7deg, rgba(255, 255, 255, 0.4) 0%, rgba(0, 0, 0, 0.4) 105.18%), #ECEEEE', boxShadow: 'inset -2px -2px 8px #FFFEFA, inset 2px 2px 8px #BDB9A6', borderColor: 'rgba(226, 220, 209, 0.5)'}}
                className='p-3 bg-blend-soft-light text-[#C4C4C4] outline-none border-2 rounded-lg w-full placeholder:text-xs'
                placeholder='Ex: 081234567896'
            />
            <button className='text-[#FCF6F6] bg-primary mt-6 uppercase text-lg mx-auto tracking-[0.2em] rounded-[32px] w-[178px] h-[53px] font-[800]'>Subscribe</button>
        </form>
    </Container>
    </section>
  )
}

export default Newsletter
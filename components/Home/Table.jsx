import Image from 'next/image'
import React from 'react'
import Container from '../Container'
import TableProduct from '../../public/assets/images/TableProduct.svg'

const Table = () => {
  return (
    <section className='mb-10'>
        <Container className='flex items-start justify-between gap-4'>
            <div className='flex p-2 flex-col gap-2 items-center' style={{ background: 'rgba(0, 68, 65, 0.05)'}}>
                <Image src={TableProduct} alt='Table Image' width={173} height={173} />
                <p className='uppercase text-[10px] leading-3 tracking-[2.5px]'>Dining table</p>
            </div>
            <div className='flex p-2 flex-col gap-2 items-center' style={{ background: 'rgba(0, 68, 65, 0.05)'}}>
                <Image src={TableProduct} alt='Table Image' width={173} height={173} />
                <p className='uppercase text-[10px] leading-3 tracking-[2.5px]'>Dining table</p>
            </div>
        </Container>
    </section>
  )
}

export default Table
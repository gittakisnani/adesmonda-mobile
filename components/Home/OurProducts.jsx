import React from 'react'
import Button from '../Button'
import Container from '../Container'
import Product from './Product'

const OurProducts = () => {
  return (
    <section className='mb-10'>
        <h2 className='mb-4 uppercase text-center'>Our products</h2>
        <Container className='grid grid-cols-2 gap-4'>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </Container>
        <Container className='flex justify-center items-center my-5'>
            <Button />
        </Container>
    </section>
  )
}

export default OurProducts
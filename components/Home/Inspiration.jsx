import React from 'react'
import Button from '../Button'
import Container from '../Container'
import InspirationEntity from './InspirationEntity'
const InspirationPage = () => {
  return (
    <section className='mb-10'>
        <h2 className='uppercase text-center mb-4'>
            Inspirasi Untuk Anda
        </h2>
        <Container className='flex flex-col gap-4 items-center'>
            <InspirationEntity />
            <InspirationEntity />
            <InspirationEntity />
            <Button />
        </Container>
    </section>
  )
}

export default InspirationPage
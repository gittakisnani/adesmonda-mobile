import Image from 'next/image'
import React from 'react'
import Container from '../components/Container'
import Meta from '../components/Meta'
import Title from '../components/Title'
import WishListItem from '../components/WishList/WishListItem'

const wishlist = () => {
  return (
    <>
      <Meta title='Wishlist' />
        <section className='mb-10'>
            <div className='px-4'><Title title='wishlist' /></div>
            <Container className='flex flex-col flex-1 gap-4'>
                <WishListItem />
                <WishListItem />
                <WishListItem />
                <WishListItem />
            </Container>
        </section>
    </>
  )
}

export default wishlist
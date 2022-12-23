import React from 'react'
import BottomNavbar from '../components/BottomNavBar'
import Container from '../components/Container'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import Title from '../components/Title'
import WishListItem from '../components/WishList/WishListItem'
import ProductPicture2 from '../public/assets/images/ProductPicture2.svg'
const wishlist = () => {
  return (
    <>
      <Meta title='Wishlist' />
        <section className='mb-10'>
            <div className='px-4'><Title title='wishlist' /></div>
            <Container className='flex flex-col flex-1 gap-4'>
              <WishListItem src={ProductPicture2} title='black string couple coffee table' price={'123.456.789'} color='Black' />
              <WishListItem src={ProductPicture2} title='black string couple coffee table' price={'123.456.789'} color='Black' />
              <WishListItem src={ProductPicture2} title='black string couple coffee table' price={'123.456.789'} color='Black' />
              <WishListItem src={ProductPicture2} title='black string couple coffee table' price={'123.456.789'} color='Black' />
            </Container>
        </section>
        <Footer />
        <BottomNavbar />
    </>
  )
}

export default wishlist
import Head from 'next/head'
import HeroSection from '../components/Home/HeroSection'
import Inspiration from '../components/Home/Inspiration'
import NewArrival from '../components/Home/NewArrival'
import OurCatalog from '../components/Home/OurCatalog'
import OurProducts from '../components/Home/OurProducts'
import ShopInSection from '../components/Home/ShopIn'
import Table from '../components/Home/Table'
import Meta from '../components/Meta'
import Order from '../components/OrderModal'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import BottomNavbar from '../components/BottomNavBar'
export default function Home() {
  return (
    <>
    <Meta title='Home page' />
    {/* <Order /> */}
      <HeroSection />
      <Table />
      <NewArrival />
      <ShopInSection />
      <OurProducts />
      <OurCatalog />
      <Inspiration />
      <NewsLetter />
      <Footer />
      <BottomNavbar />
    </>
  )
}

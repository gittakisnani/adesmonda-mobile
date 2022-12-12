import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Container from '../components/Container'
import Tab from '../components/MyAccount/Tab'
import ProfilePicture from '../public/assets/images/ProfilePicture.svg'
import { FiEdit3 } from 'react-icons/fi'
import { useRouter } from 'next/router'
import MyAccount from '../components/MyAccount/MyAccount'
import AddAddress from '../components/MyAccount/AddAddress'
import EditAddress from '../components/MyAccount/EditAddress'
import MyAddresses from '../components/MyAccount/MyAddresses'
import MyOrders from '../components/MyAccount/MyOrders'
import CustomOrder from '../components/MyAccount/CustomOrder'
import Meta from '../components/Meta'
import Title from '../components/Title'
const MyAccountPage = () => {
  const router = useRouter()
  return (
   <>
    <Meta title='My Account' />
    <section className='mb-10'>
      {!router.query.tab && !router.query.order && <>
        <div className='px-4'><Title title='my account' /></div>
        <Container className='flex flex-col flex-1 gap-4'>
          <div className='flex justify-between items-center gap-4'>
            <div className='w-[100px] h-[100px] rounded-full overflow-hidden'>
              <Image src={ProfilePicture} alt='Profile Picture' className='h-full w-full bg-cover' />
            </div>
            <div className='flex flex-col gap-2'>
              <h4 className='text-xl leading-7 font-bold'>
              Estetico Admin Aja 
              </h4>
              <p className='text-xs leading-5 text-[#9CB6B5]'>087897877411</p>
            </div>
            <Link href='/myaccount?tab=general'>
              <FiEdit3 size={'20px'} color='#9CB6B5'/>
            </Link>
          </div>
          <Tab value='2 Addresses' text='Addresses' link='/myaccount?tab=my-addresses' />
          <Tab value='2 Orders' text='Orders' link='/myaccount?tab=my-orders' />
          <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.02)'}} className='flex flex-col gap-2 rounded-lg p-2 py-7 border-red-600 border-2'>
            <p className='font-bold text-xl leading-8 text-red-600'>Logout</p>
          </div>  
        </Container>
      </>}
      <Container>
      {router.query.tab === 'general' &&  <MyAccount />}
      {router.query.tab === 'add-address' &&  <AddAddress />}
      {router.query.tab === 'edit-address' &&  <EditAddress />}
      {router.query.tab === 'my-addresses' &&  <MyAddresses />}
      {router.query.tab === 'my-orders' &&  <MyOrders />}
      {router.query.order &&  <CustomOrder />}
      </Container>
      </section>
   </>
  )
}

export default MyAccountPage
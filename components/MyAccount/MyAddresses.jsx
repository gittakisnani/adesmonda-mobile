import Link from 'next/link'
import React from 'react'
import Title from '../Title'
import MyAddress from './MyAddress'

const MyAddresses = () => {
  return (
    <>  
        <Title title='My addresses' />
        <div className='w-full flex flex-col gap-4'>
        <h6 className='text-start text-primary leading-5 font-bold'>
          <Link href='/myaccount?tab=add-address'>
            <span className='text-3xl'>+</span> Add Address
          </Link>
        </h6>
        <MyAddress title='Mas DW' main desc='Jl Brigjen H Kassim Lr Santoso No 1307 X Kalidoni, Kec. Kalidoni, Kota Palembang, Sumatera Selatan' number='087897877411' />
        <MyAddress title='Mas DW' desc='Jl Brigjen H Kassim Lr Santoso No 1307 X Kalidoni, Kec. Kalidoni, Kota Palembang, Sumatera Selatan' number='087897877411' />
        <MyAddress title='Mas DW' desc='Jl Brigjen H Kassim Lr Santoso No 1307 X Kalidoni, Kec. Kalidoni, Kota Palembang, Sumatera Selatan' number='087897877411' />
        </div>
    </>
  )
}

export default MyAddresses
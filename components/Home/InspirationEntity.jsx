import Image from 'next/image'
import React from 'react'
import Inspiration from '../../public/assets/images/Inspiration.svg'

const InspirationEntity = () => {
  return (
    <div style={{ background: 'rgba(0, 68, 65, 0.05)'}} className='flex flex-col'>
        <Image src={Inspiration} alt='Inspiration image' className='w-full' />
        <div className='flex flex-col p-2'>
        <p className='text-[10px]'>29 November 2022</p>
        <h4 style={{ fontFamily: 'Plus Jakarta Sans'}} className='text-sm font-bold leading-6 tracking-[1.5px] mb-2'>Bazaar Jakarta Fest</h4>
        <p className='text-xs tracking-[0.5px] leading-4'>
        Ringkasannya, jumlah kata dalam postingan blog yang baik adalah minimal 500 kata. Lebih baik lagi minimal 800 kata dan sampai 2000 kata! Namun tidak menutup
        </p>
        </div>
    </div>
  )
}

export default InspirationEntity
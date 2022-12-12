import Image from 'next/image'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import TableProduct from '../../public/assets/images/TableProduct.svg'

const Product = () => {
  return (
    <div className='p-2 border-2 rounded-lg flex flex-col items-center relative'>
        <button className='absolute top-2 right-2 rounded-full p-1 bg-black/30 text-white'><AiOutlineHeart /></button>
        <Image src={TableProduct} alt='Product' />
        <h6 style={{ fontFamily: 'Marcellus' }} className='text-xs uppercase leading-7 text-center tracking-[0.25em]'>Premium Marquina Simply Modern</h6>
        <p className='text-xs leading-4 capitalize text-[#989C9C]'>Dining table</p>
        <p style={{ fontFamily: 'Plus Jakarta Sans' }} className='text-xs leading-6 tracking-[1.5px]'>Rp 888.000.000</p>
        <p style={{ fontFamily: 'Plus Jakarta Sans' }} className='text-[10px] leading-4 tracking-[2px] text-textRed line-through'>Rp 888.000.000</p>
    </div>
  )
}

export default Product
import Image from 'next/image'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import TableProduct from '../../public/assets/images/TableProduct.svg'

const Product = ({ src = TableProduct, title = 'Premium Marquina Simply Modern', category = 'Dining table', price = '888.000.000', priceBefore}) => {
  return (
    <div style={{ background: 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.4), rgba(0, 0, 0, 0.4))'}} className='p-1 rounded-lg'>
      <div className='p-2 rounded-lg flex flex-col items-center relative bg-white'>
          <button className='absolute top-2 right-2 rounded-full p-1 bg-black/30 text-white'><AiOutlineHeart /></button>
          <Image src={src} alt={title} />
          <h6 style={{ fontFamily: 'Marcellus' }} className='text-xs uppercase leading-7 text-center tracking-[0.25em]'>{title}</h6>
          <p className='text-xs leading-4 capitalize text-[#989C9C]'>{category}</p>
          <p style={{ fontFamily: 'Plus Jakarta Sans' }} className='text-xs leading-6 tracking-[1.5px]'>Rp {price}</p>
         { priceBefore && <p style={{ fontFamily: 'Plus Jakarta Sans' }} className='text-[10px] leading-4 tracking-[2px] text-textRed line-through'>Rp {priceBefore}</p>}
      </div>
    </div>
  )
}

export default Product
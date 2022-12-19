import Image from 'next/image'
import React from 'react'
import ProductPicture2 from '../../public/assets/images/ProductPicture2.svg'
const ItemOrder = () => {
  return (
    <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.05)'}} className="flex gap-2 items-center p-2 py-4 rounded-md">
        <div className="">
            <Image src={ProductPicture2} alt='Product' />
        </div>
        <div className="flex flex-col flex-1 overflow-hidden">
            <h4 style={{ fontFamily: 'Marcellus'}} className="uppercase leading-7 text-sm tracking-[0.25em] truncate">black string couple coffee table</h4>
            <p className="text-[#9CB6B5] text-xs leading-4 tracking-[0.5px]">Black</p>
            <div className="flex flex-col  text-primary mt-1  w-full">
            <p style={{ fontFamily: 'Plus Jakarta Sans'}} className="text-xs leading-6 tracking-[1.5px] truncate">1 x Rp 123.456.789</p>
            <p style={{ fontFamily: 'Plus Jakarta Sans'}} className="font-bold text-sm leading-6 tracking-[1.5px] truncate">Rp 123.456.789</p>
            </div>
        </div>
    </div>
  )
}

export default ItemOrder
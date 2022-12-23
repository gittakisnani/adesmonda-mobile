import React from 'react'
import { BsCheck2 } from 'react-icons/bs'
const CustomOrderItem = ({ title = 'Inv-004', date = '20 October 2022', numberOfProducts = 3, price = '300.000.000', status = 'Complete'}) => {
  return (
    <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.05)'}} className='border rounded-xl border-[#E2DCD1] p-4 flex flex-col gap-2'>
        <p className='font-bold text-sm leading-5 text-primary'>{title}</p>
        <p className='text-xs text-[#9CB6B5]'>{date}</p>
        <div className='h-px w-full bg-[#9CB6B5]'></div>
        <div className='flex justify-between items-center'>
            <div className='flex flex-col px-2'>
                <p className='text-[#121212] text-sm tracking-[2px]'>{numberOfProducts} Products</p>
                <p style={{ fontFamily: 'Plus Jakarta Sans'}} className='text-[#121212] text-sm tracking-[2px] leading-6 font-bold'>Rp {price}</p>
            </div>
            <div className='flex items-center text-xs text-white font-medium gap-2 self-end bg-primary rounded-lg p-1'>
                <BsCheck2 size={20} />
                <p>{status}</p>
            </div>
        </div>
    </div>
  )
}

export default CustomOrderItem
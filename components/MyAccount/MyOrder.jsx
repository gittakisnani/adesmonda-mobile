import Link from 'next/link'
import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { BiTimeFive } from 'react-icons/bi'
import { FaShippingFast } from 'react-icons/fa'
import { BsCheck2 } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'

const MyOrder = ({ title = 'Inv-004', date = '20 October 2022', number = 3, total='300.000.000', status = 'Completed'}) => {
  const bgCondition = `${status === 'Awaiting' ? 'bg-primary' : status === 'Delivery' ? 'bg-gray-400' : status === 'Completed' ? 'bg-secondary' : 'bg-textRed'}`
  return (
    <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.05)'}} className='border rounded-xl border-[#E2DCD1] p-4 flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
            <p className='font-bold text-xs leading-5 text-primary capitalize'>{title}</p>
            <div className={`text-[#F8FAFA] text-[10px] p-1 px-2 rounded-md flex gap-2 items-center ${bgCondition}`}>
                <span className='text-lg'>{status === 'Awaiting' ? <BiTimeFive /> : status === 'Delivery' ? <FaShippingFast /> : status === 'Completed' ? <BsCheck2 /> : <MdClose />}</span>
                <p>{status === 'Awaiting' ? 'Awaiting Payment' : status === 'Delivery' ? 'On Delivery' : status === 'Completed' ? 'Complete' : 'Expired'}</p>
            </div>
        </div>
        <p className='text-xs text-[#9CB6B5]'>{date}</p>
        <div className='h-px w-full bg-[#9CB6B5]'></div>
        <div className='flex justify-between items-center'>
            <div className='flex flex-col px-2'>
                <p className='text-[#121212] text-sm tracking-[2px]'>{number} Products</p>
                <p style={{ fontFamily: 'Plus Jakarta Sans'}} className='text-[#121212] text-sm tracking-[2px] leading-6 font-bold'>Rp {total}</p>
            </div>
            <Link href='/myaccount?order=id'>
              <FiChevronRight />
            </Link>
        </div>
    </div>
  )
}

export default MyOrder
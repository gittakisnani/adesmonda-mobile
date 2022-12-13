import { useRouter } from 'next/router'
import React from 'react'
import { BsChevronLeft } from 'react-icons/bs'

const Title = ({ title }) => {
    const router = useRouter()
  return (
    <div className='flex gap-4 items-center mb-4 max-w-[768px] mx-auto'>
        <button onClick={() => router.back()} className='text-xl'><BsChevronLeft /></button>
        <h4 className='font-bold uppercase text-lg leading-4 tracking-[2px] flex-1 text-center'>{title}</h4>
    </div>
  )
}

export default Title
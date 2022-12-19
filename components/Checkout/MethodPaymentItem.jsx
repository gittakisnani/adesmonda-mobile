import Image from 'next/image'
import React from 'react'

const MethodPaymentItem = ({ setMethod, src, text, id, checked }) => {
  return (
    <label htmlFor={id} className='flex gap-2 items-center'>
    <input checked={checked} onChange={() => setMethod({ id, text, src })} type="radio" id="bsi" className='appearance-none bg-gray-100 hover:bg-primary checked:bg-primary rounded-full h-5 w-5 cursor-pointer' />
        <Image src={src} alt={text} />
    <p className='text-[10px] font-light leading-4'>{text}</p>
    </label>
  )
}

export default MethodPaymentItem
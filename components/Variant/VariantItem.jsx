import Image from 'next/image'
import React from 'react'

const VariantItem = ({ src, text, setVariant  }) => {
  return (
    <div onClick={() => setVariant(text)} className='w-[85px] cursor-pointer flex flex-col text-center gap-2'>
    <div className='w-full h-[50px] overflow-hidden'>
        <Image src={src} alt={text} />
    </div>
    <p style={{ fontFamily: 'Marcellus'}} className='text-xs leading-4 tracking-[0.4px] capitalize'>{text}</p>
    </div>
  )
}

export default VariantItem
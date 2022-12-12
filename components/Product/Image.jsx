import Image from 'next/image'
import React from 'react'

const ImageItem = ({ src, images }) => {
  return (
    <div className='relative border rounded-md flex justify-center mb-10'>
        <Image src={src} alt='Product Picture' />
        <div className='absolute bottom-0 translate-y-1/2 flex gap-2'>
            <div className='p-1 w-[60px] h-[60px] border rounded-md'>
                <Image src={images[0]} alt='product image' className='w-full h-full bg-cover'/>
            </div>
            <div className='p-1 w-[60px] h-[60px] border rounded-md'>
                <Image src={images[1]} alt='product image' className='w-full h-full bg-cover'/>
            </div>
            <div className='p-1 w-[60px] h-[60px] border rounded-md'>
                <Image src={images[2]} alt='product image' className='w-full h-full bg-cover'/>
            </div>
            <div className='p-1 w-[60px] h-[60px] border rounded-md'>
                <Image src={images[3]} alt='product image' className='w-full h-full bg-cover'/>
            </div>
        </div>
    </div>
  )
}

export default ImageItem
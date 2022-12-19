import Image from 'next/image'
import React from 'react'

const TableItem = ({ src, text }) => {
  return (
    <div className='flex p-2 flex-col gap-2 items-center' style={{ background: 'rgba(0, 68, 65, 0.05)'}}>
        <Image src={src} alt='Table Image' width={173} height={173} />
        <p className='uppercase text-[10px] leading-3 tracking-[2.5px]'>{text}</p>
    </div>
  )
}

export default TableItem
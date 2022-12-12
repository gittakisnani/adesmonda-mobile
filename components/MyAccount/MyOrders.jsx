import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import MyOrder from './myOrder'

const MyOrders = () => {
    const router = useRouter()

  return (
    <div className='flex flex-col gap-4 w-full'>
        <input className='border p-2 rounded-md w-full' type="text" />
        <div className='flex gap-5 items-center overflow-y-auto types'>
            {['all', 'complete', 'on process', 'on delivery', 'cancelled', 'expired', 'awaiting payment'].map((tab, index) => (
                <p style={router.query.type === tab.replaceAll(' ', '') ? { color: '#004441', borderColor: '#004441'} : null} className={`border-b-2 border-transparent text-gray-400 font-bold capitalize text-sm whitespace-nowrap`} key={index}>
                    <Link href={`?tab=my-orders&type=${tab.replaceAll(' ', '')}`}>
                        {tab}
                    </Link>
                </p>
            ))}
        </div>
        <MyOrder />
        <MyOrder />
        <MyOrder />
        <MyOrder />
        <MyOrder />
        <MyOrder />
        <MyOrder />
    </div>
  )
}

export default MyOrders
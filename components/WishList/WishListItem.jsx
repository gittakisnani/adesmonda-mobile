import Image from 'next/image'
import React from 'react'
import WishListPicture from '../../public/assets/images/WishListPicture.svg'
import Trash from '../../public/assets/images/Trash.svg'
import ShareWishList from '../../public/assets/images/ShareWishList.svg'
import ShoppingList from '../../public/assets/images/ShoppingList.svg'
const WishListItem = () => {
  return (
    <div style={{ background: 'rgba(0, 68, 65, 0.05)'}} className='rounded-sm p-2 flex items-center gap-4'>
        <div className='min-w-[70px] min-h-[70px] rounded-md overflow-hidden'>
            <Image src={WishListPicture} alt='Wishlist products' className='w-full h-full bg-cover' />
        </div>
        <div className='flex flex-col flex-1 overflow-hidden gap-3'>
            <h4 style={{ fontFamily: 'Marcellus' }} className='text-md uppercase leading-7 tracking-[0.25em] truncate '>black string couple coffee table</h4>
            <p className='text-xs text-[#9CB6B5]'>Black</p>
            <div className='flex justify-between items-center'>
                <p style={{ fontFamily: 'Plus Jakarta Sans'}} className='text-md font-bold leading-4 tracking-[1.5px]'>Rp 123.456.789</p>
                <div className='flex items-center gap-2'>
                    <Image src={Trash} alt='Delete' />
                    <Image src={ShoppingList} alt='Delete' height={20} />
                    <Image src={ShareWishList} alt='Delete' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default WishListItem
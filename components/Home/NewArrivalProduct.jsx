import Image from 'next/image'
import { AiOutlineHeart } from 'react-icons/ai'
import NewArrivalProductBG from '../../public/assets/images/NewArrivalProductBG.svg'
const NewArrivalProduct = () => {
  return (
    <div className='border-2 select-none max-w-fit h-full border-gray-200 rounded-lg opacity-80 bg-gray-300/80 backdrop-blur-[10px] flex flex-col justify-between'>
        <div className='flex flex-col'>
        <div className=' flex justify-between items-center gap-4 px-4 pt-2 transitions scale-y-[70%]'>
            <h5 style={{ fontFamily: 'Marcellus' }} className='title uppercase text-sm leading-6 tracking-[0.25em]'>
            Cavallo
            </h5>
            <button className='text-xl'><AiOutlineHeart /></button>
        </div>
        <p className='type text-[9px] leading-4 tracking-[0.5px] -mt-1 px-4'>Dining Table</p>
        </div>
        <div className='relative'>
            <Image style={{ width: '100%'}} src={NewArrivalProductBG} alt='New product bg' />
        </div>
        <p style={{ fontFamily: 'Plus Jakarta Sans'}} className='px-4 pb-4 font-bold text-sm tracking-[1.5px]'>
        Rp 888.000.000
        </p>
    </div>
  )
}

export default NewArrivalProduct
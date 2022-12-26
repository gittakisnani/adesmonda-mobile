import Image from 'next/image'
import { AiOutlineHeart } from 'react-icons/ai'
import NewArrivalProductBG from '../../public/assets/images/NewArrivalProductBG.svg'
const NewArrivalProduct = () => {
  return (
    <div style={{ boxShadow: '10px 0px 20px rgba(0, 0, 0, 0.25), 0px 10px 20px rgba(0, 68, 65, 0.2)'}} className='border-[3px] select-none max-w-fit h-full border-gray-200/40 rounded-lg opacity-80 bg-white/40 backdrop-blur-[10px] flex flex-col justify-between'>
        <div className='flex flex-col'>
        <div className=' flex justify-between items-center gap-4 px-2'>
            <h5 style={{ fontFamily: 'Marcellus' }} className='title uppercase leading-7 tracking-[0.25em]'>
            Cavallo
            </h5>
            <button className='text-xl'><AiOutlineHeart /></button>
        </div>
        <p className='type text-xs leading-4 tracking-[0.5px] -mt-1 px-2'>Dining Table</p>
        </div>
        <div className='relative'>
            <Image style={{ width: '100%'}} src={NewArrivalProductBG} alt='New product bg' />
        </div>
        <p style={{ fontFamily: 'Plus Jakarta Sans'}} className='px-2 pb-2 font-bold text-sm tracking-[1.5px]'>
        Rp 888.000.000
        </p>
    </div>
  )
}

export default NewArrivalProduct
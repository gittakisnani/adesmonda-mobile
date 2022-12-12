import Image from 'next/image'
import { AiOutlineHeart } from 'react-icons/ai'
import NewArrivalProductBG from '../../public/assets/images/NewArrivalProductBG.svg'
const NewArrivalProduct = () => {
  return (
    <div className='border-2 border-gray-200 rounded-lg bg-gray-200/50 backdrop-blur-[10px] flex flex-col'>
        <div className='flex justify-between items-center gap-4 px-4'>
            <h5 style={{ fontFamily: 'Marcellus' }} className='text-lg leading-6 tracking-[0.25em]'>
            Cavallo
            </h5>
            <button className='text-lg'><AiOutlineHeart /></button>
        </div>
        <p className='text-xs leading-4 tracking-[0.5px] px-4'>Dining Table</p>
        <div className=''>
            <Image src={NewArrivalProductBG} alt='New product bg' />
        </div>
        <p style={{ fontFamily: 'Plus Jakarta Sans'}} className='px-4 font-bold text-sm tracking-[1.5px]'>
        Rp 888.000.000
        </p>
    </div>
  )
}

export default NewArrivalProduct
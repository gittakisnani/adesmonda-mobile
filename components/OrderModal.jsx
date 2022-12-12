import Image from 'next/image'
import OrderModal from '../public/assets/images/OrderModal.svg'
const Order = () => {
  return (
    <section className='flex flex-col gap-4 py-20 items-center'>
        <Image src={OrderModal} alt='OrderModal' />
        <h4 style={{ fontFamily: 'Marcellus' }} className='text-3xl text-[#181725] leading-10 mx-auto text-center'>Pesanan anda telah kami terima</h4>
        <p className='text-xs leading-4'>Kami akan mengirimkan Invoice pembelian ke email anda</p>
        <button className='w-[158px] h-[56px] text-white uppercase leading-6 font-bold rounded-[16px] bg-primary'>
        Check Order
        </button>
        <p className='font-medium uppercase'>or</p>
        <p className='underline text-[10px] leading-4 text-primary'>Kembali ke Homepage</p>
    </section>
  )
}

export default Order
import Image from 'next/image'
import React from 'react'
import PaymentMethodCheckout from '../components/Checkout/PaymentMethod'
import Container from '../components/Container'
import Meta from '../components/Meta'
import OrderSummary from '../components/OrderSummary'
import Title from '../components/Title'
import PaymentMethod from '../public/assets/images/PaymentMethod.svg'
const checkout = () => {
  return (
    <>
    <Meta title='Checkout' />
    <section className='mb-10'>
        <div className="px-4"><Title title='checkout' /></div>
        <Container className='flex flex-col flex-1 gap-4'>
        <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.05)'}} className='p-2 rounded-2xl flex flex-col gap-2'>
            <h4 className="font-bold leading-6">Shipping Address</h4>
            <p className="tracking-[1px] leading-4 font-bold text-sm">Mas DW</p>
            <p className="tracking-[1px] leading-5 text-xs pt-2 border-t">
            Jl Brigjen H Kassim Lr Santoso No 1307 X Kalidoni, Kec. Kalidoni, Kota Palembang, Sumatera Selatan
            </p>
            <p className="tracking-[1px] leading-5 text-xs">
            087897877411
            </p>
        </div>
        <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.05)'}} className='p-2 rounded-2xl flex flex-col gap-2'>
            <h4 className="font-bold leading-5">Payment Method</h4>
            {/* If payment method is selected */}
            {/* <div className='flex justify-center items-center gap-10'>
                <p className='font-bold text-sm tracking-[1.5px] leading-5 text-primary'>Bank Syariah Indonesia</p>
                <Image src={PaymentMethod} alt='Payment Method' />
            </div> */}
            {/* If payment method is not selected */}
            <PaymentMethodCheckout />
        </div>
        <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.05)'}} className='p-2 rounded-2xl flex flex-col gap-2'>
            <h4 className="font-bold leading-5">Promo Code</h4>
            <div className="border rounded-lg bg-white text-[#626260] text-xs leading-5 tracking-[2px] w-[90%] p-2">
                <p>Masukkan kode promo anda</p>
            </div>
        </div>
        <OrderSummary />
        </Container>
    </section>
</>
  )
}

export default checkout
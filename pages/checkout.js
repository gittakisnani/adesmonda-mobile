import PaymentMethodCheckout from '../components/Checkout/PaymentMethod'
import Container from '../components/Container'
import Meta from '../components/Meta'
import OrderSummary from '../components/OrderSummary'
import Title from '../components/Title'
import MyAddress from '../components/MyAccount/MyAddress'
import Link from 'next/link'
import { useState } from 'react'
import OrderModal from '../components/OrderModal'
const Checkout = () => {
    const [request, setRequest] = useState(false)
  return (
    <>
    <Meta title='Checkout' />
        <>
        {request ? <OrderModal /> : <section className='flex-1 flex flex-col'>
            <div className="px-4"><Title title='checkout' /></div>
            <Container className='flex flex-col flex-1 gap-4'>
                <Link href='/myaccount?tab=my-addresses'>
                <MyAddress title='Mas DW' main desc='Jl Brigjen H Kassim Lr Santoso No 1307 X Kalidoni, Kec. Kalidoni, Kota Palembang, Sumatera Selatan' number='087897877411' includeChange={false} includeTrash={false} style={{background: 'rgba(0, 68, 65, 0.05)'}} />
                </Link>
            <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.05)'}} className='p-2 rounded-2xl flex flex-col gap-2'>
                <h4 className="font-bold leading-5">Payment Method</h4>
                
                <PaymentMethodCheckout />
            </div>
            <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.05)'}} className='p-2 rounded-2xl flex flex-col gap-2'>
                <h4 className="font-bold leading-5">Promo Code</h4>
                <div className="border rounded-lg bg-white text-[#626260] text-xs leading-5 tracking-[2px] w-[90%] p-2">
                    <p>Masukkan kode promo anda</p>
                </div>
            </div>
            </Container>
            <OrderSummary onClick={() => setRequest(true)} includeSubtotal />   
        </section>}
        </> 
    </>
  )
}

export default Checkout
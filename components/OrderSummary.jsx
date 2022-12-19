import { useState } from 'react'
import { HiBars2 } from 'react-icons/hi2'

const OrderSummary = ({ includeSubtotal = false, onClick }) => {
    const [showOrderSummary, setShowOrderSummary] = useState(false);

    return (
        <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.05)'}} className='w-full max-w-[768px] mx-auto rounded-2xl flex flex-col  gap-4 relative'>
            {(!includeSubtotal || showOrderSummary) &&
                <>
                {(showOrderSummary && includeSubtotal) && <button onClick={() => setShowOrderSummary(false)} className='absolute top-1 right-1/2 translate-x-1/2 text-xl'>
                <HiBars2 />
                </button>}
                <h4 className="font-bold leading-5 pt-6 p-2">Order Summary</h4>
                <div className="flex flex-col gap-2 p-2">
                    <div className="flex items-center justify-between">
                        <p className="text-[#6A8483] leading-4 tracking-[0.5px] text-xs">Total (3 Product)</p>
                        <p style={{ fontFamily: 'Plus Jakarta Sans'}} className="text-xs text-[#171520]">Rp 350.000.000</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-[#6A8483] leading-4 tracking-[0.5px] text-xs">Total (3 Product)</p>
                        <p style={{ fontFamily: 'Plus Jakarta Sans'}} className="text-xs text-[#171520]">Rp 350.000.000</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-[#6A8483] leading-4 tracking-[0.5px] text-xs">Total (3 Product)</p>
                        <p style={{ fontFamily: 'Plus Jakarta Sans'}} className="text-xs text-[#171520]">Rp 350.000.000</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-[#121212] leading-4 font-medium tracking-[0.5px] text-xs">Total Price</p>
                        <p style={{ fontFamily: 'Plus Jakarta Sans'}} className="text-xs font-bold text-[#171520]">Rp 350.000.000</p>
                    </div>
                </div>
                </>
            }
            {includeSubtotal && <div 
            style={{ background: 'linear-gradient(90deg, #004441 0%, #006E60 100%)', borderRadius: showOrderSummary ? 0 : '10px 10px 0 0 '}}
            className='flex items-center h-[75px] justify-between text-white p-2 relative'
            >

                {!showOrderSummary && <button onClick={() => setShowOrderSummary(true)} className='absolute top-1 right-1/2 translate-x-1/2 text-xl'>
                <HiBars2 />
                </button>}
                <div className='flex flex-col'>
                    <p style={{ fontFamily: 'Marcellus' }} className='text-xs uppercase leading-4 tracking-[0.25em]'>
                        Subtotal
                    </p>
                    <p style={{ fontFamily: 'Plus Jakarta Sans'}} className='font-bold tracking-[1.5px] leading-6'>
                        Rp 999.999.999
                    </p>
                </div>
                <button onClick={onClick} className='text-sm font-bold leading-5 text-right'>
                    Lanjutkan <br /> Pembayaran
                </button>
            </div>}
        </div>
    )
}

export default OrderSummary
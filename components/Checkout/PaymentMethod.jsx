import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import BSI from '../../public/assets/images/BSI.svg'
import BNI from '../../public/assets/images/BNI.svg'
import Mandiri from '../../public/assets/images/Mandiri.svg'
import BCA from '../../public/assets/images/BCA.svg'
import BRI from '../../public/assets/images/BRI.svg'
import MethodPaymentItem from './MethodPaymentItem'
import Image from 'next/image'
const PaymentMethodCheckout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [method, setMethod] = useState(null)
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div className='flex flex-col'>
        <div style={{ background: 'rgba(0, 68, 65, 0.05)'}} className='flex justify-between items-center p-2 rounded-md'>
            {!method && <p className='text-xs leading-5'>ATM/Transfer Bank (Virtual Account)</p>}
            {/* If payment method is selected */}
            { method && <div className='flex justify-between items-center flex-1 pr-10 gap-10'>
                <p className='font-bold text-sm tracking-[1.5px] leading-5 text-primary capitalize'>{method.text}</p>
                <Image width={80} src={method.src} alt='Payment Method' />
            </div>}
            <button onClick={handleOpen} style={ isOpen ? { rotate: '180deg'} : null} className='transitions'>
                <BsChevronDown />
            </button>
        </div>
        
        {/* If payment method is not selected */}
        {isOpen && <div className='flex flex-col gap-2 p-2 bg-white'>
            <MethodPaymentItem id='bsi' text='Bank Syariah Indonesia' src={BSI} setMethod={setMethod} checked={method?.id === 'bsi'} />
            <MethodPaymentItem id='bca' text='Bank Syariah Indonesia ' src={BCA} setMethod={setMethod} checked={method?.id === 'bca'} />
            <MethodPaymentItem id='mandiri' text='Bank Mandiri' src={Mandiri} setMethod={setMethod} checked={method?.id === 'mandiri'} />
            <MethodPaymentItem id='bri' text='Bank Rakyat Indonesia' src={BRI} setMethod={setMethod} checked={method?.id === 'bri'} />
            <MethodPaymentItem id='bni' text='Bank Negara Indonesia' src={BNI} setMethod={setMethod} checked={method?.id === 'bni'} />
        </div>}
    </div>
  )
}

export default PaymentMethodCheckout
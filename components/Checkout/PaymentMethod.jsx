import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import BSI from '../../public/assets/images/BSI.svg'
import BNI from '../../public/assets/images/BNI.svg'
import Mandiri from '../../public/assets/images/Mandiri.svg'
import BCA from '../../public/assets/images/BCA.svg'
import BRI from '../../public/assets/images/BRI.svg'
import Image from 'next/image'
import MethodPaymentItem from './MethodPaymentItem'
const PaymentMethodCheckout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [method, setMethod] = useState()
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div className='flex flex-col'>
        <div style={{ background: 'rgba(0, 68, 65, 0.05)'}} className='flex justify-between items-center p-2'>
            <p className='text-xs leading-5'>ATM/Transfer Bank (Virtual Account)</p>
            <button onClick={handleOpen} style={ isOpen ? { rotate: '180deg'} : null} className='transitions'>
                <BsChevronDown />
            </button>
        </div>
        {isOpen && <div className='flex flex-col gap-2 p-2 bg-white'>
            <MethodPaymentItem id='bsi' text='Bank Syariah Indonesia' src={BSI} setMethod={setMethod} checked={method === 'bsi'} />
            <MethodPaymentItem id='bca' text='Bank Syariah Indonesia ' src={BCA} setMethod={setMethod} checked={method === 'bca'} />
            <MethodPaymentItem id='mandiri' text='Bank Mandiri' src={Mandiri} setMethod={setMethod} checked={method === 'mandiri'} />
            <MethodPaymentItem id='bri' text='Bank Rakyat Indonesia' src={BRI} setMethod={setMethod} checked={method === 'bri'} />
            <MethodPaymentItem id='bni' text='Bank Negara Indonesia' src={BNI} setMethod={setMethod} checked={method === 'bni'} />
        </div>}
    </div>
  )
}

export default PaymentMethodCheckout
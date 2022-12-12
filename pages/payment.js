import Image from 'next/image'
import React from 'react'
import Container from '../components/Container'
import Meta from '../components/Meta'
import PaymentInstruction from '../components/Payment/PaymentInstruction'
import Title from '../components/Title'
import Bank from '../public/assets/images/Bank.svg'
import CopyBank from '../public/assets/images/CopyBank.svg'

const INSTRUCTIONS = ['Open BSI Mobile application', 'Choose payment Menu', 'Choose E-Commerce menu', 'Choose merchant "DOKU', 'Choose account number']

const instructions = {
    'BSI Mobile': INSTRUCTIONS,
    'ATM BSI': INSTRUCTIONS,
    'Banking Syariah Net': INSTRUCTIONS,
    'Kantor BSI': INSTRUCTIONS
}
const Payment = () => {
  return (
    <>
        <Meta title='Payment' /> 
        <section className='my-10'>
        <div className='px-4'><Title title='payment' /></div>
            <Container className='flex flex-col flex-1 gap-4'>
                <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.02)'}} className='rounded-xl p-2 pr-4 flex flex-col gap-2'>
                        <div className='flex justify-between items-center'>
                            <h6 className='font-bold leading-5'>Status Pembayaran</h6>
                            <span className='rounded-md bg-primary text-[10px] font-bold leading-4 text-white p-1 py-0.5'>Awaiting Payment</span>
                        </div>
                        <p className='text-xs tracking-[0.5px] text-[#9CB6B5]'>Selesaikan pembayaran sebelum</p>
                        <div style={{ fontFamily: 'Plus Jakarta Sans' }} className='flex items-center gap-20 font-bold leading-5 text-sm justify-between'>
                            <p className='text-primary'>31-12-2022 12:32</p>
                            <p className='text-[#D52E2F]'>23:59:59</p>
                        </div>
                </div>
                <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.02)'}} className='rounded-xl p-2 pr-4 flex flex-col gap-2'>
                        <h6 className='font-bold leading-5'>Rincian Pesanan</h6>
                        <div className='flex justify-between items-center'>
                                <p className='text-xs tracking-[0.5px] text-[#9CB6B5]'>Selesaikan pembayaran sebelum</p>
                                <p className='text-xs tracking-[0.5] text-primary underline font-bold'>Detail Pesanan</p>
                        </div>
                        <p style={{ fontFamily: 'Plus Jakarta Sans' }} className='text-primary font-bold'>Rp 999.999.999</p>
                </div>
                <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.02)'}} className='rounded-xl p-2 pr-4 flex flex-col gap-2'>
                        <h6 className='font-bold leading-5'>Virtual Account</h6>
                        <div className='grid grid-cols-1 gap-4'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-xs tracking-[0.5px] text-[#9CB6B5]'>Nama Bank</p>
                                <div className='flex items-center justify-between font-bold leading-5'>
                                <p className='text-primary'>Bank Syariah Indonesia</p>
                                <Image src={Bank} alt='Bank' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                            <p className='text-xs tracking-[0.5px] text-[#9CB6B5]'>Nomor Virtual Account</p>
                                <div className='flex items-center justify-between font-bold leading-5'>
                                    <p className='text-primary'>6059000000008748</p>
                                    <Image src={CopyBank} alt='Copy Bank' />
                                    </div>
                                </div>
                            </div>
                </div>
                <div style={{ backgroundColor: 'rgba(0, 68, 65, 0.02)'}} className='rounded-xl p-2 pr-4 flex flex-col gap-4'>
                        <h6 className='font-bold leading-5'>Payment Instruction</h6>
                        {Object.keys(instructions).map((instruction, index) => (
                            <PaymentInstruction key={index} text={instruction} instructions={instructions[instruction]} />
                        ))}
                    </div>
                    <button className='border-textRed border rounded-[16px] w-[142px] h-[50px] mx-auto text-textRed leading-6 font-medium'>Cancel Order</button>
            </Container>
        </section>
    </>
  )
}

export default Payment
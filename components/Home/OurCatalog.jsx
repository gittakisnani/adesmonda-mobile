import Image from 'next/image'
import React from 'react'
import Container from '../Container'
import Catalog from '../../public/assets/images/Catalog.svg'
import CatalogImage from '../../public/assets/images/CatalogImage.svg'
import Button from '../Button'
const OurCatalog = () => {
  return (
    <section className='flex flex-col gap-4 px-4 mb-10'>
        <Container style={{ background: 'rgba(0, 68, 65, 0.05)'}} className='flex flex-col gap-4 py-4 px-0'>
            <h4 style={{ fontFamily: 'Marcellus'}} className='uppercase mb-2 leading-5 tracking-[0.25em] text-lg text-center'>Koleksi Kami</h4>
            <Image src={Catalog} alt='Catalog' className='w-full' />
            <Image src={Catalog} alt='Catalog' className='w-full' />
            <div className='flex justify-center items-center'>
                <Button />
            </div>
        </Container>
        <Container style={{ background: 'rgba(0, 68, 65, 0.05)'}} className='flex px-0'>
            <Image src={CatalogImage} alt='Catalog Image' width={180} />
            <div className='p-3'>
                <h5 className='text-textBlack font-bold leading-6'>Katalog Kami</h5>
                <p className='text-xs leading-4 my-2'>Temukan inspirasi anda dari katalog terbaru kami</p>
                <button style={{ background: 'linear-gradient(283.53deg, rgba(0, 0, 0, 0.2) 0%, rgba(255, 255, 255, 0.2) 101.57%), #004441'}} className='w-[111px] h-[44px] rounded-xl text-xs leading-3 tracking-[1.5px] font-medium text-white'>
                Lihat Katalog
                </button>
            </div>
        </Container>
    </section>
  )
}

export default OurCatalog
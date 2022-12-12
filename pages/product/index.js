import Image from 'next/image'
import React from 'react'
import Container from '../../components/Container'
import ProductPageImage from '../../public/assets/images/ProductPageImage.svg'
import Share from '../../public/assets/images/Share.svg'
import Product from '../../components/Home/Product'
import ImageItem from '../../components/Product/Image'
import Meta from '../../components/Meta'
const ProductPage = () => {
  return (
    <>
    <Meta title='Product Title' />
    <section className='mb-10'>
        <Container className='flex flex-col gap-4'>
            <ImageItem src={ProductPageImage} images={[ProductPageImage, ProductPageImage, ProductPageImage, ProductPageImage]} />
            <div className=''>
                <div className='flex justify-between items-center'>
                    <h4 style={{ fontFamily: 'Marcellus' }} className='uppercase tracking-[0.25em] leading-6 text-lg'>Cavallo Slim</h4>
                    <button>
                        <Image src={Share} alt='Share' height={30} />
                    </button>
                </div>
                <div style={{ fontFamily: 'Plus Jakarta Sans'}} className='flex justify-between items-end my-4'>
                    <h4  className='text-3xl text-primary leading-10'>Rp 123.456.780</h4>
                    <p className='line-through text-textRed leading-4 text-xs tracking-[2px]'>Rp 999.999.999</p>
                </div>
                <p className='font-bold text-lg leading-5 tracking-[1.5px]'>Pattern:</p>
                <div className='flex justify-between items-center my-2'>
                    <p className='text-xs leading-[18px] text-primary'>Perletto Royale</p>
                    <p className='underline text-xs leading-3 font-semibold text-primary'>Change</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h5 style={{ fontFamily: 'Marcellus'}} className='text-lg leading-7 tracking-[0.25em] uppercase'>Description</h5>
                    <p className='text-text-textBlack tracking-[0.5px] leading-4 text-xs '>
                    Lengkapi ruang makan anda dengan meja makan yang elegan dari Cavallo Dining Table Series. Meja marmer yang luas menawarkan Anda untuk menikmati makan malam kecil ataupun besar. Pola dan warna yang sederhana untuk ruang makan anda memberikan kesan kehangatan serta suasana ceria pada ruang makan Anda.
                    </p>
                </div>
                <div className='flex flex-col gap-2 my-4'>
                    <h5 style={{ fontFamily: 'Marcellus'}} className='text-lg leading-7 tracking-[0.25em] uppercase'>Spesification</h5>
                    <p className='text-text-textBlack tracking-[0.5px] leading-4 text-xs '>
                    180 x 100 x 76
                    </p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h5 style={{ fontFamily: 'Marcellus'}} className='text-lg leading-7 tracking-[0.25em] uppercase'>Related Products</h5>
                    <div className='grid grid-cols-2 gap-4'>
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
            </div>
        </Container>
    </section>
    </>
  )
}

export default ProductPage
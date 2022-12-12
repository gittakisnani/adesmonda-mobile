import Image from 'next/image'
import Container from '../../components/Container'
import HeroPicture from '../../public/assets/images/HeroPicture.svg'

const HeroSection = () => {
  return (
    <section className='mb-10'>
        <Container className='flex flex-col gap-6 items-center'>
          <Image src={HeroPicture} alt='Hero picture' />
          <h1>Custom Enquiry</h1>
          <p className='text-sm leading-5 text-center tracking-[2px]'>
          Design your dream dining table just in y0ur hand
          </p>
          <button style={{ background: ' linear-gradient(283.53deg, rgba(0, 0, 0, 0.2) 0%, rgba(255, 255, 255, 0.2) 101.57%), #004441'}} className='text-white rounded-radius w-[113px] h-[34px] font-bold text-sl leading-4 tracking-[1.5px] mx-auto py-1'>
            Start Now
          </button>
        </Container>
      </section>
  )
}

export default HeroSection
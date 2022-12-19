import { HiOutlineHome } from 'react-icons/hi'
import { FiHeart } from 'react-icons/fi'
import { BsCart } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi'
import NavbarLogo from '../public/assets/images/NavbarLogo.svg'
import NavBarItem from './NavBarItem'
import Image from 'next/image'
import { useRouter } from 'next/router'
const BottomNavbar = () => {
    const router = useRouter();


    const iconStyle = {
        background: 'radial-gradient(38.75% 38.75% at 33.75% 40%, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%)  #004441',
        boxShadow:' 0px 4px 5px rgba(0, 0, 0, 0.3), inset 3px 4px 5px rgba(255, 255, 255, 0.2), inset -4px -5px 12px rgba(0, 0, 0, 0.3)'
    }


  return (
    <nav style={{boxShadow: '0px -2px 10px rgba(0, 68, 65, 0.1), inset 0px 2px 5px #FFFFFF'}} className='flex items-start justify-between sm:justify-center gap-2 bg-[#F9F9F9] rounded-t-xl h-[65px] px-1 pb-3 sticky bottom-0 z-50'>
    <NavBarItem url='/' text='Home' icon={<HiOutlineHome />} active={router.pathname === '/'} />
    <NavBarItem url='/wishlist' text='Wishlist' icon={<FiHeart />} active={router.pathname.includes('/wishlist')} />
    <div style={iconStyle} className='-translate-y-1/3 border-[3px] border-gray-100/20 w-[64px] h-[64px] rounded-full grid place-items-center'>
        <Image src={NavbarLogo} alt='Navbar logo' />
    </div>
    <NavBarItem text='Cart' url='/mycart' icon={<BsCart />} active={router.pathname.includes('/mycart')} />
    <NavBarItem url='/myaccount' text='User' icon={<BiUserCircle />} active={router.pathname.includes('myaccount')} />
    </nav>
  )
}

export default BottomNavbar
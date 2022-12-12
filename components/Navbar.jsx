import Image from 'next/image'
import Link from 'next/link'
import NavbarMobileLogo from '../public/assets/images/NavbarMobileLogo.svg'
import { IoMdClose } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { useState } from 'react'
import { FiChevronLeft } from 'react-icons/fi'

const navbarData = {
    product: {
        link: '/',
        subLinks: {
            table: { link: '/', categories: [['Dining Table', '/'], ['Dining Table', '/'], ['Dining Table', '/'], ['Dining Table', '/'], ['Dining Table', '/']]},
            'Home Decor': { link: '/', categories: [['Dining Table', '/'], ['Dining Table', '/'], ['Dining Table', '/'], ['Dining Table', '/'], ['Dining Table', '/']]},
        }
    },
    inspiration: {
        link: '/',
        subLinks: {
            text: { link: '/', categories: null}
        }
    },
    'about us' : {
        link: '/',
        subLinks: null
    }, 
    blog: {
        link: '/',
        subLinks: null
    }
}

const NavBar = ({ handleNavBar }) => {
    const [activeLink, setActiveLink] = useState('');
    const [category, setCategory] = useState('');

    const handleNavLink = (activeLink = '') => {
        setActiveLink(activeLink);
        setCategory('')
    }
  return (
    <nav className='fixed top-0 right-0 bottom-0 z-50 w-[67%] bg-primary p-4 overflow-y-auto'>
        <div className='flex gap-3 items-center border-b border-white pb-4 mb-4'>
            {category && <button onClick={() => setCategory('')} className='text-2xl text-white'>
                <FiChevronLeft />
            </button>}
            <div className='flex-1 justify-center items-center flex'>
                <Link href='/'>
                    <Image src={NavbarMobileLogo} alt='Logo' />
                </Link>
            </div>
            <button onClick={handleNavBar} className='text-2xl text-white'>
                <IoMdClose />
            </button>
        </div>
        {!category && <div className="flex flex-col gap-3 ">
        {Object.keys(navbarData).map(navLink => (
            <>
            <div className="flex items-center justify-between gap-20" >
                <p  className="capitalize text-xl  text-white font-bold leading-7 tracking-[0.5px]">
                    <Link href='/'>{navLink}</Link>
                </p>
                {navbarData[navLink].subLinks && <span onClick={(() => handleNavLink(activeLink === navLink ? undefined : navLink))} style={activeLink === navLink ? { rotate: '90deg'} : null} className="text-2xl cursor-pointer text-white transitions"><IoIosArrowForward /></span>}
            </div>
            <div className='flex flex-col'>
            {navLink === activeLink && Object.keys(navbarData[navLink].subLinks).map(subLink => (
                <div key={navLink.split(' ')[0]} className='flex justify-between items-center px-2'>
                    <p onClick={() => setCategory(subLink)} className="text-lg font-light text-white capitalize cursor-pointer">
                        {subLink}
                    </p>
                </div>
            ))}
            </div>
            </>
        ))}
        </div>}
        {activeLink && category  && navbarData[activeLink].subLinks[category]?.categories.length 
        && <div className="flex flex-col text-white">
            <h4  className="capitalize text-xl tracking-[0.5px] mb-4 mt-2">
                    <Link href='/'>{category}</Link>
            </h4>

            <div  className="flex flex-col gap-2 capitalize">
                {navbarData[activeLink].subLinks[category]?.categories.map((cat, index) => (
                    <p key={index}>
                        <Link href={cat[1]}>
                            {cat[0]}
                        </Link>
                    </p>
                ))}
            </div>
        </div> 
        }   
    </nav>
  )
}

export default NavBar
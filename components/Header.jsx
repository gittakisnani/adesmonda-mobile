import React, { useState } from 'react'
import Container from './Container'
import Logo from '../public/assets/images/Logo.svg'
import Navbar from '../public/assets/images/Navbar.svg'
import Link from 'next/link'
import Image from 'next/image'
import NavbarTop from './Navbar'
const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const handleNavBar = () => {
    setNavbar(!navbar)
  }
  return (
    <header className='py-4'>
        <Container className='flex justify-between items-center'>
            <Link href='/'>
                <Image src={Logo} alt='Logo' />
            </Link>
            <button onClick={handleNavBar}>
                <Image src={Navbar} alt='Navigation bar' />
            </button>
           {navbar &&  <NavbarTop handleNavBar={handleNavBar} />}
        </Container>
    </header>
  )
}

export default Header
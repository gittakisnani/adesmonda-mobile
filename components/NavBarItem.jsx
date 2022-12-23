import Link from 'next/link'
import React from 'react'
const NavBarItem = ({ text, url, icon, active = false}) => {
    const activeBorder = {
        background: 'linear-gradient(306.25deg, rgba(0, 0, 0, 0.4) -101.44%, rgba(255, 255, 255, 0.4) 217.79%), #004441',
        boxShadow: '0px 1px 2px rgba(0, 68, 65, 0.4), inset 1px 1px 1px rgba(0, 0, 0, 0.2), inset -1px -1px 1px rgba(0, 0, 0, 0.5)'
    }

    
  return (
    <Link href={url}>
        <div className={`flex flex-col gap-px items-center justify-center relative text-primary w-[60px] h-[50px] ${active ? '!text-white bg-primary rounded-b-lg' : ''}`}>
            {active && <div style={activeBorder} className='rounded-2xl absolute top-0 right-0 left-0 h-1'></div>}
            <span className='text-2xl'>{icon}</span>
            <p className={`text-[8px] uppercase tracking-[2.5px] font-medium text-center ${active ? 'text-white font-bold' : ''}`}>{text}</p>
        </div>
    </Link>
  )
}

export default NavBarItem
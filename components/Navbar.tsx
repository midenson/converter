import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { geistMono } from '@/customfonts'
import { MobileNav } from './MobileNav'

const Navbar = () => {
  return (
    <nav className='flex justify-center items-center w-screen h-20'>
        <div className='flex justify-between items-center w-11/12'>
          <div>
            <Link href={'./'} className='mt-3 md:mr-28  border-black border-2 w-16 h-12 flex justify-center items-center'>
              <Image src={'./logo.svg'} alt='file' width={30} height={30} />
            </Link>
          </div>
          <div className=''>
            <MobileNav />
          </div>
        </div>
    </nav>
  )
}

export default Navbar
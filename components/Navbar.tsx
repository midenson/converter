import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { geistMono } from '@/customfonts'
import { MobileNav } from './MobileNav'

const Navbar = () => {
  return (
    <nav className='flex justify-center items-center w-screen h-20 bg-green-300'>
        <div className='flex justify-between items-center w-11/12'>
          <div className='block lg:hidden'>
            <MobileNav />
          </div>
          <div className={`md:flex md:justify-between md:items-center gap-3 hidden ${geistMono.className}`}>
            <Link href={'./gallery'} className='border border-black w-28 h-12 flex justify-center items-center font-semibold'>Gallery</Link>
            <Link href={'./about'} className='border border-black w-28 h-12 flex justify-center items-center font-semibold'>About</Link>
          </div>
          <div>
            <Link href={'./'} className='mt-3 md:mr-28 bg-red-500 border border-black border-2 w-16 h-12 flex justify-center items-center'>
              <Image src={'./logo.svg'} alt='file' width={30} height={30} />
            </Link>
          </div>
          <div className={`${geistMono.className}`}>
            <Link href={'./contact'} className='border border-black w-28 h-12 flex justify-center items-center font-semibold'>Contact Us</Link>
          </div>
        </div>
    </nav>
  )
}

export default Navbar
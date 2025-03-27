import React from 'react'
import NavLinks from './NavLinks'
import { geistMono, geistSans } from '@/customfonts'
import { Button } from './ui/button'
import { Developers } from './Developers'

const Hero = () => {
  return (
    <div className='flex justify-center items-center w-screen h-[150px] mt-10'>
        <div className='w-11/12'>
            <div className='flex flex-col gap-4'>
                <div>
                    <NavLinks text="number base converter" type="contact" icon="calculator.svg" className="hover:bg-red-500"/>
                </div>
                <div className={`${geistMono.className} text-[20px]`}>Convert Numbers From Any Base to any number base</div>
                <div>
                    <Developers />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
import React from 'react'
import { Button } from './ui/button'
import localFont from 'next/font/local';
type LinkProps = {
    text: string,
    type: string,
    icon: string,
    className?: string,
    onClick?: () => void
} 
export const geistMono = localFont({
  src: "../app/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const NavLinks = ({text, type, icon, className, onClick}: LinkProps) => {
  return (
    <Button onClick={onClick} className={`${className} group ${type === 'food' ? 'rounded-3xl' : type === 'contact' ? 'rounded-3xl' : '' } group-hover:animate-all duration-500 flex justify-between items-center gap-2 border border-black bg-red-500`}>
        <img src={icon} alt='icon' width={20} height={20} className='transition ease-in-out hidden opacity-0 group-hover:block group-hover:opacity-100' />
        <p className={`${geistMono.className}`}>{text}</p>
    </Button>
  )
}

export default NavLinks
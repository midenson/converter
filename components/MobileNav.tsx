import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import Link from 'next/link'
  import NavLinks from "./NavLinks"
  import { geistMono } from "@/customfonts"
import { Button } from "./ui/button"
import { ModeToggle } from "./Toggle"
  
  export function MobileNav() {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Link href={'./'}>
              <img src='./menu.svg' alt='hamburger' width={40}  height={40} className="dark:invert-100"/>
          </Link>
        </SheetTrigger>
        <SheetContent className="flex justify-end items-center" side={"left"}>
          <SheetTitle className="hidden">modal</SheetTitle>
          <div className="h-full w-11/12 flex flex-col justify-start items-center">
            <div className="h-1/3 w-full flex justify-between items-center">
              <ModeToggle />
              <Button variant={'secondary'} className={`${geistMono.className} hover:bg-red-500 cursor-pointer text-white rounded-2xl border border-black bg-red-500`}>Meet the developers</Button>
            </div>
            <div className={`h-2/3 w-full flex flex-col justify-evenly text-4xl ${geistMono.className}`}>
              <Link href={'./'}><p className="text-green-600">Home</p></Link>
              <Link href={'./'} className="transition-all duration-500 hover:text-green-500"><p>Binary</p></Link>
              <Link href={'./'} className="hover:text-green-500"><p>Octal</p></Link>
              <Link href={'./'} className="hover:text-green-500"><p>Hexadecimal</p></Link>
            </div>
            <div className="h-1/3 w-full flex justify-start items-end">
              <div className="w-1/3 h-2/3"></div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    )
  }
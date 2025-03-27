import React from 'react'
import Results from './Results'
import { geistMono } from '@/customfonts'
import { Input } from './ui/input'
import { SelectBase } from './SelectBase'

const Converter = () => {
  return (
    <div className='flex justify-center items-center w-screen'>
        <div className='w-11/12 flex justify-between'>
            <div className='w-1/2 h-full flex flex-col gap-3'>
              <div className='h-full w-10/12 mt-10'><p className={`${geistMono.className}`}>Enter your number in decimal</p></div>
              <div className='w-1/3'>
                <Input 
                  className="border-b-2 border-transparent focus:border-blue-500 focus:outline-none"
                  placeholder='enter number...'
                />
              </div>
              <div>Select base you want to convert to...</div>
              <SelectBase />
            </div>
            <div className='w-1/2 h-full flex justify-between items-center gap-6 '>
              <Results className='bg-green-600' base='binary' value={1110}/>
              <Results className='bg-amber-400 mt-10' base='octal' value={1367}/>
              <Results className='bg-red-400' base='hexadecimal' value={1987}/>
            </div>
        </div>
    </div>
  )
}

export default Converter
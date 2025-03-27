'use client'
import React, { useState } from 'react'
import Results from './Results'
import { geistMono } from '@/customfonts'
import { Input } from './ui/input'
import { SelectBase } from './SelectBase'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Converter = () => {
  const [input, setinput] = useState('');
  const [base, setBase] = useState('');
  function handleSelectChange(value: string) {
    setBase(value)
  }
  return (
    <div className='flex justify-center items-center w-screen'>
        <div className='w-11/12 flex flex-col md:flex-row justify-between'>
            <div className='w-1/2 h-full flex flex-col gap-3'>
              <div className='h-full w-10/12 mt-10'><p className={`${geistMono.className}`}>{parseInt(input)} Enter your number in decimal</p></div>
              <div className='w-1/3'>
                <Input 
                  className="border-b-2 border-transparent focus:border-blue-500 focus:outline-none"
                  placeholder='enter number...'
                  value={input}
                  onChange={(e) => setinput(e.target.value)}
                />
              </div>
              <div> {base} Select base you want to convert to...</div>
                <Select
                  value={base}
                  onValueChange={handleSelectChange} 
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a base" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Number bases</SelectLabel>
                      <SelectItem value="binary">binary</SelectItem>
                      <SelectItem value="octal">octal</SelectItem>
                      <SelectItem value="hexadecimal">hexadecimal</SelectItem>
                    </SelectGroup>
                  </SelectContent>
              </Select>
            </div>
            <div className='w-1/2 h-full flex justify-between items-center gap-3 md:gap-6 '>
              <Results className='bg-green-600 w-[120px] h-48 md:w-[230px] md:h-72' base='binary' value={1110}/>
              <Results className='bg-amber-400 w-[120px] h-48 md:w-[230px] md:h-72 mt-10' base='octal' value={1367}/>
              <Results className='bg-red-400 w-[120px] h-48 md:w-[230px] md:h-72 text-sm' base='hexadecimal' value={1987}/>
            </div>
        </div>
    </div>
  )
}

export default Converter
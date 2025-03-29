'use client'
import React, { useState } from 'react'
import Results from './Results'
import { geistMono } from '@/customfonts'
import { Input } from './ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type convertProps = {
  fromBase: string
  toBase: string
  numValue: string
}

const Converter = () => {
  const [input, setInput] = useState('');
  const [fromBase, setFromBase] = useState('10'); // Default is decimal
  const [toBase, setToBase] = useState('2'); // Default is binary

  // Base names mapping
  const baseNames = {
    '2': 'Binary',
    '8': 'Octal',
    '16': 'Hexadecimal',
    '3': 'Base 3',
    '4': 'Base 4',
    '5': 'Base 5',
    '6': 'Base 6',
    '7': 'Base 7',
    '9': 'Base 9',
    '10': 'Decimal',
    '11': 'Base 11',
  };

  // Handle the base selection
  function handleSelectChangeBase(value: string, isFromBase: boolean) {
    if (isFromBase) {
      setFromBase(value); // Update fromBase
    } else {
      setToBase(value); // Update toBase
    }
  }

  // Convert from any base to decimal, then to the desired base
  function convertBase(numValue: string, fromBase: string, toBase: string) {
    // Step 1: Convert the input to decimal
    const decimalValue = parseInt(numValue, parseInt(fromBase, 10)); // Convert to decimal using fromBase
    if (isNaN(decimalValue)) return 'Invalid input';

    // Step 2: Convert the decimal value to the target base
    const targetBaseValue = parseInt(toBase, 10);
    if (targetBaseValue >= 2 && targetBaseValue <= 36) {
      return decimalValue.toString(targetBaseValue); // Convert to the selected base
    }
    return 'Invalid base';
  }

  return (
    <div className='mt-5 md:mt-0 flex justify-center items-center w-screen'>
      <div className='w-11/12 flex flex-col md:flex-row justify-between'>
        <div className='w-full md:w-1/2 h-full flex flex-col gap-3'>
          <div className='h-full w-10/12 mt-10'>
            <p className={`${geistMono.className}`}>
              Enter your number
            </p>
          </div>
          <div className='w-2/3'>
            <Input
              className="border-b-2 border-transparent focus:border-blue-500 focus:outline-none"
              placeholder='Enter number...'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className='w-full'>Select base of the number you entered...</div>
          <Select value={fromBase} onValueChange={(value) => handleSelectChangeBase(value, true)}>
            <SelectTrigger className="w-2/3">
              <SelectValue placeholder="Select input base" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Input Base</SelectLabel>
                <SelectItem value="2">Binary</SelectItem>
                <SelectItem value="8">Octal</SelectItem>
                <SelectItem value="16">Hexadecimal</SelectItem>
                <SelectItem value="10">Decimal</SelectItem>
                <SelectItem value="3">Base 3</SelectItem>
                <SelectItem value="4">Base 4</SelectItem>
                <SelectItem value="5">Base 5</SelectItem>
                <SelectItem value="6">Base 6</SelectItem>
                <SelectItem value="7">Base 7</SelectItem>
                <SelectItem value="9">Base 9</SelectItem>
                <SelectItem value="11">Base 11</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className='w-full'>Select base you want to convert to...</div>
          <Select value={toBase} onValueChange={(value) => handleSelectChangeBase(value, false)}>
            <SelectTrigger className="w-2/3">
              <SelectValue placeholder="Select target base" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Target Base</SelectLabel>
                <SelectItem value="2">Binary</SelectItem>
                <SelectItem value="8">Octal</SelectItem>
                <SelectItem value="16">Hexadecimal</SelectItem>
                <SelectItem value="10">Decimal</SelectItem>
                <SelectItem value="3">Base 3</SelectItem>
                <SelectItem value="4">Base 4</SelectItem>
                <SelectItem value="5">Base 5</SelectItem>
                <SelectItem value="6">Base 6</SelectItem>
                <SelectItem value="7">Base 7</SelectItem>
                <SelectItem value="9">Base 9</SelectItem>
                <SelectItem value="11">Base 11</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className='w-full md:w-1/2 h-full flex justify-between items-center md:gap-6'>
          {/* Results for converted number */}
          <Results 
            className='bg-green-600 w-[150px] h-48 md:w-[230px] md:h-72' 
            base={baseNames[toBase || '2']} 
            value={convertBase(input, fromBase, toBase)} 
          />
          <Results 
            className='bg-amber-400 w-[150px] h-48 md:w-[230px] md:h-72 mt-10' 
            base={baseNames['8']} 
            value={convertBase(input, fromBase, '8')} 
          />
            <Results 
              className='bg-red-400 w-[150px] h-48 md:w-[230px] md:h-72 text-sm' 
              base={baseNames['16']} 
              value={convertBase(input, fromBase, '16')} 
            />
        </div>
      </div>
    </div>
  );
}

export default Converter;

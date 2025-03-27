'use client'
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { geistMono } from "@/customfonts"
import CountUp from "react-countup"

type numberProps = {
    base: string,
    value: number,
    className: string
}

export default function Results({base, value, className}: numberProps) {
  return (
    <Card className={`w-[230px] h-72 ${className}`}>
      <CardHeader>
        <CardTitle className={`${geistMono.className} md:text-xl`}>{base}</CardTitle>
      </CardHeader>
      <CardContent className="">
        <div className="w-20 h-16 text-3xl">
          <CountUp
            end={value}
            duration={3}
          />
        </div>
      </CardContent>
    </Card>
  )
}

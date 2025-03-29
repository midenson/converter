'use client'
import * as React from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { geistMono } from "@/customfonts"
import CountUp from "react-countup"

type numberProps = {
    base: string,
    value: string,
    className: string
}

export default function Results({base, value, className}: numberProps) {
  return (
    <Card className={`w-[230px] h-72 ${className}`}>
      <CardHeader>
        <CardTitle className={`${geistMono.className} md:text-xl`}>{base}</CardTitle>
      </CardHeader>
      <CardContent className="">
        <div className="w-full h-16 text-2xl text-wrap">
          <p className="text-wrap">
            <CountUp
              end={parseInt(value)}
              duration={3}
              className="text-wrap overflow-hidden"
            />
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

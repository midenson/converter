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

type developerProp = {
    name: string,
    matric:  string,
    className: string
}

export function DevCard({name, matric, className}: developerProp) {
  return (
    <Card className={`w-[230px] ${className}`}>
      <CardHeader>
        <CardTitle className={`${geistMono.className}`}>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        
      </CardContent>
    </Card>
  )
}

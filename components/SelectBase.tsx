import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectBase() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a base" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Number bases</SelectLabel>
          <SelectItem value="apple">binary</SelectItem>
          <SelectItem value="banana">octal</SelectItem>
          <SelectItem value="blueberry">hexadecimal</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

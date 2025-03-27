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

type baseProps = {
  base: string
}
export function SelectBase({base}: baseProps) {
  return (
    <Select value={base}>
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
  )
}

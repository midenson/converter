import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { geistMono } from "@/customfonts"
import { DevCard } from "./DevCard"

export function Developers() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'secondary'} className={`${geistMono.className} cursor-pointer text-white bg-cyan-950 hover:bg-cyan-950 `}>Meet the developers</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Developers</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <div className="flex justify-between items-center">
            <DevCard name="Olatunji Naheem" matric="" className="bg-green-400" />
            <DevCard name="Olatunji Naheem" matric="" className="bg-red-400"/>
        </div>
        <div>
            <DevCard name="Olatunji Naheem" matric="" className="bg-amber-300"/>
        </div>
      </DialogContent>
    </Dialog>
  )
}

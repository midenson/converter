import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
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
        </DialogHeader>
        <div className="flex justify-between items-center">
            <DevCard name="Olatunji Naheem" matric="MEE/20/5873" className="bg-black dark:bg-amber-100 text-white dark:text-black" />
            <DevCard name="Asimiyu Opeyemi" matric="MEE/20/0266" className="bg-black dark:bg-amber-100 text-white dark:text-black"/>
        </div>
        <div>
            <DevCard name="Agboola Oluwatofunmi" matric="MEE/20/5841" className="bg-black dark:bg-amber-100 text-white dark:text-black" />
        </div>
      </DialogContent>
    </Dialog>
  )
}

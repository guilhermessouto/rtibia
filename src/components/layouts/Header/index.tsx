import { Menu, Newspaper } from "lucide-react"

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/DropdownMenu"
import { ModeToggle } from "@/components/ui/ModeToggle"

const Header = () => {
  return (
    <header className="bg-background sticky top-0 z-50 flex justify-between items-center py-2 px-10 border-b sm:px-20">
      <div className="flex items-center space-x-5">
        <DropdownMenu>
          <DropdownMenuTrigger className="py-1.5 px-4 hover:bg-primary/20 rounded-md">
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            
          </DropdownMenuContent>
        </DropdownMenu>

        <a href='/' className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500 text-2xl font-extrabold md:text-4xl cursor-pointer">Tibia Info</a>
      </div>
      
      <div className="flex items-center space-x-4">
        <a href="/news" className="hover:bg-primary/20 py-1.5 px-4 rounded-md">
          <div className="flex items-center space-x-1">
            <Newspaper className="w-[20px] h-[20px] sm:w-[15px] sm:h-[15px]"/>
            <span className="hidden sm:block">Notícias</span>
          </div>
        </a>
        
        <ModeToggle />
      </div>
    </header>
  )
}

export default Header

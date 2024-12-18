import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Home, Menu, PlusSquare, User } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  return (
    <nav className='md:hidden flex items-center justify-between p-4 bg-card text-card-foreground border-b'>
      <Link to="/" className='text-xl font-bold'>
        Social App
      </Link>
      <div className='flex items-center space-x-2'>
        <Button asChild variant="ghost" size="icon">
          <Link to="/">
            <Home className='h-5 w-5'/>
          </Link>
        </Button>
        <Button asChild variant="ghost" size="icon">
          <Link to="/create">
            <PlusSquare className="h-5 w-5" />
          </Link>
        </Button>
        <Button asChild variant="ghost" size="icon">
          <Link to="/profile">
            <User className="h-5 w-5" />
          </Link>
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                Navigate through the app
              </SheetDescription>
            </SheetHeader>
            <div className="mt-4 space-y-2">
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Link>
              </Button>
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link to="/create">
                  <PlusSquare className="mr-2 h-4 w-4" />
                  Create Post
                </Link>
              </Button>
              <Button asChild variant="ghost" className="w-full justify-start">
                <Link to="/profile">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

export default Navbar
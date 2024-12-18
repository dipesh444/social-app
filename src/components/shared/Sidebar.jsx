import { Link } from 'react-router-dom';
import { Home, PlusSquare, User, LogOut, Settings } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useAuth } from '../../context/AuthContext';

const Sidebar = () => {
  const { signOut , user} = useAuth();
  const handleSignOut = async ()=>{
    await signOut()
  }
  return (
    <div className="hidden md:flex h-screen w-64 flex-col bg-card text-card-foreground border-r">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-6">Social App</h1>
        <div className="flex items-center space-x-4 mb-6">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{user?.name}</p>
            <p className="text-sm text-muted-foreground">@{user?.email}</p>
          </div>
        </div>
      </div>
      <ScrollArea className="flex-1">
        <nav className="space-y-2 p-4">
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
          <Button asChild variant="ghost" className="w-full justify-start">
            <Link to="/settings">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Link>
          </Button>
        </nav>
      </ScrollArea>
      <div className="p-4 border-t">
        <Button onClick={handleSignOut} variant="outline" className="w-full">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;


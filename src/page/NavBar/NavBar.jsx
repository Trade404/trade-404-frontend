import React from "react";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { DragHandleHorizontalIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import Sidebar from "./Sidebar";


const NavBar = () => {
    return(
        <div className="px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center">
            <div className="flex items-center gap-3">
            <Sheet>
  <SheetTrigger>
    <Button 
    variant="ghost" 
    size="icon" 
    className="rounded-full h-11 w-11"
    >
        <DragHandleHorizontalIcon className="h-7 w-7"/>
    </Button>
  </SheetTrigger>
  <SheetContent 
  className="w-72 border-r-0 flex flex-col justify center" 
  side="left">
    <SheetHeader>
      <SheetTitle>
        <div className="text-3x1 flex justify-center items-center gap-1">
            <Avatar>
                <AvatarImage src="https://i.ebayimg.com/images/g/WroAAOSwKXti3ugj/s-l1600.webp"></AvatarImage>
            </Avatar>
            <div>
                <span className="font-bold">Trade404</span>
            </div>
        </div>
      </SheetTitle>
    </SheetHeader>
    <Sidebar/>
  </SheetContent>
</Sheet>

            </div>

            </div>
    )
}

export default NavBar
import { Button } from "@/components/ui/button";
import { HomeIcon } from "@radix-ui/react-icons";
import React from "react";

const menu = [
    {name:'Home', path:'/', icon:<HomeIcon className="h-6 w-6"/>},
    {name:'Home', path:'/', icon:<HomeIcon className="h-6 w-6"/>},
    {name:'Home', path:'/', icon:<HomeIcon className="h-6 w-6"/>},
    {name:'Home', path:'/', icon:<HomeIcon className="h-6 w-6"/>}
]

const Sidebar = () => {
    return (
        <div className="mt-10 space-y-5">
            
            <div>
                <Button variant="outline" className="flex items-center gap-5 py-6 w-full">
                    <span className="w-8">
                        <HomeIcon/>
                    </span>
                    <p>Home</p>
                </Button>
            </div>
        </div>
    )
}

export default Sidebar
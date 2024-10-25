import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { DotIcon } from "@radix-ui/react-icons";
import React from "react";

const StockDetails = () => {
    return (
    <div className="p-5 mt-5">
        <div className="flex justify-between">
            <div className="flex gap-5 items-center">
                <div>                
                    <Avatar>
                        <AvatarImage/>
                    </Avatar>
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <p>BTC</p>
                        <DotIcon className="text-gray-400"/>
                        <p className="text-gray-400">Bitcoin</p>
                    </div>
                    <div className="flex items-end gap-2">
                        <p className="text-xl font-bold">$7180</p>
                        <p className="text-red-600">
                            <span>-1525.332</span>
                            <span>-(1.563%)</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default StockDetails
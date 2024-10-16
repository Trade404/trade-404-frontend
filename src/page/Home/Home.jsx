import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {

    const [category, setCategory] = React.useState("all")

    const handleCategory = (value) => {
        setCategory(value)
    }
    return (
        <div className="relative">
            
            <div className="lg:flex">
                <div className="lg:w-[50%] lg:border-r">

                    <div className="p-3 flex items-center gap-4">
                        <Button onClick={() => handleCategory("all")} 
                        variant={category === "all" ? "default" : "outline"}
                        className="rounded-full">
                        All
                        </Button>

                        <Button onClick={() => handleCategory("top50")} 
                        variant={category === "top50" ? "default" : "outline"}
                        className="rounded-full">
                        Top 50
                        </Button>

                        <Button onClick={() => handleCategory("topGainers")} 
                        variant={category === "topGainers" ? "default" : "outline"}
                        className="rounded-full">
                        Top Gainers
                        </Button>

                        <Button onClick={() => handleCategory("topLosers")} 
                        variant={category === "topLosers" ? "default" : "outline"}
                        className="rounded-full">
                        Top Losers
                        </Button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
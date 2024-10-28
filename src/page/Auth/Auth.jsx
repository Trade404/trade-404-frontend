import { Button } from "@/components/ui/button"
import SignUpForm from "./SignUpForm"
import { useNavigate } from "react-router-dom"

const Auth = () => {

    const navigate = useNavigate()
    return (
    <div className="h-screen relative authContainer">
        <div className="absolute top-0 tight-0 left-0 bottom-0 bg=[#030712] bg-opacity-50">
            <div className="bgBlure absolute top-1/2 left-1/2 transform 
            -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center 
            items-center h-[35rem] w-[30rem] rounded-md z-50 
            bg-black bg-opacity-50 shadow-2xl shadow-white">
                <h1 className="text-6xl font-bold pb-9">Trade 404</h1>
                <section>
                    <SignUpForm/>
                    <div className="flex items-center justify-center">
                        <span>Already have account?</span>
                        <Button onClick={() => navigate("/signin")} variant="ghost">
                            Sign In
                        </Button>
                    </div>
                </section>    
            </div>
        </div>
    </div>
)
}

export default Auth
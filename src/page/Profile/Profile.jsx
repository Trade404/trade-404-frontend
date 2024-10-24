import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const Profile = () => {
    return (
    <div className="flex flex-col items-center mb-5">
        <div className="pt-10 w-full lg:w-[60%]">
            <Card>
                <CardHeader className="pb-9">
                    <CardTitle>Your Information</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="lg:flex gap-32">
                        <div className="space-y-7">
                            <div className="flex">
                                <p className="w-[9rem]">Email</p>
                                <p className="text-gray-500">ds@gmail.com</p>
                            </div>
                            <div className="flex">
                                <p className="w-[9rem]">Full Name</p>
                                <p className="text-gray-500">DS</p>
                            </div>
                            <div className="flex">
                                <p className="w-[9rem]">Date Of Birth</p>
                                <p className="text-gray-500">15.06.1995</p>
                            </div>
                            <div className="flex">
                                <p className="w-[9rem]">Nationality</p>
                                <p className="text-gray-500">Bulgarian</p>
                            </div>
                        </div>
                        <div className="space-y-7">
                            <div className="flex">
                                <p className="w-[9rem]">Address</p>
                                <p className="text-gray-500">Tz.3 St.</p>
                            </div>
                            <div className="flex">
                                <p className="w-[9rem]">City</p>
                                <p className="text-gray-500">Sofia</p>
                            </div>
                            <div className="flex">
                                <p className="w-[9rem]">Postcode</p>
                                <p className="text-gray-500">1510</p>
                            </div>
                            <div className="flex">
                                <p className="w-[9rem]">Country</p>
                                <p className="text-gray-500">Bulgaria</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
)
}

export default Profile
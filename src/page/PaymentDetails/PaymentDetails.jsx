import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import PaymentDetailsForm from "./PaymentDetailsForm";
  

const PaymentDetails = () => {
    return (
    <div className="px-20">
        <h1 className="text-3xl font-bold py-10">Payment Details</h1>
        <Card>
            <CardHeader>
                <CardTitle>
                    IF Bank
                </CardTitle>
                <CardDescription>
                    ************5271
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center">
                    <p className="w-32">Account Holder</p>
                    <p className="text-gray-400">: DS</p>
                </div>
                <div className="flex items-center">
                    <p className="w-32">IFSC</p>
                    <p className="text-gray-400">: IFB0000008</p>
                </div>
            </CardContent>
        </Card>
        <Dialog>
            <DialogTrigger>
                <Button className="py-6">Add Payment Details</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Payment Details</DialogTitle>
                </DialogHeader>
                <PaymentDetailsForm/>
            </DialogContent>
        </Dialog>

    </div>
)
}

export default PaymentDetails
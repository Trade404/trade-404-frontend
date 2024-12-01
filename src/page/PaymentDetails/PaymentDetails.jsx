import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import PaymentDetailsForm from "./PaymentDetailsForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPaymentDetails } from "@/state/withdrawal/Action";
  

const PaymentDetails = () => {

    const {withdrawal} = useSelector(store => store)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPaymentDetails({jwt: localStorage.getItem('jwt')}))
    },[])

    return (
    <div className="px-20">
        <h1 className="text-3xl font-bold py-10">Payment Details</h1>
        {withdrawal.paymentDetails ? <Card>
            <CardHeader>
                <CardTitle>
                    IF Bank
                </CardTitle>
                <CardDescription>
                A/C No : {withdrawal.paymentDetails?.accountNumber}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center">
                    <p className="w-32">Account Holder</p>
                    <p className="text-gray-400">: {withdrawal.paymentDetails?.accountHolderName}</p>
                </div>
                <div className="flex items-center">
                    <p className="w-32">IFSC</p>
                    <p className="text-gray-400">: {withdrawal.paymentDetails?.bankName}</p>
                </div>
            </CardContent>
                </Card> :
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
        </Dialog>}


    </div>
)
}

export default PaymentDetails
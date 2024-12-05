import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { store } from "@/state/Store";
import { getWIthdrawalHistory } from "@/state/withdrawal/Action";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Withdrawal = () => {

  const dispatch = useDispatch()
  const { wallet, withdrawal } = useSelector(store => store)

  useEffect(() => {
    dispatch(getWIthdrawalHistory(localStorage.getItem('jwt')))
  },[])


    return (
                <div className="p-5 lg:p-20">
        <h1 className="font-bold text-3xl pb-5">Withdrawal</h1>
        <Table className="border">
  <TableHeader>
    <TableRow>
      <TableHead className="py-5">Date</TableHead>
      <TableHead>Method</TableHead>
      <TableHead>Amount</TableHead>
      <TableHead className="text-right">Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {withdrawal.history.map((item, index) =>     
    <TableRow key={index}>
      <TableCell>{item.date.toString()}</TableCell>
      <TableCell>Bank Account</TableCell>
      <TableCell>${item.amount}</TableCell>
      <TableCell className="text-right">
      {item.status}
      </TableCell>
    </TableRow>)}
  </TableBody>
</Table>
        </div>
    )
}

export default Withdrawal
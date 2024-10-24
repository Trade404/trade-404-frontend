import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

const Withdrawal = () => {
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
    {[1,1,1,1,1,1].map((item, index) =>     
    <TableRow key={index}>
      <TableCell>22/10/2024</TableCell>
      <TableCell>Bank Account</TableCell>
      <TableCell>$68221</TableCell>
      <TableCell className="text-right">
      303
      </TableCell>
    </TableRow>)}
  </TableBody>
</Table>
        </div>
    )
}

export default Withdrawal
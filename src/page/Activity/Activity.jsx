import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

const Activity = () => {
    return (
        <div className="p-5 lg:p-20">
        <h1 className="font-bold text-3xl pb-5">Activity</h1>
        <Table className="border">
  <TableHeader>
    <TableRow>
      <TableHead className="py-5">Date & time</TableHead>
      <TableHead>Trading pair</TableHead>
      <TableHead>Buy price</TableHead>
      <TableHead>Sell price</TableHead>
      <TableHead>Order type</TableHead>
      <TableHead>Profit/Loss</TableHead>
      <TableHead className="text-right">Value</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {[1,1,1,1,1,1].map((item, index) =>     
    <TableRow key={index}>
      <TableCell>
        <p>22/10/2024</p>
        <p className="text-gray-400">16:21:48</p>
      </TableCell>
      <TableCell className="font-medium flex items-center gap-2">
        <Avatar className="-z-50">
            <AvatarImage src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400"/>
        </Avatar>
        <span>Bitcoin</span>
      </TableCell>
      <TableCell>BTC</TableCell>
      <TableCell>9126357982</TableCell>
      <TableCell>69544</TableCell>
      <TableCell>-0.20009</TableCell>
      <TableCell className="text-right">
      $69249
      </TableCell>
    </TableRow>)}
  </TableBody>
</Table>
        </div>
    )
}

export default Activity
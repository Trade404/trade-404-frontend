import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React from "react";

const AssetTable = () => {
    return (
        <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Coin</TableHead>
      <TableHead>Symbol</TableHead>
      <TableHead>Volume</TableHead>
      <TableHead>Market Cap</TableHead>
      <TableHead>24h</TableHead>
      <TableHead className="text-right">Price</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {[1,1,1,1,1,1].map((item, index) =>     
    <TableRow key={index}>
      <TableCell className="font-medium flex items-center gap-2">
        <Avatar className="-z-50">
            <AvatarImage src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400"/>
        </Avatar>
        <span>Bitcoin</span>
      </TableCell>
      <TableCell>BTC</TableCell>
      <TableCell>9126357982</TableCell>
      <TableCell>-0.20009</TableCell>
      <TableCell>69544</TableCell>
      <TableCell className="text-right">$69249</TableCell>
    </TableRow>)}
    <TableRow>
      <TableCell className="font-medium flex items-center gap-2">
        <Avatar className="-z-50">
            <AvatarImage src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400"/>
        </Avatar>
        <span>Bitcoin</span>
      </TableCell>
      <TableCell>BTC</TableCell>
      <TableCell>9126357982</TableCell>
      <TableCell>-0.20009</TableCell>
      <TableCell>69544</TableCell>
      <TableCell className="text-right">$69249</TableCell>
    </TableRow>
  </TableBody>
</Table>

    )
}

export default AssetTable
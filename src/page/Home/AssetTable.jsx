import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AssetTable = ({coin, category}) => {


  const navigate = useNavigate()

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
    {coin.map((item, index) =>     
    <TableRow key={index}>
      <TableCell onClick={() => navigate('/market/bitcoin/')} 
      className="font-medium flex items-center gap-2">
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
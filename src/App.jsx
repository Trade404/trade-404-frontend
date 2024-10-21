import { Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home';
import NavBar from './page/NavBar/NavBar';
import Portfolio from './page/Portfolio/Portfolio';
import Wallet from './page/Wallet/Wallet';
import Activity from './page/Activity/Activity';
import Withdrawal from './page/Withdrawal/Withdrawal';
import PaymentDetails from './page/PaymentDetails/PaymentDetails';
import StockDetails from './page/StockDetails/StockDetails';
import Profile from './page/Profile/Profile';
import Watchlist from './page/Watchlist/Watchlist';
import SearchCoin from './page/Search/SearchCoin';
import Notfound from './page/Notfound/Notfound';


function App() {
  return (
    <>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/activity" element={<Activity/>} />
          <Route path="/wallet" element={<Wallet/>} />
          <Route path="/withdrawal" element={<Withdrawal/>} />
          <Route path="/payment-details" element={<PaymentDetails/>} />
          <Route path="/market/:id" element={<StockDetails/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/watchlist" element={<Watchlist/>} />
          <Route path="/search" element={<SearchCoin/>} />
          <Route path="*" element={<Notfound/>} />
      </Routes>
    </>
  );
}

export default App;
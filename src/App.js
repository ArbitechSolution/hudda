import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbars from './component/Navbar/Navbars';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './component/About/About';
import Buy_Coin from './component/Buy_Coin/Buy_Coin';
import Nft from './component/Nft/Nft';
import NftOpenMarket from './component/Nft_Open_Market/NftOpenMarket';
import LPFarming from './component/LPFarming/LPFarming';
import Swap_Exchange from './component/Swap Exchange/Swap_Exchange';
import WonderLand from './component/WonderLand/WonderLand';
import Footer from './component/Footer/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="/buyCoin" element={<Buy_Coin />} />
          <Route exact path="/Nft" element={<Nft />} />
          <Route exact path='/NftOpenMarket' element={<NftOpenMarket />} />
          <Route exact path='/LPFatming' element={<LPFarming />} />
          <Route exact path='/Swap_Exchange' element={<Swap_Exchange />} />
          <Route exact path='/WonderLand' element={<WonderLand />} />
        </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

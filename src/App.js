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
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route exact path="/" element={<About/>} />
          <Route exact path="/buyCoin" element={<Buy_Coin/>}/>
          <Route exact path="/Nft" element={<Nft/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

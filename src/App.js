import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Home from './Page/Home';
import Coins from './Page/Coins';
import Coins4 from './Page/Coins4';
import Coinpage from './Page/Coinpage';
import Coinstrend from './Page/Coinstrend';
import Coins3 from './Page/Coins3';
import Practice from './Page/Practice';
import Index3  from './Index3';
import Coinspage2 from './Page/Coinspage2';
import Currency from './Page/Currency';
function App() {
  
  return (
    <div  >
   <Router>
      <Routes>
      <Route path='/practice' element={<Practice></Practice>}  exact></Route>
        
        <Route  element={<Home></Home>}  exact></Route>
        <Route path='/coins' element={<Coins></Coins>}  exact></Route>
        <Route path='/coins/:id' element={<Coinpage></Coinpage>}> </Route>
        <Route path='/coins/1' element={<Coinstrend></Coinstrend>}> </Route>
         <Route path='/'element={<Coins4></Coins4>} ></Route>
         <Route path='/index'element={<Index3></Index3>} ></Route>
        <Route path='/prac' element={<Practice></Practice>}> </Route>
         <Route path='/coins2/:id' element={<Coinspage2></Coinspage2>} ></Route> 
         <Route path='/currency' element={<Currency></Currency>} ></Route> 
         
      </Routes>
    </Router>

    </div>
  );
}
export default App;

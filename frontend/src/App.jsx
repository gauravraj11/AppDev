import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import SignUp from './pages/SignUp/SignUp';

function App() {
  
  return (
    <BrowserRouter>
     <div className='navbar'>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
     </div>
    </BrowserRouter>
  )
}

export default App

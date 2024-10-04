import './App.css'
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'

function App() {
  

  return (
    <BrowserRouter>
    <div className='navbar'>
      <Navbar />
    </div>
    </BrowserRouter>
  )
}

export default App

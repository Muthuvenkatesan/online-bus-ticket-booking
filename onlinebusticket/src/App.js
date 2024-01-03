
import './App.css';
import Home from './Component/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Nav from './Component/Nav';
import Footer from './Component/Footer';
import About from './Component/About';
function App() {
  return (
    <div>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/About' element={<About/>}/>
      
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;

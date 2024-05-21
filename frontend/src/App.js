import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Header from './components/Navigation/Header';
import Signup from './Pages/Auth/signup';
function App() {
  return (
    <BrowserRouter>
    <div style={{top:'0',position:'fixed',width:'100%',zIndex:10}}><Header /></div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

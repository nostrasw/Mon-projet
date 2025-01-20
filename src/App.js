import './App.css';
import { Route,Routes} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Login from './routes/Login';
import Menu from './routes/Menu';
import Reservation from './routes/Reservation';
import { ActiveLinkProvider } from './context/ActiveLinkContext';


function App() {
  return (
    <ActiveLinkProvider>
      <Routes>
        <Route path='/little_lemon' element={<Home />}/>
        <Route path='/little_lemon/bookings' element={<Reservation />}/>
        <Route path='/little_lemon/about' element={<About />} />
        <Route path='/little_lemon/login' element={<Login />} />
        <Route path='/little_lemon/menu' element={<Menu />} />
      </Routes>
    </ActiveLinkProvider>
  );
}

export default App;

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Allbeers from './pages/Allbeers';
import Randombeer from './pages/Randombeer';
import BeerDetail from './pages/BeerDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/allbeers" element={<Allbeers/>} />
          <Route path="/allbeers/:id" element={<BeerDetail/>} />
          <Route path="/randombeer" element={<Randombeer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

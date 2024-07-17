import logo from './logo.svg';
import './App.css';
import Landing from './componet/Landing';
import About from './componet/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Servese from './componet/Servese';
import Solutions from './componet/Solutions';
import Portfolio from './componet/portfolio';
import Contectus from './componet/Contect-us';

// https://demo18.houzez.co/
function App() {
  return (
    <>
      

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}>
        </Route>
        <Route path="/About" element={<About />}>
        </Route>
        <Route path="/servises" element={<Servese />}>
        </Route>
        <Route path="/Solutions" element={<Solutions />}>
        </Route>
        <Route path="/Portfolio" element={<Portfolio />}>
        </Route>
        <Route path="/Contect-us" element={<Contectus />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
